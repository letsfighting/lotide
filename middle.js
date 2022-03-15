
// ACTUAL FUNCTION
const middle = function (array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    //function to return middle 2 elements in even case
    return oneMiddle(array);
  } else {
    //function to return middle element in odd case
    return middleTwo(array);
  }
};

const middleTwo = function (array) {
  //establishing the two middle digits' positions in a 0 based index
  let secondIndex = array.length / 2;
  let firstIndex = secondIndex - 1;

  console.log(firstIndex);
  console.log(secondIndex);

  //returns an array containing the two middle digits.
  return [array[firstIndex], array[secondIndex]];
};

const oneMiddle = function (array) {
  //establishing the middle digit's position in a 0 based index
  let loneIndex = Math.floor(array.length / 2);

  console.log(loneIndex);

  //returns an array containing the middle digit.
  return [array[loneIndex]];
};


module.exports = middle;

