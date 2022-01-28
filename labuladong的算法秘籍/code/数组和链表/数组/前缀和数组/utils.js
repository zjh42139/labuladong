function generateMatrix(rowLen, colLen) {
  const matrix = [];
  for (let i = 0; i < rowLen; i++) {
    matrix.push([]);
  }
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      matrix[i][j] = 0;
    }
  }
  return matrix;
}

export {
  generateMatrix
}