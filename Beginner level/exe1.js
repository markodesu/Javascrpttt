function AddTwoNums(a, b) {
    var c = a + b;
    return c;
}

function getValuesAndAdd() {
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    var result = AddTwoNums(num1, num2);
    document.getElementById('result').textContent = "Sum: " + result;
}
