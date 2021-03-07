import * as adt from './adt'

const representation = (sparseMatrix: number[][]) => {
	// 행렬이 가질 수 있는 최대 원소 수 + 희소행렬 정보 row수
	const result = adt.create<number[]>(sparseMatrix.length * sparseMatrix[0].length + 1)

	// 0번째에 희소행렬 크기 저장
	adt.store(result, 0, adt.create<number>(3))

	adt.store(result[0], 0, sparseMatrix.length)
	adt.store(result[0], 1, sparseMatrix[0].length)

	let cnt = 0

	for (let rowIndex = 0; rowIndex < sparseMatrix.length; rowIndex++) {
		const row = adt.retrieve(sparseMatrix, rowIndex)

		for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
			const e = adt.retrieve(row, columnIndex)

			if (e !== 0) {
				const resultIndex = cnt + 1

				adt.store(result, resultIndex, adt.create<number>(3))

				adt.store(result[resultIndex], 0, rowIndex)
				adt.store(result[resultIndex], 1, columnIndex)
				adt.store(result[resultIndex], 2, e)

				cnt += 1
			}
		}
	}

	// 희소행렬 데이터 수 저장
	adt.store(result[0], 2, cnt)

	// undefined 제거
	return result.filter((row) => row[0] !== undefined)
}

export default representation
