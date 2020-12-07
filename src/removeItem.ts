import { StorageConfig } from './types';
import { getLocalStorage } from './providers';
import { getNormalizedKey } from './util';

export function removeItem(key: string, config?: StorageConfig<unknown>): void {
  const getStorage = config?.getStorage || getLocalStorage;
  const onError = config?.onError || console.error;
  const version = config?.version;

  try {
    const normalizedKey = getNormalizedKey(key, version);
    const storage = getStorage(key, version);

    storage.removeItem(normalizedKey);
  } catch (err) {
    onError?.(err, config, key);
  }
}
