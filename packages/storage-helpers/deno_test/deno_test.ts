import { assertEquals } from 'https://deno.land/std@0.83.0/testing/asserts.ts';
import {
  clearStorage,
  getStorageItem,
  removeStorageItem,
  setStorageItem,
  key,
  normalizeStorageKey,
} from '../mod.ts';

Deno.test({
  name: 'getStorageItem',
  fn: () => {
    assertEquals(getStorageItem('key'), null);
  },
});

Deno.test({
  name: 'setStorageItem',
  fn: () => {
    setStorageItem('key', {});
  },
});

Deno.test({
  name: 'removeStorageItem',
  fn: () => {
    removeStorageItem('key');
  },
});

Deno.test({
  name: 'clearStorage',
  fn: () => {
    clearStorage();
  },
});

Deno.test({
  name: 'key',
  fn: () => {
    assertEquals(key(303), null);
  },
});

Deno.test({
  name: 'normalizeStorageKey',
  fn: () => {
    assertEquals(normalizeStorageKey('vav', { version: 2 }), 'vav@v2');
    assertEquals(normalizeStorageKey('v'), 'v');
  },
});
