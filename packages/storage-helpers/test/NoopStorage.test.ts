import { NoopStorage } from '../src/storage-helpers';

describe('NoopStorage', () => {
  const storage = new NoopStorage();

  beforeEach(() => {
    storage.clear();
    storage.setItem('key', 'val');
  });

  test('NoopStorage does not ', () => {
    storage.setItem('key', 'van');

    expect(storage.length).toBe(0);
    expect(storage.getItem('key')).toBe(null);
    expect(storage.key(0)).toBe(null);
    expect(storage.removeItem('key')).toBe(undefined);
    expect(storage.clear()).toBe(undefined);
  });
});
