export function getGlobalThis(): typeof globalThis {
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  } else if (typeof self !== 'undefined') {
    return self;
  } else {
    return window;
  }
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
