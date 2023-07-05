import { describe, test, expect } from '@jest/globals'
import * as adt from './adt'
import representation from './representation'

describe('배열 기본 연산', () => {
  test('생성', () => {
    const length = 5

    const arr = adt.create<number>(length)

    expect(arr.length).toBe(length)
  })

  test('저장', () => {
    const length = 5

    const arr = adt.create<number>(length)

    adt.store(arr, 2, 1)

    expect(arr).toEqual([undefined, undefined, 1, undefined, undefined])
  })

  test('찾기', () => {
    const length = 5

    const arr = adt.create<number>(length)

    adt.store(arr, 3, 1)

    expect(adt.retrieve(arr, 3)).toBe(1)
  })
})

describe('희소행렬', () => {
  const sparseMatrix = adt.create<number[]>(4)

  adt.store<number[]>(sparseMatrix, 0, adt.create<number>(5))
  adt.store<number[]>(sparseMatrix, 1, adt.create<number>(5))
  adt.store<number[]>(sparseMatrix, 2, adt.create<number>(5))
  adt.store<number[]>(sparseMatrix, 3, adt.create<number>(5))

  for (let i = 0; i < sparseMatrix.length; i++) {
    sparseMatrix[i].fill(0)
  }

  adt.store<number>(sparseMatrix[0], 2, 3)
  adt.store<number>(sparseMatrix[0], 4, 4)

  adt.store<number>(sparseMatrix[1], 2, 5)
  adt.store<number>(sparseMatrix[1], 3, 7)

  adt.store<number>(sparseMatrix[3], 1, 2)
  adt.store<number>(sparseMatrix[3], 2, 6)

  const answer = [
    [4, 5, 6],
    [0, 2, 3],
    [0, 4, 4],
    [1, 2, 5],
    [1, 3, 7],
    [3, 1, 2],
    [3, 2, 6],
  ]

  test('희소행렬을 2차원 배열로 변환', () => {
    const result = representation(sparseMatrix)

    expect(result).toStrictEqual(answer)
  })
})
