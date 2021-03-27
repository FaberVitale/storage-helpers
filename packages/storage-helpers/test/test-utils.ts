export const raisedError = new Error('dddd');

export const onError = jest.fn();

export function identity<T>(value: T): T {
  return value;
}
