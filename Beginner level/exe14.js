function duplicates(arr) {
    return [...new Set(arr)];
}
function removeDuplicates() {
    var inputArray = document.getElementById('inputArray').value.split(',').map(Number);
    var resultArray = duplicates(inputArray);
    document.getElementById('result').textContent = "Array without duplicates: " + resultArray.join(', ');
}
