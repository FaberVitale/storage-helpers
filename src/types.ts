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
    raisedError: any,
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
