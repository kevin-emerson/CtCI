let numBoys = 0;
let numGirls = 0;

function findRatio(n) {
    for (let i = 0; i < n; i++) {
        generateFamily()
    }
    return numGirls / (numBoys + numGirls)
}

function generateFamily() {
    let boys = 0;
    let girls = 0;

    while (girls === 0) {
        if (Math.floor(Math.random() * 2) === 1) {
            girls = 1;
        } else {
            boys += 1;
        }
    }

    numBoys += boys;
    numGirls += girls;
}

console.log(findRatio(100));
console.log(findRatio(1000));
console.log(findRatio(10000));
console.log(findRatio(100000));


