function fib(times) {
  // base case
  if (times === 0) {
    return;
  }

  let array = [];

  if (times > 0) {
    times = times - 1;

    return;
  }
}

// TESTS
console.log(fib(6)); // [0, 1, 1, 2, 3, 5]
console.log(fib(15)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
console.log(fib(20)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
