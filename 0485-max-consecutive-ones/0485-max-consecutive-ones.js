/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let currentNumCount = 0;
  let maxNumCount = 0;
  for (let num of nums) {
    if (num == 1) {
      currentNumCount += 1;
    } else {
      if (currentNumCount > maxNumCount) {
        maxNumCount = currentNumCount;
      }
      currentNumCount = 0;
    }
  }
  if (currentNumCount > maxNumCount) {
    maxNumCount = currentNumCount;
  }
  return maxNumCount;
};
