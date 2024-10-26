/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const seenNum = [];
    const unseenNum = [];

    for (let i = 0; i < nums.length; i++) {
        seenNum.push(false);
    };
    // đánh dấu số đã xuất hiện
    for (let num of nums) {
        seenNum[num - 1] = true
    }
    // tìm só chưa xuất hiện
    for(let i=0;i<nums.length;i++){
        if(!seenNum[i]){
            unseenNum.push(i+1)
        }
    }
    return unseenNum
}
