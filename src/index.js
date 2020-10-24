module.exports = function toReadable(number) {
    let a = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let b = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let numString = number.toString();

    if (number < 0) throw new Error("Negative numbers are not supported.");

    if (number === 0) return "zero";

    //the case of 1 - 20
    if (number < 20) {
        return a[number];
    }

    if (numString.length === 2) {
        // return b[numString[0]] + " " + a[numString[1]];
        if (a[numString[1]] == "") {
            return b[numString[0]];
        } else {
            return b[numString[0]] + " " + a[numString[1]];
        }
    }

    //100 and more
    if (numString.length == 3) {
        if (numString[1] === "0" && numString[2] === "0")
            return a[numString[0]] + " hundred";
        else
            return (
                a[numString[0]] +
                " hundred " +
                toReadable(+(numString[1] + numString[2]))
            );
    }

    if (numString.length === 4) {
        var end = +(numString[1] + numString[2] + numString[3]);
        if (end === 0) return a[numString[0]] + " thousand";
        if (end < 100) return a[numString[0]] + " thousand " + toReadable(end);
        return a[numString[0]] + " thousand " + toReadable(end);
    }
};
