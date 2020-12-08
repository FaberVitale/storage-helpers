import { getItem, getNoopStorage, getSessionStorage, setItem } from '../src';
import { raisedError, identity, onError } from './test-utils';

const epochTime = 16075603000;

describe('getItem', () => {
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
    expect(getItem('b', { hydrate: identity })).toBe('b');
    expect(getItem('bc', { getStorage: undefined, hydrate: identity })).toBe(
      'bc'
    );
  });

  it('returns null if a value is not inside the storage', () => {
    const unusedKey = '__NOT__HERE___';

    expect(getItem(unusedKey)).toBe(null);
    expect(getItem(unusedKey, { getStorage: getSessionStorage })).toBe(null);
    expect(getItem(unusedKey, { getStorage: getNoopStorage })).toBe(null);
  });

  it('parses the returned value with the provided revirer', () => {
    expect(
      getItem('a', { hydrate: identity, getStorage: getSessionStorage })
    ).toEqual('a');
    expect(
      getItem('date', {
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

    setItem(key, value, config);

    expect(window.localStorage.getItem(key)).toBe(null);

    expect(getItem(key, config)).toEqual(value);
  });

  it('handles storage method errors with the provided function', () => {
    const key = 'cab';
    const config = {
      getStorage: () => {
        throw raisedError;
      },
      onError,
    };

    getItem(key, config);
    expect(onError).toBeCalledWith(raisedError, config, key);
  });
});
