import {
  PersistedStoreCommonProperties,
  SvelteStorageUpdateEvent,
} from './types';

export const canUseDOM: boolean = !!(
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'
);

const canUseCustomEvent: boolean =
  typeof CustomEvent === 'function' &&
  typeof window !== 'undefined' &&
  typeof window.dispatchEvent === 'function';

export const canNotifyUpdatesUsingCustomEvents: boolean =
  canUseDOM && canUseCustomEvent;

export const customEventStoreUpdateType = 'svelte-storage-helpers-store-update';

export function dispatchEventStoreUpdate<T>(
  { normalizedKey, storage }: PersistedStoreCommonProperties,
  nextValue: T
) {
  if (canNotifyUpdatesUsingCustomEvents) {
    const storeUpdateEvent: SvelteStorageUpdateEvent<T> = new CustomEvent(
      customEventStoreUpdateType,
      {
        bubbles: false,
        detail: { normalizedKey, storage, nextValue },
      }
    );
    window.dispatchEvent(storeUpdateEvent);
  }
}
