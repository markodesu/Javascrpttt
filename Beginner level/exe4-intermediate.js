function countWords() {
    const input = document.getElementById('textInput').value;
    const words = input.split(/\s+/);
    const wordCount = {};
    
    words.forEach(word => {
        word = word.toLowerCase();
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    const result = Object.entries(wordCount)
        .map(([word, count]) => `${word}: ${count}`)
        .join(', ');

    document.getElementById('result').innerText = 'Word Count: ' + result;
}
