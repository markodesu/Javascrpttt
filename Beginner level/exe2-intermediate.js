function validateEmail() {
    const email = document.getElementById('emailInput').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);
    document.getElementById('result').innerText = isValid ? 'Valid Email Address' : 'Invalid Email Address';
}
