/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // indext của sô khác 0
    let indext = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[indext] = nums[i];
            indext++;
        }
    }
    for(let i=indext;i<nums.length;i++){
        nums[i]=0;
    }
};
