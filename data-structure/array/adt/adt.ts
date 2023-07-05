export const create = <T>(n: number): Array<T> => {
  const a: Array<T> = new Array(n)

  return a
}

export const retrieve = <T>(a: Array<T>, i: number): T => {
  if (i < 0 || i > a.length) {
    throw new Error('Out of bounds!')
  }

  return a[i]
}

export const store = <T>(a: Array<T>, i: number, e: T): void => {
  if (i < 0 || i > a.length) {
    throw new Error('Out of bounds!')
  }

  a[i] = e
}
