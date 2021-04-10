import { PersistedWritableOptions, PersistedReadable } from './types';
import { persistedWritable } from './writable';

export function storageReadable<T>(
  key: string,
  initialValue: T,
  options?: PersistedWritableOptions<T>
): PersistedReadable<T> {
  const writable = persistedWritable<T>(key, initialValue, options);

  return {
    normalizedKey: writable.normalizedKey,
    storage: writable.storage,
    subscribe: writable.subscribe,
  };
}
