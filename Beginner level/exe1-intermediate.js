function sortArray() {
    const input = document.getElementById('numberInput').value;
    const numbers = input.split(',').map(Number);
    const sortedNumbers = numbers.sort((a, b) => a - b);
    document.getElementById('result').innerText = 'Sorted Numbers: ' + sortedNumbers.join(', ');
}
