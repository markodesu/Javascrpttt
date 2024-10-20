function fizzBuzz(a) {
    let output = ""; 
    for (let i = 1; i <= a; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            output += "FizzBuzz<br>"; 
        } else if (i % 3 == 0) {
            output += "Fizz<br>"; 
        } else if (i % 5 == 0) {
            output += "Buzz<br>"; 
        } else {
            output += i + "<br>"; 
        }
    }
    return output;
}
function run() {
    var number = parseInt(document.getElementById('inputNumber').value);
    var result = fizzBuzz(number);
    document.getElementById('result').innerHTML = result;
}
