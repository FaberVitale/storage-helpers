/**
 * An equivalent to `lib.dom.d.ts` Storage
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

/**
 * An optional configuration argument of all the helper functions
 * of [storage-helpers](https://github.com/FaberVitale/storage-helpers) that enables to set:
 * 1. The way data is serialized and hydrated.
 * 2. Which storage is used.
 * 3. key version and namespace.
 * 4. How to handle exceptions.
 * 5. Validation for hydrated data.
 */
export interface StorageConfig<T> {
  /**
   * `storage` provider, defaults to {@link getLocalStorage}
   *
   * Used by
   * - {@link setStorageItem}
   * - {@link getStorageItem}
   * - {@link removeStorageItem}
   * - {@link key}
   * - {@link clearStorage}
   */
  getStorage?: (key?: string, version?: string) => StorageLike;

  /**
   * An optional error handler,
   * defaults to `console.error`.
   *
   * Used by
   * - {@link setStorageItem}
   * - {@link getStorageItem}
   * - {@link removeStorageItem}
   * - {@link key}
   * - {@link clearStorage}
   *
   * ### Custom logger example
   * ```typescript
   * const storageConfig = {
   *  onError: (raisedError, ...rest) => {
   *    exampleCustomLogger.error(raisedError, { info: rest }),
   *  },
   * };
   *
   * // In case of error `getStorageItem` returns null
   * // and the error is logged using the function provided in the config.
   * getStorageItem('user-conf', storageConfig);
   * ```
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
   * Used by
   * - {@link setStorageItem}
   *
   * ### Example
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
  serialize?: (inputValue: T) => string;

  /**
   * Deserializes the value acquired from the local storage,
   * defaults to [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
   *
   * Used by
   * - {@link getStorageItem}
   *
   * ### Example
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
  hydrate?: (serialized: string) => T;

  /**
   * Optional synchronous validation of the hydrated value retrieved by the storage:
   *
   * a function that raises an exception if the retrieved value is
   * not valid.
   *
   * Used by
   * - {@link getStorageItem}
   *
   * ### Simple usage
   * ```typescript
   * const storageConfig = {
   *   validateHydrated: (val: unknown) => {
   *     if(typeof val !== 'number' || !Number.isSafeInter(val)) {
   *       throw new TypeError("bad value");
   *     }
   *   }
   * };
   *
   * const finiteIntNum = 'finite-int-num';
   *
   * setStorageItem(finiteNum, {}, storageConfig); // persists value
   * getStorageItem(finiteNum, storageConfig); // Incorrect value returns null.
   * ```
   *
   * ### Validation using yup
   * ```typescript
   * const userSchema = yup.object().shape({
   *   name: yup.string().defined(),
   *   age: yup
   *     .number()
   *     .integer()
   *     .min(0)
   *     .defined(),
   * });
   *
   * const config = {
   *   validate: val => userSchema.validateSync(val),
   * };
   *
   * setStorageItem('user', { name: 'Tom', age: -1 }, config); // persists value
   * getStorageItem('user', config); // Incorrect value returns null.
   * ```
   */
  validateHydrated?: (hydrated: unknown) => unknown;

  /**
   * Optional key versioning.
   *
   * Used by
   * - {@link setStorageItem}
   * - {@link getStorageItem}
   * - {@link removeStorageItem}
   *
   * @example
   * ```typescript
   * const storageConfig = { version: "v1" };
   *
   * // persists on `localStorage` the entry `myKey@v1` -> `{"val":2}`
   * setStorageItem("myKey", { val: 2 }, storageConfig);
   *
   * // returns `{ val: 2 }`
   * getStorageItem("myKey", storageConfig);
   *
   * // removes the entry `myKey@v1` -> `{"val":2}`.
   * removeStorageItem("myKey", storageConfig);
   * ```
   */
  version?: string;

  /**
   * Optional key namespace that can be added to minimize storage key collisions.
   *
   * Used by
   * - {@link setStorageItem}
   * - {@link getStorageItem}
   * - {@link removeStorageItem}
   *
   * @example
   * ```typescript
   * const storageConfig = { version: "v1", namespace: "tracking" };
   *
   * // persists on `localStorage` the entry `[tracking]user@v1` -> `{"name":"Mark"}`
   * setStorageItem("user", { name: "Mark" }, storageConfig);
   *
   * // returns `{"name":"Mark"}`
   * getStorageItem("user", storageConfig);
   *
   * // removes the entry `[tracking]user@v1` -> `{"name":"Mark"}`.
   * removeStorageItem("user", storageConfig);
   * ```
   */
  namespace?: string;
}

declare var localStorage: StorageLike | undefined;
declare var sessionStorage: StorageLike | undefined;

const defaultConfig = {
  getStorage: getLocalStorage,
  hydrate: JSON.parse,
  serialize: JSON.stringify,
  onError: console.error,
} as const;

type ResolvedStorageConfig<T> = Omit<
  StorageConfig<T>,
  'getStorage' | 'hydrate' | 'serialize'
> &
  Required<Pick<StorageConfig<T>, 'getStorage' | 'hydrate' | 'serialize'>>;

function resolveConfig<T>(
  inputConfig?: StorageConfig<T>
): ResolvedStorageConfig<T> {
  if (!inputConfig) {
    return defaultConfig as ResolvedStorageConfig<T>;
  }

  const output = {
    ...defaultConfig,
    ...inputConfig,
  };

  if (!output.hydrate) {
    output.hydrate = defaultConfig.hydrate;
  }

  if (!output.serialize) {
    output.serialize = defaultConfig.serialize;
  }

  if (!output.getStorage) {
    output.getStorage = defaultConfig.getStorage;
  }

  return output;
}

function noop() {}
function nothing() {
  return null;
}

function normalizeStorageKey<T = unknown>(
  key: unknown,
  config: StorageConfig<T>
): string {
  let output = key + '';

  if (config.namespace) {
    output = `[${config.namespace}]${output}`;
  }

  if (config.version) {
    output = `${output}@${config.version}`;
  }

  return output;
}

const createNoopStorage = (() => {
  let instance: StorageLike | null = null;

  return function create(this: void): StorageLike {
    if (!instance) {
      instance = {
        length: 0,
        setItem: noop,
        getItem: nothing,
        clear: noop,
        removeItem: noop,
        key: nothing,
      };

      if (typeof Object.freeze === 'function') {
        Object.freeze(instance);
      }
    }

    return instance;
  };
})();

/**
 * A dummy [storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage) that does not store values:
 * - length is always `0`.
 * - `setItem` and `removeItem` and `clear` have no effect.
 * - `getItem` and `key` always return null.
 *
 * ### Usage
 * ```typescript
 *  const noopStorage = NoopStorage.create();
 *
 * noopStorage.setItem('key', '43');
 * noopStorage.getItem('key') // null
 * ```
 */
export const NoopStorage = {
  create: createNoopStorage,
} as const;

/**
 * Returns [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
 * if present in the current environment
 * or a dummy [storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage).
 */
export function getLocalStorage(): StorageLike {
  return typeof localStorage === 'object' && localStorage
    ? localStorage
    : createNoopStorage();
}

/**
 * Returns [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
 * if present in the current environment
 * or a dummy [storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage).
 */
export function getSessionStorage(): StorageLike {
  return typeof sessionStorage === 'object' && sessionStorage
    ? sessionStorage
    : createNoopStorage();
}

/**
 * Retrieves a value indexed by the input key to
 * an optional {@link StorageConfig.getStorage | `config.getStorage`} or uses {@link getLocalStorage}.
 *
 * The item returned by the storage is hydrated using {@link StorageConfig.hydrate | `config.hydrate`} or defaults
 * to `JSON.parse`.
 *
 * If {@link StorageConfig.validateHydrated | `config.validateHydrated`}
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
  const getStorage = resolvedConfig.getStorage;
  const hydrate = resolvedConfig.hydrate;
  const validateHydrated = resolvedConfig.validateHydrated;

  let output: T | null = null;

  try {
    const normalizedKey = normalizeStorageKey(key, resolvedConfig);
    const storage = getStorage(key, resolvedConfig.version);

    const serialized: string | null = storage.getItem(normalizedKey);

    if (typeof serialized === 'string') {
      output = hydrate(serialized);

      if (typeof validateHydrated === 'function') {
        validateHydrated(output);
      }
    }
  } catch (err) {
    output = null;
    resolvedConfig.onError?.(err, config, key);
  }

  return output;
}

/**
 * Adds the entry `key` -> `config.serialize(value)` inside a storage
 * provided by an optional
 * {@link StorageConfig.getStorage | `config.getStorage`} or
 * {@link getLocalStorage}.
 *
 * ### Simple usage
 * ```ts
 * // Adds the entry `'user-conf' -> '{"colorScheme":"dark","locale":"es-ES"}'`
 * // to `localStorage`
 * setStorageItem("user-conf", { colorScheme: "dark", locale: 'es-ES' });
 * ```
 *
 * ### Custom serialization/hydration
 * ```ts
 * const userConfKey = 'user-conf';
 * const storageConfig = {
 *  hydrate: val => JSON.parse(atob(val)),
 *  serialize: val => btoa(JSON.stringify(val))},
 * };
 *
 * // Stores the object using a custom serialization.
 * setStorageItem(userConfKey,
 *   { colorScheme: "dark", locale: 'es-ES' },
 *   storageConfig
 * );
 *
 * // Returns `{ colorScheme: "dark", locale: 'es-ES' }`
 * getStorageItems(userConfKey, storageConfig);
 *```
 *
 * ### Key namespace and version
 * ```typescript
 * const storageConfig = { version: "v1", namespace: "tracking" };
 *
 * // persists on `localStorage` the entry `[tracking]user@v1` -> `{"name":"Mark"}`
 * setStorageItem("user", { name: "Mark" }, storageConfig);
 *
 * // returns `{"name":"Mark"}`
 * getStorageItem("user", storageConfig);
 * ```
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
  const getStorage = resolvedConfig.getStorage;
  const serialize = resolvedConfig.serialize;

  try {
    const normalizedKey = normalizeStorageKey(key, resolvedConfig);
    const storage = getStorage(key, resolvedConfig.version);

    const serialized = serialize(value);

    storage.setItem(normalizedKey, serialized);
  } catch (err) {
    resolvedConfig.onError?.(err, config, key);
  }
}

/**
 * Removes an item indexed by `key` inside the storage provided by an optional
 * {@link StorageConfig.getStorage | `config.getStorage`} or uses {@link getLocalStorage}.
 *
 * @param key
 * @param config
 *
 * @see [MDN/docs/Web/API/Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)
 * @see [MDN/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
 */
export function removeStorageItem<T = unknown>(
  key: string,
  config?: StorageConfig<T>
): void {
  const resolvedConfig = resolveConfig(config);
  const getStorage = resolvedConfig.getStorage;

  try {
    const normalizedKey = normalizeStorageKey(key, resolvedConfig);
    const storage = getStorage(key, resolvedConfig.version);

    storage.removeItem(normalizedKey);
  } catch (err) {
    resolvedConfig.onError?.(err, config, key);
  }
}

/**
 * Given an input `n` returns the `nth` key of the storage provided in
 * {@link StorageConfig.getStorage | `config.getStorage`} or uses {@link getLocalStorage}.
 *
 * Returns `null` if there's not a key at the requested position.
 * @param index
 * @param config
 */
export function key<T = unknown>(
  index: number,
  config?: StorageConfig<T>
): string | null {
  const resolvedConfig = resolveConfig(config);
  const getStorage = resolvedConfig.getStorage;

  try {
    return getStorage().key(index);
  } catch (err) {
    resolvedConfig.onError?.(err, config);
  }

  return null;
}

/**
 * Erases all items inside the storage provided by an optional
 * {@link StorageConfig.getStorage | `config.getStorage`} or uses {@link getLocalStorage}.
 *
 * @param config
 *
 * @see [MDN/docs/Web/API/Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)
 * @see [MDN/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
 */
export function clearStorage<T = unknown>(config?: StorageConfig<T>) {
  const resolvedConfig = resolveConfig(config);
  const getStorage = resolvedConfig.getStorage;

  try {
    getStorage().clear();
  } catch (err) {
    resolvedConfig.onError?.(err, config);
  }
}
