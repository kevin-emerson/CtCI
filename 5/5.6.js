function conversion(number1, number2) {
    let num1XORnum2 = number1 ^ number2
    let stringNum = num1XORnum2.toString(2);
    return stringNum.split('1').length - 1;
}

console.log(conversion(29, 15), 2);
