function getUniqueValues() {
    const input = document.getElementById('inputArray').value;
    const array = input.split(',').map(Number); 
    
    if (array.some(isNaN)) {
        document.getElementById('result').innerText = 'Invalid input. Please enter numbers separated by commas.';
        return;
    }

    const uniqueArray = [...new Set(array)]; 
    document.getElementById('result').innerText = `Unique values: [${uniqueArray}]`;
}
