import { nothing, noop } from './util';

export function getLocalStorage(): Storage {
  return typeof localStorage === 'object' && localStorage
    ? localStorage
    : getNoopStorage();
}

export function getSessionStorage(): Storage {
  return typeof sessionStorage === 'object' && sessionStorage
    ? sessionStorage
    : getNoopStorage();
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
