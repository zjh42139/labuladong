class NumMatrix {
  // 0,0 到 i,j 的矩阵和
  private preSums: number[][];
  constructor(matrix: number[][]) {
    const rowLen = matrix.length;
    const colLen = matrix[0].length;
    if (rowLen === 0 || colLen === 0) return;
    this.preSums = [];
    for (let i = 0; i < rowLen + 1; i++) {
      this.preSums.push([]);
    }
    for (let i = 0; i < rowLen + 1; i++) {
      for (let j = 0; j < colLen + 1; j++) {
        this.preSums[i][j] = 0;
      }
    }
    for (let i = 1; i <= rowLen; i++) {
      for (let j = 1; j <= colLen; j++) {
        this.preSums[i][j] =
          this.preSums[i - 1][j] +
          this.preSums[i][j - 1] +
          matrix[i - 1][j - 1] -
          this.preSums[i - 1][j - 1];
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return (
      this.preSums[row2 + 1][col2 + 1] -
      this.preSums[row1][col2 + 1] -
      this.preSums[row2 + 1][col1] +
      this.preSums[row1][col1]
    );
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
const matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
];
const obj = new NumMatrix(matrix);
const param_1 = obj.sumRegion(2, 1, 4, 3);
console.log(param_1);

export {};
