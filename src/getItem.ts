import { StorageConfig } from './types';
import { getLocalStorage } from './providers';
import { getNormalizedKey } from './util';
import { resolveConfig } from './config';

export function getItem<T>(key: string, config?: StorageConfig<T>): T | null {
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
