const insertion = (N, M, i, j) => {
    let allOnes = ~0
    let left = j < 31 ? (allOnes << (j + 1)) : 0
    let right = ((1 << i) - 1);
    let mask = left | right;

    let clearN = N & mask;
    let shiftM = M << i;

    return clearN | shiftM;
};

/* TEST */
const N = parseInt(10000000000, 2);
const M = parseInt(10011, 2);
console.log(insertion(N, M, 2, 6).toString(2), 10001001100);
