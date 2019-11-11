function myFunction() {
  let first = 1;
  let second = 2;
  let next = 0;
  let sum = second;
  while (next <= 4000000) {
    if (next % 2 == 0) {
      sum = sum + next;
    }
    next = first + second;
    first = second;
    second = next;
  }
  console.log(sum);
}

myFunction();