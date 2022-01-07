function flipBitToWin(num) {
    let binaryString = num.toString(2);
    if (!binaryString.includes('0')) return binaryString.length;

    let onesArray = binaryString.split('0');
    let longest = 0;

    for (let i = 0; i < onesArray.length - 1; i++) {
        if (onesArray[i].length + onesArray[i + 1].length > longest) {
            longest = onesArray[i].length + onesArray[i + 1].length + 1;
        }
    }

    return longest;
}

/* TEST */
console.log(flipBitToWin(1775), 8);
console.log(flipBitToWin(15), 4);
