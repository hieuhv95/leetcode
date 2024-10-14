/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //indext cuối trong nums1,nums2
    let a= m-1;
    let b= n-1;
    // indext  cuối trong nums1 sau khi merge
    let c= m+n-1;
    while (b>=0){
        if(a>=0 && nums1[a] > nums2[b]){
            nums1[c]=nums1[a];
            a--;
        }
        else{
            nums1[c]= nums2[b];
            b--;
        }
         c--;
    }
    

};