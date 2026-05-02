function toggleHighContrast() {
    var hcStyleSheet = document.getElementById("hc-style");
    var button = document.getElementById("hc-toggle");
    
    if (hcStyleSheet.disabled === false) {
        hcStyleSheet.disabled = true;
        button.innerText = "Nagy kontrasztú mód be";
        localStorage.setItem('highContrast', 'off');
    } else {
        hcStyleSheet.disabled = false;
        button.innerText = "Normál nézet";
        localStorage.setItem('highContrast', 'on');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("hc-toggle");
    
    button.addEventListener('click', toggleHighContrast);
    
    if (localStorage.getItem('highContrast') === 'on') {
        document.getElementById("hc-style").disabled = false;
        button.innerText = "Normál nézet";
    }
});