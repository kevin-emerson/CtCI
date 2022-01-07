function isRotation(str1, str2) {
    if (str1.length !== str2.length) return false;
    else {
        if ((str1 + str1).includes(str2)) return true;
        return false;
    }
}

// Test
console.log(isRotation('waterbottle', 'erbottlewat'), true);
console.log(isRotation('waterbottle', 'erbotlewatt'), false);
console.log(isRotation('aaata', 'aataa'), true);
console.log(isRotation('water', 'watt'), false);
