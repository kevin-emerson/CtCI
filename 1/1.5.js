function isOneAway(str1, str2) {
    const str1Length = str1.length;
    const str2Length = str2.length;

    if (Math.abs(str1Length - str2Length) > 1) return false;

    if (str1Length === str2Length) {
        if (str1 === str2) return true;
        else {
            let numDiff = 0;
            for (let i = 0; i < str1Length; i++) {
                if (str1[i] !== str2[i]) numDiff++;
            }
            return numDiff <= 1;

        }
    } else if (str1Length > str2Length) {
        for (let i = 0; i < str1Length; i++) {
            let str1Alt = str1.replace(str1[i], '');
            if (str1Alt === str2) return true;
        }
        return false;
    } else {
        for (let j = 0; j < str2Length; j++) {
            let str2Alt = str2.replace(str2[j], '');
            if (str2Alt === str1) return true;
        }
        return false;
    }
}

// Test
console.log(isOneAway('boles', 'bol'), false);
console.log(isOneAway('pale', 'ple'), true);
console.log(isOneAway('pale', 'pales'), true);
console.log(isOneAway('pale', 'bale'), true);
console.log(isOneAway('pale', 'bake'), false);
