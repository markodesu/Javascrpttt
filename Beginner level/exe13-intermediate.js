function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}

function deepCloneExample() {
    const original = {
        name: 'John',
        age: 30,
        hobbies: ['reading', 'gaming'],
        address: {
            city: 'New York',
            zip: '10001'
        }
    };

    const cloned = deepClone(original);
    document.getElementById('result').innerText = 
        `Original: ${JSON.stringify(original)}\nCloned: ${JSON.stringify(cloned)}`;
}
