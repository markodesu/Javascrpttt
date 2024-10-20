function manipulateObject() {
    const obj = {
        name: 'John',
        age: 30,
        city: 'New York'
    };
    
    obj.country = 'USA';
    obj.age = 31;        
    delete obj.city;   

    const result = JSON.stringify(obj);
    document.getElementById('result').innerText = 'Updated Object: ' + result;
}
