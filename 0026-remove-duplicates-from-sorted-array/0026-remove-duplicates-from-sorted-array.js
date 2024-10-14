/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    // số lượng phần tử duy nhất
    let k=1;
    for (i=1;i<nums.length;i++){
        if (nums[i] !== nums[i-1]){
            nums[k]=nums[i];
            k++;
        }
        
    }
    return k;
};