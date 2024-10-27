/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
  let typeCandyCount = 0; // đếm sô loại kẹo
  let hasCandy = {}; // theo dõi loại kẹo
  let maxCandyToEat = candyType.length / 2; // số loại kẹo có thể ăn

  for (let candy of candyType) {
    if (!hasCandy[candy]) {
      hasCandy[candy] = true;
      typeCandyCount++;
    }
  }
  if (typeCandyCount < maxCandyToEat) {
    return typeCandyCount;
  } else {
    return maxCandyToEat;
  }
};
