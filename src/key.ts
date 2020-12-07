import { StorageConfig } from './types';
import { getLocalStorage } from './providers';

export function key(
  index: number,
  config?: StorageConfig<unknown>
): string | null {
  const getStorage = config?.getStorage || getLocalStorage;
  const onError = config?.onError || console.error;

  try {
    return getStorage().key(index);
  } catch (err) {
    onError?.(err, index);
  }

  return null;
}
