import { normalizeStorageKey } from '../src/storage-helpers';

const tests: {
  args: Parameters<typeof normalizeStorageKey>;
  expected: string;
}[] = [
  { args: ['', undefined], expected: '' },
  { args: ['bom', {}], expected: 'bom' },
  { args: ['key', { namespace: 'cxc', version: 0 }], expected: '[cxc]key@v0' },
  { args: ['key', { version: 2.3 }], expected: 'key@v2.3' },
  { args: ['k', { version: 'v2' }], expected: 'k@v2' },
  { args: ['k', { version: null, namespace: null } as any], expected: 'k' },
  { args: ['k', { version: '', namespace: '' } as any], expected: 'k' },
];

describe('normalizeStorageKey', () => {
  it.each(tests)('%# %j', ({ args, expected }) => {
    expect(normalizeStorageKey(...args)).toBe(expected);
  });
});
