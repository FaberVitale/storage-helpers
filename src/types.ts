export interface StorageConfig<T> {
  /**
   * `storage` provider, defaults to `() => self.localStorage`
   */
  getStorage?: (key?: string, version?: string) => Storage;

  /**
   * An error handler,
   * defaults to `console.error`.
   */
  onError?: (raisedError: any, config: StorageConfig<T>, key?: string) => void;

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
