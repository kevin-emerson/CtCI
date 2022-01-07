function pairwiseSwap(number) {
    return (((number & 0xAA) >> 1) | ((number & 0x55) << 1))
}

/* TEST */
console.log((4).toString(2).padStart(4, '0'));
console.log(pairwiseSwap(4).toString(2));
console.log((6).toString(2).padStart(4, '0'));
console.log(pairwiseSwap(6).toString(2));
