/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const count = {};
  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]]) {
      count[nums[i]] += 1;
    } else {
      count[nums[i]]=1;
    }
  }
  for (let num in count) {
    if (count[num] === 1) {
      return parseInt(num);
    }
  }
  return null;
};
