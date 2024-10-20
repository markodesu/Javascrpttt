function findPrimes() {
    const limit = parseInt(document.getElementById('limitInput').value);
    const primes = [];

    for (let num = 2; num <= limit; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }

    document.getElementById('result').innerText = 'Prime Numbers: ' + primes.join(', ');
}
