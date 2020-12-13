/**
 *  @see [MDN/docs/Web/API/Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)
 */
export interface StorageLike {
  setItem(key: string, value: string): void;
  getItem(key: string): string | null;
  removeItem(key: string): void;
  key(index: number): string | null;
  clear(): void;
  readonly length: number;
}

export interface StorageConfig<T> {
  /**
   * `storage` provider, defaults to {@link getLocalStorage}
   */
  getStorage?: (key?: string, version?: string) => StorageLike;

  /**
   * An optional error handler,
   * defaults to `console.error`.
   */
  onError?: (
    raisedError: unknown,
    config: StorageConfig<T> | undefined,
    key?: string
  ) => void;

  /**
   * Converts the value provided to `string`,
   * defaults to [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).
   *
   * @example
   * ```typescript
   * const serialize = (val: unknown) => btoa(JSON.serialize(val));
   * const hydrate = (serialized: string) => JSON.parse(atob(serialized));
   * const storageConfig = { serialize, hydrate };
   *
   * // stores `value` as base-64 string `eyJ2YWwiOjR9`.
   * setStorageItem("myKey", { val: 4 }, storageConfig);
   *
   * // returns `{ val: 4 }`.
   * getStorageItem("myKey", storageConfig);
   * ```
   */
  serialize?: (val: T) => string;

  /**
   * Deserializes the value acquired from the local storage,
   * defaults to [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
   *
   * @example
   * ```typescript
   * const serialize = (val: unknown) => btoa(JSON.serialize(val));
   * const hydrate = (serialized: string) => JSON.parse(atob(serialized));
   * const storageConfig = { serialize, hydrate };
   *
   * // stores `value` as base-64 string `eyJ2YWwiOjR9`.
   * setStorageItem("myKey", { val: 4 }, storageConfig);
   *
   * // returns `{ val: 4 }`.
   * getStorageItem("myKey", storageConfig);
   * ```
   */
  hydrate?: (val: string) => T;

  /**
   * Optional key versioning.
   *
   * @example
   * ```typescript
   * const storageConfig = { version: "v1" };
   *
   * // persists on `localStorage` the entry as `myKey@v1` -> `{"val":2}`
   * setStorageItem("myKey", { val: 2 }, storageConfig);
   *
   * // returns `{ val: 2 }`
   * getItem("myKey", storageConfig);
   *
   * ```
   */
  version?: string;
}

declare var localStorage: StorageLike | undefined;
declare var sessionStorage: StorageLike | undefined;

const defaultConfig = {
  getStorage: getLocalStorage,
  hydrate: JSON.parse,
  onError: console.error,
} as const;

function resolveConfig<T>(inputConfig?: StorageConfig<T>): StorageConfig<T> {
  if (!inputConfig) {
    return defaultConfig as StorageConfig<T>;
  }

  return {
    ...defaultConfig,
    ...inputConfig,
  } as StorageConfig<T>;
}

function getNormalizedKey(key: unknown, version: string | undefined): string {
  if (version) {
    return `${key}@${version}`;
  }

  return key + '';
}

/**
 * Returns [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
 * if present in the current environment
 * or falls back to a dummy [Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage) that does not store values.
 */
export function getLocalStorage(): StorageLike {
  return typeof localStorage === 'object' && localStorage
    ? localStorage
    : NoopStorage.create();
}

/**
 * Returns [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
 * if present in the current environment
 * or falls back to a dummy [Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)  that does not store values.
 */
export function getSessionStorage(): StorageLike {
  return typeof sessionStorage === 'object' && sessionStorage
    ? sessionStorage
    : NoopStorage.create();
}

export class NoopStorage implements StorageLike {
  readonly length: number;

  /**
   * Static
   */
  static create(): NoopStorage {
    return new NoopStorage();
  }

  constructor() {
    this.length = 0;

    Object.defineProperty(this, 'length', {
      enumerable: false,
      configurable: false,
      writable: false,
    });
  }

  setItem(key: string, value: string): void;
  setItem() {}
  getItem(key: string): string | null;
  getItem() {
    return null;
  }
  clear() {}

  removeItem(key: string): void;
  removeItem() {}

  key(index: number): string | null;
  key() {
    return null;
  }
}

/**
 * Retrieves a value indexed by key to the storage provided by
 * an optional `config.getStorage` or {@link getLocalStorage}.
 *
 * The item returned by the storage is hydrated using `config.hydrate`, defaults
 * to `JSON.parse`.
 *
 * @param key
 * @param config
 *
 * @see [MDN/docs/Web/API/Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)
 * @see [MDN/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
 */
export function getStorageItem<T>(
  key: string,
  config?: StorageConfig<T>
): T | null {
  const resolvedConfig = resolveConfig(config);
  const getStorage = resolvedConfig.getStorage || getLocalStorage;
  const hydrate = resolvedConfig.hydrate || JSON.parse;

  let output: T | null = null;

  try {
    const normalizedKey = getNormalizedKey(key, resolvedConfig.version);
    const storage = getStorage(key, resolvedConfig.version);

    const serialized: string | null = storage.getItem(normalizedKey);

    if (typeof serialized === 'string') {
      output = hydrate(serialized);
    }
  } catch (err) {
    resolvedConfig.onError?.(err, config, key);
  }

  return output;
}

/**
 * Adds the entry `key` -> `config.serialize(value)` inside a storage.
 *
 * @param key
 * @param value
 * @param config
 */
export function setStorageItem<T>(
  key: string,
  value: T,
  config?: StorageConfig<T>
) {
  const resolvedConfig = resolveConfig(config);
  const getStorage = resolvedConfig.getStorage || getLocalStorage;
  const serialize = resolvedConfig.serialize || JSON.stringify;

  try {
    const normalizedKey = getNormalizedKey(key, resolvedConfig.version);
    const storage = getStorage(key, resolvedConfig.version);

    const serialized = serialize(value);

    storage.setItem(normalizedKey, serialized);
  } catch (err) {
    resolvedConfig.onError?.(err, config, key);
  }
}

/**
 * Removes an item indexed by `key` inside the storage provided by an optional
 * `config.getStorage` or uses {@link getLocalStorage}.
 *
 * @param key
 * @param config
 *
 * @see [MDN/docs/Web/API/Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)
 * @see [MDN/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
 */
export function removeStorageItem(
  key: string,
  config?: StorageConfig<unknown>
): void {
  const resolvedConfig = resolveConfig(config);
  const getStorage = resolvedConfig.getStorage || getLocalStorage;

  try {
    const normalizedKey = getNormalizedKey(key, resolvedConfig.version);
    const storage = getStorage(key, resolvedConfig.version);

    storage.removeItem(normalizedKey);
  } catch (err) {
    resolvedConfig.onError?.(err, config, key);
  }
}

export function key(
  index: number,
  config?: StorageConfig<unknown>
): string | null {
  const resolvedConfig = resolveConfig(config);
  const getStorage = resolvedConfig.getStorage || getLocalStorage;

  try {
    return getStorage().key(index);
  } catch (err) {
    resolvedConfig.onError?.(err, config);
  }

  return null;
}

/**
 * Erases all items inside the storage provided by an optional
 * `config.getStorage` or falls back to {@link getLocalStorage}.
 *
 * @param config
 *
 * @see [MDN/docs/Web/API/Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)
 * @see [MDN/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
 */
export function clearStorage(config?: StorageConfig<unknown>) {
  const resolvedConfig = resolveConfig(config);
  const getStorage = resolvedConfig.getStorage || getLocalStorage;

  try {
    getStorage().clear();
  } catch (err) {
    resolvedConfig.onError?.(err, config);
  }
}
