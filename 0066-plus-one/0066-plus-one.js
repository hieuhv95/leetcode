/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(i=digits.length-1;i>=0;i--){
        if(digits[i]<9){
            digits[i]+=1;
            return digits;
        }else{
            digits[i]=0;
        }
    }
    let newDigits=[1];
    for(j=0;j<digits.length;j++){
        newDigits.push(digits[j]);
    }
    return newDigits;
};