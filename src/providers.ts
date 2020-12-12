import { StorageLike } from './types';

declare var localStorage: StorageLike | undefined;
declare var sessionStorage: StorageLike | undefined;

export function getLocalStorage(): StorageLike {
  return typeof localStorage === 'object' && localStorage
    ? localStorage
    : getNoopStorage();
}

export function getSessionStorage(): StorageLike {
  return typeof sessionStorage === 'object' && sessionStorage
    ? sessionStorage
    : getNoopStorage();
}

class NoopStorage implements StorageLike {
  readonly length: number = 0;
  setItem() {
    return null;
  }
  getItem() {
    return null;
  }
  clear() {}
  removeItem() {}
  key() {
    return null;
  }
}
export function getNoopStorage(): StorageLike {
  return new NoopStorage();
}
