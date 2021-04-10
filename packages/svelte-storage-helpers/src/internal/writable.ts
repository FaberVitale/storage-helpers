import {
  getStorageItem,
  setStorageItem,
  StorageConfig,
  normalizeStorageKey,
  getSessionStorage,
  getLocalStorage,
} from 'storage-helpers';
import { writable, Writable } from 'svelte/store';
import {
  PersistedWritable,
  PersistedWritableOptions,
  StorageType,
  SvelteStorageUpdateEvent,
  PersistedStoreCommonProperties,
} from './types';
import {
  canNotifyUpdatesUsingCustomEvents,
  canUseDOM,
  customEventStoreUpdateType,
  dispatchEventStoreUpdate,
} from './utils';

class PersistedWritableManger<T> implements PersistedStoreCommonProperties {
  initialValue: T | null;
  updating: boolean;
  readonly key: string;
  readonly normalizedKey: string;
  readonly storage: StorageType;
  readonly storageConfig: StorageConfig<T>;

  constructor(
    key: string,
    initialValue: T,
    options?: PersistedWritableOptions<T>
  ) {
    this.key = key;
    this.initialValue = initialValue;
    this.storage = options?.storage === 'session' ? 'session' : 'local';
    this.updating = false;
    this.storageConfig = {
      ...options?.storageConfig,
      getStorage:
        this.storage === 'session' ? getSessionStorage : getLocalStorage,
    };
    this.normalizedKey = normalizeStorageKey(key, this.storageConfig);
  }

  getStorageValue(): T | null {
    return getStorageItem(this.key, this.storageConfig);
  }

  setStorageValue(val: T): void {
    setStorageItem(this.key, val, this.storageConfig);
  }

  sync = (set: (val: T) => void) => {
    const retrieved = getStorageItem(this.key, this.storageConfig);

    if (retrieved !== null) {
      set(retrieved);
    }
  };

  updateStorageOnFirstSubscription(set: (val: T) => void) {
    const retrieved = this.getStorageValue();

    if (retrieved != null) {
      set(retrieved);
    } else if (this.initialValue !== null) {
      this.setStorageValue(this.initialValue);

      this.initialValue = null;
    }
  }

  createHandleStorageEvent = (set: (val: T) => void) => {
    return (evt: StorageEvent) => {
      const isSameStorage: boolean =
        (evt.storageArea === window.sessionStorage &&
          this.storage === 'session') ||
        (evt.storageArea === window.localStorage && this.storage === 'local');

      if (
        !this.updating &&
        isSameStorage &&
        typeof evt.key === 'string' &&
        evt.key === this.normalizedKey
      ) {
        this.sync(set);
      }
    };
  };

  createHandleStoreUpdateEvent = (set: (val: T) => void) => {
    if (!canNotifyUpdatesUsingCustomEvents) {
      return null;
    }

    return (evt: Event) => {
      if (
        this.updating ||
        evt?.type !== customEventStoreUpdateType ||
        typeof (evt as CustomEvent).detail !== 'object' ||
        (evt as CustomEvent).detail == null
      ) {
        return;
      }

      const { detail } = evt as SvelteStorageUpdateEvent<unknown>;

      if (
        this.normalizedKey === detail.normalizedKey &&
        detail.storage === this.storage
      ) {
        this.sync(set);
      }
    };
  };

  runWritableSet = (svelteWritable: Writable<T>, value: T) => {
    try {
      this.updating = true;
      svelteWritable.set(value);
      this.setStorageValue(value);
      dispatchEventStoreUpdate(this, value);
    } finally {
      this.updating = false;
    }
  };

  runWritableUpdate = (svelteWritable: Writable<T>, updater: (val: T) => T) => {
    let nextValue: T | undefined = undefined;
    const updateStore = (runUpdate: typeof updater): typeof updater => {
      return function _persistedWritableUpdate(val: T) {
        nextValue = runUpdate(val);

        return nextValue;
      };
    };

    try {
      this.updating = true;
      svelteWritable.update(updateStore(updater));

      if (typeof nextValue !== 'undefined') {
        this.setStorageValue(nextValue);
        dispatchEventStoreUpdate(this, nextValue);
      }
    } finally {
      this.updating = false;
    }
  };
}

export function persistedWritable<T>(
  key: string,
  initialValue: T,
  options?: PersistedWritableOptions<T>
): PersistedWritable<T> {
  const writableManager = new PersistedWritableManger(
    key,
    initialValue,
    options
  );

  const startNotifier = (set: (val: T) => void) => {
    writableManager.updateStorageOnFirstSubscription(set);

    if (canUseDOM) {
      const storageEventHandler = writableManager.createHandleStorageEvent(set);
      const storeUpdateEventHandler = writableManager.createHandleStoreUpdateEvent(
        set
      );

      window.addEventListener('storage', storageEventHandler);

      if (storeUpdateEventHandler) {
        window.addEventListener(
          customEventStoreUpdateType,
          storeUpdateEventHandler
        );
      }

      return () => {
        window.removeEventListener('storage', storageEventHandler);

        if (storeUpdateEventHandler) {
          window.removeEventListener(
            customEventStoreUpdateType,
            storeUpdateEventHandler
          );
        }
      };
    } else {
      // SSR or workers
      return undefined;
    }
  };

  const svelteWritable = writable<T>(initialValue, startNotifier);

  const output: PersistedWritable<T> = {
    normalizedKey: writableManager.normalizedKey,
    storage: writableManager.storage,
    set(value: T) {
      writableManager.runWritableSet(svelteWritable, value);
    },
    update(updater: (currentValue: T) => T) {
      writableManager.runWritableUpdate(svelteWritable, updater);
    },

    subscribe(...args: Parameters<Writable<T>['subscribe']>) {
      return svelteWritable.subscribe.apply(svelteWritable, args);
    },
  };

  return output;
}
