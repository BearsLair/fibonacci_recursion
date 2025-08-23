function fib(times, array = [0, 1]) {
  console.log("processing...");
  console.log("beginning array: ", array);
  // base case
  if (times < 3) {
    console.log("final array to return: ", array);
    return array;
  } else {
    const secondToLastIndex = array[array.length - 2];
    const lastIndex = array[array.length - 1];
    const sum = secondToLastIndex + lastIndex;

    console.log(
      "secondToLastIndex: ",
      secondToLastIndex,
      ", lastIndex: ",
      lastIndex,
      ", sum: ",
      sum
    );

    times = times - 1;

    array.push(sum);

    return array.push(fib(times, array));
  }
}

// TESTS
console.log(fib(6)); // [0, 1, 1, 2, 3, 5]
// console.log(fib(15)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
// console.log(fib(20)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
