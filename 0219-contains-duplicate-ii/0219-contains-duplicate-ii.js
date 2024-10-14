/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let numsObj = {};
    for (let i = 0; i < nums.length; i++) {
        if (i - numsObj[nums[i]] <= k && numsObj[nums[i]] !== undefined) {
            return true;
        }
        numsObj[nums[i]] = i;
    }
    return false;
};