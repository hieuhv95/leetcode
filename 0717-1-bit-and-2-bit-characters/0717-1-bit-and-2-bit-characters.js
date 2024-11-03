/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  let i = 0;
  for (i = 0; i < bits.length - 1; ) {
    if (bits[i] === 1) {
      i += 2;
    } else {
      i += 1;
    }
  }
  if (i === bits.length - 1) {
    return true;
  } else {
    return false;
  }
};
