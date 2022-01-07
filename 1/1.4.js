function isPalindromePermutation(str) {
    let charMap = {};
    let numOddChars = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            charMap[str[i].toUpperCase()] = (parseInt(charMap[str[i].toUpperCase()]) || 0) + 1;
        }
    }

    Object.entries(charMap).forEach(([key, value]) => {
        if (value % 2 !== 0) numOddChars++;
    });

    if (numOddChars > 1) return false;
    return true;
}

// TESTS
console.log(isPalindromePermutation('Tact Coa'), 'true');
console.log(isPalindromePermutation('Tact boa'), 'false');
console.log(isPalindromePermutation('kkaay'), 'true');
console.log(isPalindromePermutation('la mb la m'), 'true');
console.log(isPalindromePermutation('aaabccdd'), 'false');
