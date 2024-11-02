/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let hasNum = -1; // số đã có
  let missingNum = -1; // số không mong muốn
  let findedNums = [];
  for (let i = 1; i <= nums.length; i++) {
    findedNums[i] = false;
  }
  // tìm số đã có
  for (let i = 0; i < nums.length; i++) {
    if (findedNums[nums[i]]) {
      hasNum = nums[i];
    } else {
      findedNums[nums[i]] = true;
    }
  }
  // tìm số thiếu
  for (let i = 1; i < findedNums.length; i++) {
    if (!findedNums[i]) {
      missingNum = i;
      break;
    }
  }
  return [hasNum, missingNum];
};
