function binaryToString(num) {
    if (num > 1 || num < 0) return 'ERROR';

    let comp = 0.5;
    let binString = '0.';

    while (num > 0) {
        if (binString.length > 32) return 'ERROR';

        if (num >= comp) {
            binString += '1';
            num -= comp;
        } else binString += 0;

        comp /= 2;
    }

    return binString;
}

/* TEST */
console.log(binaryToString(0.625), '0.101');
console.log(binaryToString(0.6255342856783467856932), 'ERROR');
