import { StorageConfig } from './types';
import { getLocalStorage } from './providers';
import { getNormalizedKey } from './util';
import { resolveConfig } from './config';

export function setItem<T>(key: string, value: T, config?: StorageConfig<T>) {
  const resolvedConfig = resolveConfig(config);
  const getStorage = resolvedConfig.getStorage || getLocalStorage;
  const serialize = resolvedConfig.serialize || JSON.stringify;

  try {
    const normalizedKey = getNormalizedKey(key, resolvedConfig.version);
    const storage = getStorage(key, resolvedConfig.version);

    const serialized = serialize(value);

    storage.setItem(normalizedKey, serialized);
  } catch (err) {
    resolvedConfig.onError?.(err, config, key);
  }
}
