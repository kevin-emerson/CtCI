// Not using length:
function urlify(str) {
    return str.trim().split(/ /g).join('%20');
}

// Using “true” length:
function urlify(str, trueLength) {
    let newString = "";
    let totalSpaces = str.length - trueLength;
    let frontSpaces = 0;

    let leadingWhiteSpaceFlag = false;

    for (let i = 0; i < str.length; i++) {
        if (leadingWhiteSpaceFlag === false) {
            if (str[i] === " ") frontSpaces++;
            else leadingWhiteSpaceFlag = true;
        }
        if (leadingWhiteSpaceFlag === true && i < str.length - (totalSpaces - frontSpaces)) {
            if (str[i] === " ") newString += "%20";
            else newString += str[i];
        }
    }

    return newString;
}

console.log(urlify("Sai Charan P", "Sai%20Charan%20P"));
console.log(urlify("Mr John Smith   "), "Mr%20John%20Smith");
console.log(urlify("    Mrs  Kelly "), "Mrs%20Kelly");
