function hasUniqueChars(str) {
    let strMap = {};

    for (let i = 0; i < str.length; i++) {
        if (strMap[str[i]] && strMap[str[i]] === 1) {
            return false;
        } else {
            strMap[str[i]] = 1;
        }
    }
    return true;
}

/* TESTS */
console.log(hasUniqueChars('abcd'), 'true');
console.log(hasUniqueChars('abccd'), 'false');
console.log(hasUniqueChars('bhjjb'), 'false');
console.log(hasUniqueChars('mdjq'), 'true');

