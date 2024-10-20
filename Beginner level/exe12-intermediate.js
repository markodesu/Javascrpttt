function findIntersection() {
    const array1 = document.getElementById('inputArray1').value.split(',').map(Number);
    const array2 = document.getElementById('inputArray2').value.split(',').map(Number);
    const intersection = array1.filter(value => array2.includes(value));
    document.getElementById('result').innerText = intersection.length ? intersection.join(', ') : 'No common elements found';
}
