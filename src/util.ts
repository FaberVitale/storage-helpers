export function getNormalizedKey(
  key: unknown,
  version: string | undefined
): string {
  if (version) {
    return `${key}@${version}`;
  }

  return key + '';
}
