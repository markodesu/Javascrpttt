function checkAnagram() {
    const str1 = document.getElementById('string1').value.replace(/\s+/g, '').toLowerCase();
    const str2 = document.getElementById('string2').value.replace(/\s+/g, '').toLowerCase();

    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    const resultText = (sortedStr1 === sortedStr2) ? 'The strings are anagrams.' : 'The strings are not anagrams.';
    document.getElementById('result').innerText = resultText;
}
