import { getGlobalThis, nothing, noop } from './util';

export function getLocalStorage(): Storage {
  return getGlobalThis().localStorage;
}

export function getSessionStorage(): Storage {
  return getGlobalThis().sessionStorage;
}

export function getNoopStorage(): Storage {
  return {
    __STORAGE__: 'NoopStorage',
    setItem: nothing,
    getItem: nothing,
    length: 0,
    clear: noop,
    key: nothing,
    removeItem: nothing,
  };
}
