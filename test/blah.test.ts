import { clear } from '../src';

describe('blah', () => {
  it('works', () => {
    window.localStorage.setItem('ddd', 'dd');
    expect(window.localStorage.length).toBe(1);
    expect(typeof clear).toBe('function');

    clear();

    expect(window.localStorage.length).toBe(0);
  });
});
