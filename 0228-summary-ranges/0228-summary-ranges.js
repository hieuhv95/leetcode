/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
     let ranges = [];
    if (nums.length === 0) return ranges; 
    let startNum = nums[0];
    let endNum;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1] + 1) {
             endNum = nums[i - 1];
            if (startNum === endNum) {
                ranges.push(startNum.toString());
            } else {
                ranges.push(startNum + "->" + endNum);
            }
            startNum = nums[i]; 
        }
    }
    endNum = nums[nums.length - 1];
    if (startNum === endNum) {
        ranges.push(startNum.toString());
    } else {
        ranges.push(startNum + "->" + endNum);
    }
    return ranges; 
    };