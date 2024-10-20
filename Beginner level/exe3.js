function evenOdd(a) {
    if (a % 2 === 0) {
        return "Even";
    } else if (a === 0) {
        return "Neutral";
    } else {
        return "Odd";
    }
}
function checkEvenOdd() {
    var number = parseInt(document.getElementById('inputNumber').value);
    var result = evenOdd(number);
    document.getElementById('result').textContent = "The number " + number + " is " + result + ".";
}
