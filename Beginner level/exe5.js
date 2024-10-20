function largest(arr) {
    if (arr.length == 0) {
        return null;
    } else {
        return Math.max(...arr);
    }
}
function findLargest() {
    var input = document.getElementById('inputNumbers').value;
    var numberArray = input.split(',').map(Number); 
    var largestNumber = largest(numberArray);
    if (largestNumber !== null) {
        document.getElementById('result').textContent = "The largest item in the list is " + largestNumber + ".";
    } else {
        document.getElementById('result').textContent = "The list is empty.";
    }
}
