export function plus(first: number, second: number) {
  return first + second;
}

export function oldPlus(first: string | number, second: string | number) {
  console.warn('deprecated method, use plus instead');
  return plus(+first, +second);
}
