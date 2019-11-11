function myFunction() {
  let number = 600851475143;
  let factor = number;
  let value = Math.sqrt(number).toFixed(0);
  for (i = 2; i < value; i++) {
    if (number % i == 0) {
      let status = false;
      for (j = 2; j < Math.sqrt(i).toFixed(0); j++) {
        if (i % j == 0) {
          status = true;
        }
      }
      if (!status) {
        factor = i;
      }
    }
  }
  console.log(factor);
}
myFunction();