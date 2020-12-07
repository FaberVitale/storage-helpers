import { StorageConfig } from './types';
import { getLocalStorage } from './providers';
import { getNormalizedKey } from './util';

export function removeItem(key: string, config?: StorageConfig<unknown>): void {
  const getStorage = config?.getStorage || getLocalStorage;
  const onError = config?.onError || console.error;

  try {
    const normalizedKey = getNormalizedKey(key, config?.version);
    const storage = getStorage(key);

    storage.removeItem(normalizedKey);
  } catch (err) {
    onError?.(err, key);
  }
}
