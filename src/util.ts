export function getGlobalThis(): typeof globalThis {
  /* eslint-disable no-restricted-globals */
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  } else if (typeof self !== 'undefined') {
    return self;
  } else {
    return window;
  }
  /* eslint-enable no-restricted-globals */
}

export function getNormalizedKey(
  key: string,
  version: string | undefined
): string {
  if (version) {
    return `${key}@${version}`;
  }

  return key;
}

export function nothing() {
  return null;
}

export function noop() {}
