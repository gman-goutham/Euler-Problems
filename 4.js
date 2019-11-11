function isPalindrome(number) {
    let reverse = 0;
    let temp = number;
    while(temp !== 0) {
        reverse = reverse * 10 + (temp % 10);
        temp = parseInt(temp/10);
    }
    let status = number === reverse ? true : false;
    return status;
}
function myFunction() {
    let limit = 998001;
    for(i = limit; i > 9999; i--) {
        let palindromeStatus = isPalindrome(i);
        if(palindromeStatus) {
            for(j = 100; j < Math.sqrt(i); j++) {
                if((i % j == 0) && (parseInt(i/j) > 100) && (parseInt(i/j) < 1000)) {
                    console.log(i);
                    return;
                }
            }
        }
    }
}
myFunction();