/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    let max1 = -Infinity; 
    let max2 = -Infinity; 
    let max3 = -Infinity;
    let min1 = Infinity;  
    let min2 = Infinity; 
    for (let num of nums) {
        if (num > max1) {
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max3 = max2;
            max2 = num;
        } else if (num > max3) {
            max3 = num;
        }

        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }
    }

    // Tính tích của 3 số lớn nhất
    const threeMaxProduct = max1 * max2 * max3;
    // Tính tích của 2 số nhỏ nhất với số lớn nhất
    const twoMinNumAndMaxNumProduct = min1 * min2 * max1;


    return (threeMaxProduct > twoMinNumAndMaxNumProduct) ? threeMaxProduct : twoMinNumAndMaxNumProduct;
};