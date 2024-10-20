function fahr(c) {
    return c * (9 / 5) + 32;
}
function convertToFahrenheit() {
    var tempCelsius = parseFloat(document.getElementById('inputTemp').value);
    var tempFahrenheit = fahr(tempCelsius);
    document.getElementById('result').textContent = "The temperature in Fahrenheit is " + tempFahrenheit + "°F.";
}
