function calculator(a, b, oper) {
    switch (oper) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return "Invalid operator";
    }
}

function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
    var result = calculator(num1, num2, operator);
    document.getElementById('result').textContent = "The result is: " + result;
}
