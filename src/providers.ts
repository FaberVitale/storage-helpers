import { getGlobalThis } from './util';

export function getLocalStorage(): Storage {
  return getGlobalThis().localStorage;
}

export function getSessionStorage(): Storage {
  return getGlobalThis().sessionStorage;
}
