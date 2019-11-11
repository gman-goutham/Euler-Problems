function myFunction() {
  let limit = 1000;
  let sum = 0;
  for (i = 0; i < limit; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum = sum + i;
    }
  }
  console.log(sum);
}
myFunction();