function fib(times, array = [0, 1]) {
  // base case, final array that is returned up the stack
  if (times < 3) {
    return array;
  } else {
    const secondToLastIndex = array[array.length - 2];
    const lastIndex = array[array.length - 1];
    const sum = secondToLastIndex + lastIndex;

    times = times - 1;

    array.push(sum);

    return fib(times, array);
  }
}

// TESTS
console.log(fib(6)); // [0, 1, 1, 2, 3, 5]
console.log(fib(15)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
console.log(fib(20)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
