function flattenArray() {
    const input = document.getElementById('inputArray').value;
    let nestedArray;

    try {
        nestedArray = JSON.parse(input); // Parse the input as an array
    } catch (error) {
        document.getElementById('result').innerText = 'Invalid array format.';
        return;
    }

    const flattenedArray = flatten(nestedArray);
    document.getElementById('result').innerText = `Flattened array: [${flattenedArray}]`;
}

function flatten(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}
