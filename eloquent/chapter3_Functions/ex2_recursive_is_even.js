
function isEven(num) {
    // handle negative numbers 
    if (num < 0) {
        num = num * -1;
    }

    if (num == 0) {
        return true;
    } else if (num == 1) {
        return false;
    } else {
        return isEven(num - 2);
    }
}

console.log(isEven(75)); 
// --> false
console.log(isEven(-17340)); 
// --> true 