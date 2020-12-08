import { StorageConfig } from './types';
import { getLocalStorage } from './providers';
import { resolveConfig } from './config';

export function clearAll(config?: StorageConfig<unknown>) {
  const resolvedConfig = resolveConfig(config);
  const getStorage = resolvedConfig.getStorage || getLocalStorage;

  try {
    getStorage().clear();
  } catch (err) {
    resolvedConfig.onError?.(err, config);
  }
}
