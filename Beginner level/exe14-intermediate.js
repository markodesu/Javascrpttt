function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    
    return function() {
        const context = this;
        const args = arguments;
        
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

function throttleExample() {
    const throttledFunction = throttle(() => {
        const now = new Date();
        document.getElementById('result').innerText = `Button clicked at ${now.toLocaleTimeString()}`;
    }, 2000); 
    for (let i = 0; i < 10; i++) {
        setTimeout(throttledFunction, i * 300); 
    }
}
