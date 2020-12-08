import { StorageConfig } from './types';
import { getLocalStorage } from './providers';

const defaultConfig = {
  getStorage: getLocalStorage,
  hydrate: JSON.parse,
  onError: console.error,
} as const;

export function resolveConfig<T>(
  inputConfig?: StorageConfig<T>
): StorageConfig<T> {
  if (!inputConfig) {
    return defaultConfig as StorageConfig<T>;
  }

  return {
    ...defaultConfig,
    ...inputConfig,
  } as StorageConfig<T>;
}
