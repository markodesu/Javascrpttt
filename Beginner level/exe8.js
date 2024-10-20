function factorial(a) {
    let c = 1;
    for (let i = 1; i <= a; i++) {
        c = c * i;
    }
    return c;
}
function calculateFactorial() {
    var number = parseInt(document.getElementById('inputNumber').value);
    var result = factorial(number);
    document.getElementById('result').textContent = "Factorial of " + number + " is " + result + ".";
}
