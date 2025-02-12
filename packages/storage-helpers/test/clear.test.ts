import {
  clearStorage,
  getSessionStorage,
  StorageConfig,
} from '../src/storage-helpers';

describe('clearStorage', () => {
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

  it('erases all items from the default storage', () => {
    expect(window.localStorage.length).not.toBe(0);

    clearStorage();
    expect(window.localStorage.clear).toHaveBeenCalledTimes(1);
    expect(window.localStorage.length).toBe(0);

    window.localStorage.setItem('s', 's');
    clearStorage({ getStorage: undefined });

    expect(window.localStorage.clear).toHaveBeenCalledTimes(2);
    expect(window.localStorage.length).toBe(0);
  });

  it('erases all items from the localStorage', () => {
    expect(window.localStorage.length).not.toBe(0);

    clearStorage();
    expect(window.localStorage.clear).toHaveBeenCalledTimes(1);
    expect(window.localStorage.length).toBe(0);
  });

  it('erases all items from sessionStorage', () => {
    expect(window.sessionStorage.length).not.toBe(0);
    clearStorage({ getStorage: getSessionStorage });

    expect(window.sessionStorage.clear).toHaveBeenCalledTimes(1);
    expect(window.sessionStorage.length).toBe(0);
    expect(window.localStorage.length).not.toBe(0);
  });

  it('handles errors using the provided function', () => {
    const config: StorageConfig<unknown> = {
      onError: jest.fn(),
      getStorage: () => {
        throw new Error('message');
      },
    };

    clearStorage(config);

    expect(config.onError).toBeCalledTimes(1);
  });
});
