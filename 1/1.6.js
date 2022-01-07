function stringCompression(str) {
    let compressedStr = '';
    let currCount = 1;

    for (let i=0; i < str.length - 1; i++) {
        if (str[i] === str[i+1]) {
            currCount++;
        } else {
            compressedStr += str[i] + currCount;
            currCount = 1;
        }
    }

    compressedStr += str[str.length - 1] + currCount;

    return (str.length >= compressedStr.length ? compressedStr : str);
}

// Test
console.log('aaaaaa', stringCompression('aaaaaa'), 'a6');
console.log('aabcccccaaa', stringCompression('aabcccccaaa'), 'a2b1c5a3');
console.log('acc', stringCompression('acc'), 'a1c2');
