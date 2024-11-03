/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let currentlengthCount = 1;
  let maxLengthCount = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentlengthCount += 1;
    } else {
      if (currentlengthCount > maxLengthCount) {
        maxLengthCount = currentlengthCount;
      }
      currentlengthCount = 1;
    }
  }
  if (currentlengthCount > maxLengthCount) {
    maxLengthCount = currentlengthCount;
  }
  return maxLengthCount;
};
