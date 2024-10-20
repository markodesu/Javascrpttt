function countVowels(str) {
  const vowels = 'aeiouAEIOU'; 
  let c = 0;
  for (let char of str) {
      if (vowels.includes(char)) {
          c++; 
      }
  }
  
  return c;
}
function countVowelsInString() {
  var inputString = document.getElementById('inputString').value;
  var vowelCount = countVowels(inputString);
  document.getElementById('result').textContent = "There are exactly " + vowelCount + " vowels in your string.";
}
