/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let current_sum = 0;
    // tìm tổng của k phần tử đầu
    for (let i = 0; i < k; i++) {
        current_sum += nums[i]
    }
    let max_sum = current_sum
    // tổng các phần tử còn lại
    for (let i = k; i < nums.length; i++) {
        current_sum = current_sum - nums[i - k] + nums[i]
        if (current_sum > max_sum) {
            max_sum = current_sum
        }

    }
    return max_sum / k
};