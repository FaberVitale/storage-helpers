import { key, StorageConfig } from '../src/storage-helpers';
import { onError, raisedError } from './test-utils';

describe('key', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();

    (window.localStorage.clear as any).mockClear();
    (window.sessionStorage.clear as any).mockClear();
    onError.mockClear();
  });

  it('returns the string given the index', () => {
    const keys = ['as', 'asd', 'ava', 'deda'];
    Object.freeze(keys);

    keys.forEach(key => {
      window.localStorage.setItem(key, key);
    });

    const retrivedKeys = [];

    for (let i = 0, len = window.localStorage.length; i < len; i++) {
      const retrievedKey = key(i);

      if (typeof retrievedKey === 'string') {
        retrivedKeys.push(retrievedKey);
      }
    }

    expect(new Set(retrivedKeys).size).toBe(keys.length);
  });

  it('passes error to config.onError', () => {
    const config: StorageConfig<unknown> = {
      onError,
      getStorage: () =>
        ({
          key: () => {
            throw raisedError;
          },
        } as any),
    };
    const errorArgs = [raisedError, config];

    key(0, config);

    expect(onError).toHaveBeenCalledWith(...errorArgs);
  });
});
