import { StorageConfig } from './types';
import { getLocalStorage } from './providers';
import { resolveConfig } from './config';

export function key(
  index: number,
  config?: StorageConfig<unknown>
): string | null {
  const resolvedConfig = resolveConfig(config);

  const getStorage = resolvedConfig.getStorage || getLocalStorage;
  const onError = resolvedConfig.onError || console.error;

  try {
    return getStorage().key(index);
  } catch (err) {
    onError?.(err, index, config);
  }

  return null;
}
