export interface StorageConfig<T> {
  /**
   * `storage` provider, defaults to `() => self.localStorage`
   */
  getStorage?: (key?: string) => Storage;

  onError?: () => void;

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
