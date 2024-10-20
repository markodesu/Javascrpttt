function reversal(str) {
    return str.split('').reverse().join('');
}
function reverseString() {
    var orig = document.getElementById('inputString').value;
    var reversed = reversal(orig);
    document.getElementById('result').textContent = "Reversed String: " + reversed;
}
