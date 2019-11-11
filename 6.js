function myFunction() {
    let limit = 100;
    let linearSum = 0;
    let squareSum = 0;
    let difference = 0;
    
    for (let i = 1; i <= limit; i++) {
        linearSum = linearSum + i;
        squareSum = squareSum + (i*i);
    }
    
    linearSum = linearSum * linearSum;
    difference = linearSum - squareSum;


    console.log(difference);
}
myFunction();