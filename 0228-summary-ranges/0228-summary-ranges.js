/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
     let ranges = [];
    if (nums.length === 0) return ranges; 
    let startNum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1] + 1) {
            if (startNum === nums[i - 1]) {
                ranges.push(startNum.toString());
            } else {
                ranges.push(startNum + "->" + nums[i - 1]);
            }
            startNum = nums[i]; 
        }
    }
    if (startNum === nums[nums.length - 1]) {
        ranges.push(startNum.toString());
    } else {
        ranges.push(startNum + "->" + nums[nums.length - 1]);
    }
    return ranges; 
    };