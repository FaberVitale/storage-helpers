import { StorageConfig } from './types';
import { getLocalStorage } from './providers';
import { getNormalizedKey } from './util';

export function setItem<T>(key: string, value: T, config?: StorageConfig<T>) {
  const getStorage = config?.getStorage || getLocalStorage;
  const serialize = config?.serialize || JSON.stringify;
  const onError = config?.onError || console.error;

  try {
    const normalizedKey = getNormalizedKey(key, config?.version);
    const storage = getStorage(key);

    const serialized = serialize(value);

    storage.setItem(normalizedKey, serialized);
  } catch (err) {
    onError?.(err, config, key);
  }
}
