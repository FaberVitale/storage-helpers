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
