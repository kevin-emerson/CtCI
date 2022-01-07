function countOnes(binNumber) {
    return binNumber.split('').reduce((count, char) => {
        return char === '1' ? count + 1 : count;
    }, 0);
}

function getNextNumbers(number) {
    let binNum = number.toString(2);
    let numOnes = countOnes(binNum);

    let nextSmallest = number - 1;
    while (countOnes(nextSmallest.toString(2)) !== numOnes) {
        nextSmallest -= 1;
    }

    let nextLargest = number + 1;
    while (countOnes(nextLargest.toString(2)) !== numOnes) {
        nextLargest += 1;
    }

    console.log('number', number);
    console.log('number', number.toString(2));
    console.log('nextSmallest', nextSmallest);
    console.log('nextSmallest', nextSmallest.toString(2));
    console.log('nextLargest', nextLargest);
    console.log('nextLargest', nextLargest.toString(2));
}

getNextNumbers(243);
getNextNumbers(1);
getNextNumbers(1000);
