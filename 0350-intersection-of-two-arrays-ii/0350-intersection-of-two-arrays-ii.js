/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let intersectNum = [];
    let count = {};
    for (let num of nums1) {
        if (count[num] === undefined) {
            count[num] = 1;
        }else{
            count[num]++;
        }
    }
    for(let num of  nums2){
        if(count[num]>0){
            intersectNum.push(num);
            count[num]--;
        }
    }
    return intersectNum;
};