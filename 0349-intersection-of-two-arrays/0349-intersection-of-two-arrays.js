/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let new_nums1 = [];
  let new_nums2 = [];
  let intersectionNums = [];
  for (let i = 0; i < nums1.length; i++) {
    let isHasNums = true;
    for (let j = 0; j < new_nums1.length; j++) {
      if (nums1[i] === new_nums1[j]) {
        isHasNums = false;
        break;
      }
    }
    if (isHasNums) {
      new_nums1.push(nums1[i]);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    let isHasNums = true;
    for (let j = 0; j < new_nums2.length; j++) {
      if (nums2[i] === new_nums2[j]) {
        isHasNums = false;
        break;
      }
     
    }
    if (isHasNums) {
      new_nums2.push(nums2[i]);
    }
  }
  for (let i = 0; i < new_nums1.length; i++) {
    for (let j = 0; j < new_nums2.length; j++) {
      if (new_nums1[i] === new_nums2[j]) {
        intersectionNums.push(new_nums1[i]);
        break;
      }
    }
  }
  return intersectionNums;
};
