function zeroMatrix(matrix) {
    let numRows = matrix.length;
    let numCols = matrix[0].length;
    let rowMap = {};
    let colMap = {};

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (matrix[i][j] == 0) {
                rowMap[i] = 1;
                colMap[j] = 1;
            }
        }
    }

    for (let row = 0; row < numRows; row++) {
        if (rowMap[row] == 1) {
            for (let c = 0; c < numCols; c++) {
                matrix[row][c] = 0;
            }
        }
    }

    for (let col = 0; col < numCols; col++) {
        if (colMap[col] == 1) {
            for (let r = 0; r < numRows; r++) {
                matrix[r][col] = 0;
            }
        }
    }
}

/* TEST */
var testMatrix = [
    [1, 2, 3, 4],
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [1, 2, 3, 1]
];

console.log('before:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);

zeroMatrix(testMatrix);

console.log('after:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);
