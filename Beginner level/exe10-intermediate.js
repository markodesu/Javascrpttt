function generateFibonacci() {
    const n = parseInt(document.getElementById('inputNumber').value);
    let fibSequence = [];
    if (n <= 0) {
        document.getElementById('result').innerText = "Please enter a positive number.";
        return;
    }

    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            fibSequence.push(1);
        } else {
            fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
        }
    }

    document.getElementById('result').innerText = fibSequence.join(', ');
}
