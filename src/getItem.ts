import { StorageConfig } from './types';
import { getLocalStorage } from './providers';
import { getNormalizedKey } from './util';

export function getItem<T>(key: string, config?: StorageConfig<T>): T | null {
  const getStorage = config?.getStorage || getLocalStorage;
  const onError = config?.onError || console.error;
  const hydrate = config?.hydrate || JSON.parse;
  const version = config?.version;

  let output: T | null = null;

  try {
    const normalizedKey = getNormalizedKey(key, version);
    const storage = getStorage(key, version);

    const serialized: string | null = storage.getItem(normalizedKey);

    if (typeof serialized === 'string') {
      output = hydrate(serialized);
    }
  } catch (err) {
    onError?.(err, config);
  }

  return output;
}
