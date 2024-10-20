function StringNum(num) {
    return num.toString();
}
function convertToString() {
    var my_num = parseInt(document.getElementById('numberInput').value);
    var stringNum = StringNum(my_num);
    document.getElementById('result').textContent = "The number is now a string: " + stringNum + " (Type: " + typeof stringNum + ")";
}
