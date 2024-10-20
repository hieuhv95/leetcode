/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max1) {
      max3 = max2;
      max2 = max1;
      max1 = nums[i];
    } else if (nums[i] > max2 && nums[i] < max1) {
      max3 = max2;
      max2 = nums[i];
    } else if (nums[i] > max3 && nums[i] < max2) {
      max3 = nums[i];
    }
  }
  // nếu không có số lớn nhất thứ 3 trả vê số lớn nhất thứ 1
  if (max3 === -Infinity) {
    return max1;
  }
  return max3;
};
