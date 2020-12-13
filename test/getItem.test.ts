import {
  getStorageItem,
  NoopStorage,
  getSessionStorage,
  setStorageItem,
} from '../src';
import { raisedError, identity, onError } from './test-utils';

const epochTime = 16075603000;

describe('getStorageItem', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();

    window.sessionStorage.setItem('a', 'a');
    window.sessionStorage.setItem('date', new Date(epochTime) + '');
    window.localStorage.setItem('b', 'b');
    window.localStorage.setItem('bc', 'bc');

    (window.localStorage.clear as any).mockClear();
    (window.sessionStorage.clear as any).mockClear();
    onError.mockClear();
  });

  it('uses default storage if none is provided', () => {
    expect(getStorageItem('b', { hydrate: identity })).toBe('b');
    expect(
      getStorageItem('bc', { getStorage: undefined, hydrate: identity })
    ).toBe('bc');
  });

  it('returns null if a value is not inside the storage', () => {
    const unusedKey = '__NOT__HERE___';

    expect(getStorageItem(unusedKey)).toBe(null);
    expect(getStorageItem(unusedKey, { getStorage: getSessionStorage })).toBe(
      null
    );
    expect(getStorageItem(unusedKey, { getStorage: NoopStorage.create })).toBe(
      null
    );
  });

  it('parses the returned value with the provided revirer', () => {
    expect(
      getStorageItem('a', { hydrate: identity, getStorage: getSessionStorage })
    ).toEqual('a');
    expect(
      getStorageItem('date', {
        hydrate: val => new Date(val),
        getStorage: getSessionStorage,
      })
    ).toEqual(new Date(epochTime));
  });

  it('retrieves keys with version correctly', () => {
    const config = {
      version: 'v1.1',
    };
    const key = 'du';
    const value = { a: 2, b: 2 };

    setStorageItem(key, value, config);

    expect(window.localStorage.getItem(key)).toBe(null);

    expect(getStorageItem(key, config)).toEqual(value);
  });

  it('retrieves keys with namespace correctly', () => {
    const config = {
      namespace: 'toast',
    };
    const key = 'du';
    const value = { a: 2, b: 2 };

    setStorageItem(key, value, config);

    expect(window.localStorage.getItem(key)).toBe(null);

    expect(getStorageItem(key, config)).toEqual(value);
  });

  it('handles storage method errors with the provided function', () => {
    const key = 'cab';
    const config = {
      getStorage: () => {
        throw raisedError;
      },
      onError,
    };

    getStorageItem(key, config);
    expect(onError).toBeCalledWith(raisedError, config, key);
  });
});
