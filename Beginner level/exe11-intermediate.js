function capitalizeWords() {
    const sentence = document.getElementById('inputSentence').value;
    const words = sentence.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    document.getElementById('result').innerText = capitalizedWords.join(' ');
}
