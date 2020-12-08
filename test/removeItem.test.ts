import {
  getLocalStorage,
  getSessionStorage,
  removeItem,
  StorageConfig,
} from '../src';

describe('removeItem', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();

    window.sessionStorage.setItem('a', 'a');
    window.sessionStorage.setItem('ab', 'ab');
    window.localStorage.setItem('b', 'b');
    window.localStorage.setItem('bc', 'bc');

    (window.localStorage.clear as any).mockClear();
    (window.sessionStorage.clear as any).mockClear();
  });

  it('removes an item with input key from the default storage', () => {
    expect(window.localStorage.getItem('b')).not.toBe(null);
    removeItem('b');
    expect(window.localStorage.getItem('b')).toBe(null);

    expect(window.localStorage.getItem('bc')).not.toBe(null);
    removeItem('bc', { getStorage: undefined });
    expect(window.localStorage.getItem('bc')).toBe(null);
  });

  it('removes an item with input key from local storage', () => {
    const key = 'b';

    expect(window.localStorage.getItem(key)).not.toBe(null);

    removeItem(key, { getStorage: getLocalStorage });

    expect(window.localStorage.getItem(key)).toBe(null);
  });

  it('removes an item with input key from session storage', () => {
    const key = 'a';

    expect(window.sessionStorage.getItem(key)).not.toBe(null);

    removeItem(key, { getStorage: getSessionStorage });

    expect(window.localStorage.getItem(key)).toBe(null);
  });

  it('handles errors using the provided function', () => {
    const key = 'a';

    const config: StorageConfig<unknown> = {
      onError: jest.fn(),
      getStorage: () => {
        throw new Error('message');
      },
    };

    removeItem(key, config);

    expect(config.onError).toBeCalledTimes(1);
  });
});
