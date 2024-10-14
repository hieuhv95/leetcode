/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let triangle = [];
    for (let i = 0; i < numRows; i++) {
        let newRow = [];
        // số lượng phần tử mỗi row
        let quantity = i + 1;
        for (let j = 0; j < quantity; j++) {
            if (j == 0 || j == i) {
                newRow[j] = 1;
            } else {
                newRow[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }

        }
        triangle[i] = newRow;
    }
    return triangle;
};