/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let prevRow = [];
  for (let i = 0; i <= rowIndex; i++) {
    let newRow = [];
    // số lượng phần tử mỗi row
    let quantity = i + 1;
    for (let j = 0; j < quantity; j++) {
      if (j == 0 || j == i) {
        newRow[j] = 1;
      } else {
        newRow[j] = prevRow[j - 1] + prevRow[j];
      }
    }
    if (i === rowIndex) {
      return newRow;
    }
    prevRow = newRow;
  }
};
