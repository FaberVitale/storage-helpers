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
   * `storage` provider, defaults to `() => self.localStorage`
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
   * defaults to `JSON.stringify`.
   */
  serialize?: (val: T) => string;

  /**
   * Deserializes the value acquired from the local storage,
   * defaults to `JSON.parse`
   */
  hydrate?: (val: string) => T;

  /**
   * Optional key versioning.
   */
  version?: string;
}
