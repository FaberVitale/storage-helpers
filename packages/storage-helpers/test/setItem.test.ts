import {
  getSessionStorage,
  setStorageItem,
  NoopStorage,
} from '../src/storage-helpers';
import { onError, raisedError } from './test-utils';

const tests: {
  args: Parameters<typeof setStorageItem>;
  expected: { key: string; value: string | null; error?: boolean };
  storage: 'local' | 'session' | null;
}[] = [
  {
    args: ['ke', {}],
    expected: { key: 'ke', value: '{}' },
    storage: 'local',
  },
  {
    args: ['k', '3', { version: 'v1' }],
    expected: { key: 'k@v1', value: `"3"` },
    storage: 'local',
  },
  {
    args: [3 as any, '3', { getStorage: getSessionStorage }],
    expected: { key: '3', value: `"3"` },
    storage: 'session',
  },
  {
    args: [
      'aa',
      [1, 2, 3],
      { serialize: r => `${r}`, getStorage: getSessionStorage },
    ],
    expected: { key: 'aa', value: '1,2,3' },
    storage: 'session',
  },
  {
    args: [
      'a',
      [],
      {
        getStorage: () => {
          throw raisedError;
        },
        onError,
      },
    ],
    expected: { key: 'a', value: null },
    storage: 'local',
  },
  {
    args: [
      'a',
      [],
      {
        getStorage: NoopStorage.create,
        onError,
      },
    ],
    expected: { key: 'a', value: null },
    storage: null,
  },
  {
    args: [
      'a',
      [],
      {
        getStorage: () => {
          throw raisedError;
        },
        onError,
      },
    ],
    expected: { key: 'a', value: null, error: true },
    storage: null,
  },
  {
    args: [
      'a',
      [],
      {
        getStorage: () => {
          throw raisedError;
        },
        onError: undefined,
      },
    ],
    expected: { key: 'a', value: null, error: true },
    storage: null,
  },
  {
    args: [
      'a',
      { a: [] },
      {
        getStorage: undefined,
        onError: undefined,
      },
    ],
    expected: { key: 'a', value: '{"a":[]}', error: true },
    storage: 'local',
  },
  {
    args: [
      'myKey',
      { val: 4 },
      {
        version: 'v1',
        hydrate: val => JSON.parse(atob(val)),
        serialize: val => btoa(JSON.stringify(val)),
      },
    ],
    expected: { key: 'myKey@v1', value: 'eyJ2YWwiOjR9' },
    storage: 'local',
  },
  {
    args: [
      'user',
      { name: 'Mark' },
      {
        namespace: 'tracking',
      },
    ],
    expected: { key: '[tracking]user', value: '{"name":"Mark"}' },
    storage: 'local',
  },
];

describe('setStorageItem', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();

    (window.localStorage.clear as any).mockClear();
    (window.sessionStorage.clear as any).mockClear();
    onError.mockClear();
  });

  it.each(tests)('%# %j', ({ args, expected, storage }) => {
    setStorageItem.apply(null, args);

    let retrieved: ReturnType<Storage['getItem']>;

    switch (storage) {
      case 'local':
        retrieved = window.localStorage.getItem(expected.key);
        break;
      case 'session':
        retrieved = window.sessionStorage.getItem(expected.key);
        break;
      default:
        retrieved = null;
    }

    expect(retrieved).toEqual(expected.value);

    if (expected.error && args[2]?.onError) {
      expect(args[2].onError).toHaveBeenCalledWith(
        raisedError,
        args[2],
        args[0]
      );
    }
  });
});
