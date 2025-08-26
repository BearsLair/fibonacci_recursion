function mergeSort(array) {
  // base case
  if (array.length == 1) {
    return array;
  } else {
    const sortedLeftArray = mergeSort(
      array.slice(0, Math.floor(array.length / 2))
    );
    const sortedRightArray = mergeSort(
      array.slice(Math.floor(array.length / 2), array.length)
    );
  }
}

// Tests
console.log(mergeSort([15, 9, 3, 7, 1, 5]));
// console.log(mergeSort([31, 2, 5, 19, 22, 3, 11, 7]));
// console.log(mergeSort([11, 15, 6, 7, 1, 14, 23]));
// console.log(mergeSort([32, 25, 17, 19, 55, 17, 26, 4, 1, 15]));
