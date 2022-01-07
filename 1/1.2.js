function isPermutation(str1, str2) {
    if (str1.length !== str2.length) return false;
    else {
        let str1Copy = str1;
        let str2Copy = str2;

        for (let i = 0; i < str1.length; i++) {
            str2Copy = str2Copy.replace(str1[i], '');
            str1Copy = str1Copy.replace(str1[i], '');
        }

        if (str2Copy.length > 0) return false;
    }

    return true;
}

// Tests
console.log(isPermutation('abacb', 'cbaab'), true);
console.log(isPermutation('aba', 'aaba'), false);
console.log(isPermutation('aba', 'ada'), false);
