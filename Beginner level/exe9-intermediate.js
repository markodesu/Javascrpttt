function checkSubstring() {
    const mainString = document.getElementById('mainString').value;
    const subString = document.getElementById('subString').value;

    if (!mainString || !subString) {
        document.getElementById('result').innerText = 'Please enter both strings.';
        return;
    }

    const isSubstring = mainString.includes(subString); 

    if (isSubstring) {
        document.getElementById('result').innerText = `"${subString}" is a substring of "${mainString}".`;
    } else {
        document.getElementById('result').innerText = `"${subString}" is not a substring of "${mainString}".`;
    }
}
