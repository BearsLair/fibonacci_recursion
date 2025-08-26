function mergeSort(array) {
  // base case if statements
  if (array.length == 1) {
    return array;
  } else if (array.length == 2) {
    if (array[0] > array[1]) {
      return [array[1], array[0]];
    }
    return array;
  }

  const leftArray = array.slice(0, Math.floor(array.length / 2));
  const rightArray = array.slice(Math.floor(array.length / 2), array.length);

  const sortedLeftArray = mergeSort(leftArray);
  const sortedRightArray = mergeSort(rightArray);

  // The following code is excellent for sorting two huge arrays (worth remembering)
  let fullySortedArray = [];
  let i = 0;
  let j = 0;

  while (i < sortedLeftArray.length && j < sortedRightArray.length) {
    if (sortedLeftArray[i] < sortedRightArray[j]) {
      fullySortedArray.push(sortedLeftArray[i]);
      i++;
    } else {
      fullySortedArray.push(sortedRightArray[j]);
      j++;
    }
  }

  // Next two while loops add any leftovers in either array.
  while (i < sortedLeftArray.length) {
    fullySortedArray.push(sortedLeftArray[i]);
    i++;
  }

  while (j < sortedRightArray.length) {
    fullySortedArray.push(sortedRightArray[j]);
    j++;
  }

  return fullySortedArray;
}

// Tests
console.log(mergeSort([15, 9, 3, 7, 1, 5]));
console.log(mergeSort([31, 2, 5, 19, 22, 3, 11, 7]));
console.log(mergeSort([11, 15, 6, 7, 1, 14, 23]));
console.log(mergeSort([32, 25, 17, 19, 55, 17, 26, 4, 1, 15]));
