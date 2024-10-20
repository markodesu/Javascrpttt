function Time() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
    };
    const formattedDateTime = now.toLocaleString('ky-KG', options); 
    return formattedDateTime;
}
function showCurrentTime() {
    const currentTime = Time(); 
    document.getElementById('result').textContent = "Current Date and Time: " + currentTime;
}
