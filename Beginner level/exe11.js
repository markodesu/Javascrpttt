function allSum(arr) {
    let c = 0;
    for (let i = 0; i < arr.length; i++) {
        c = c + arr[i];
    }
    return c;
}

function calculateArraySum() {
    var inputArray = document.getElementById('inputArray').value.split(',').map(Number);
    var result = allSum(inputArray);
    document.getElementById('result').textContent = "The sum of the array is: " + result;
}
