window.onload = () => {
    const input = document.getElementById("spotifycode");
    const button = document.getElementById("copybtn");
    const notification = document.getElementById("notification");
    
    function updateInputValue() {
        input.value = "/code " + window.location;
    }
    
    updateInputValue();
    
    function showNotification() {
        notification.classList.add("show");
        setTimeout(() => {
            notification.classList.remove("show");
        }, 3000);
    }
    
    button.onclick = () => {
        input.select();
        document.execCommand("copy");
        showNotification();
    }
    
    input.onchange = (e) => {
        updateInputValue();
    }
};