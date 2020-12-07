import { StorageConfig } from './types';
import { getLocalStorage } from './providers';

export function clearAll(config?: StorageConfig<unknown>) {
  const getStorage = config?.getStorage || getLocalStorage;
  const onError = config?.onError || console.error;

  try {
    getStorage().clear();
  } catch (err) {
    onError?.(err, config);
  }
}
