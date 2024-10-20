function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateRandomNumber() {
    var randomNum = RandomNumber(1, 100); 
    document.getElementById('result').textContent = "Random number: " + randomNum;
}
