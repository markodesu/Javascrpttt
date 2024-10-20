function palindrome(str) {
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const midIndex = Math.floor(cleanedStr.length / 2);
    const firstHalf = cleanedStr.slice(0, midIndex);
    let secondHalf;

    if (cleanedStr.length % 2 === 0) {
        secondHalf = cleanedStr.slice(midIndex);
    } else {
        secondHalf = cleanedStr.slice(midIndex + 1);
    }
    const reversedSecondHalf = secondHalf.split('').reverse().join('');
    return firstHalf === reversedSecondHalf;
}
function checkPalindrome() {
    var inputString = document.getElementById('inputString').value;
    var isPalindrome = palindrome(inputString);
    if (isPalindrome) {
        document.getElementById('result').textContent = "The string \"" + inputString + "\" is a palindrome.";
    } else {
        document.getElementById('result').textContent = "The string \"" + inputString + "\" is not a palindrome.";
    }
}
