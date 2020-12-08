import { StorageConfig } from './types';
import { getLocalStorage } from './providers';
import { getNormalizedKey } from './util';
import { resolveConfig } from './config';

export function removeItem(key: string, config?: StorageConfig<unknown>): void {
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
