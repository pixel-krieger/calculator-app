// Logic for theme switcher

let radios = document.querySelectorAll('input[name="theme"]');

radios.forEach(radio => radio.addEventListener("change", () => {
    let themeStylesheet = document.getElementById("theme-stylesheet");
    themeStylesheet.href = "styles/css/themes/" + radio.value + ".css";
}));


// Logic for screen and buttons

let buttons = document.querySelector('.buttons');
let screenLabel = document.getElementById("screen__text");

buttons.addEventListener('click', e => {
    
    if (e.target.nodeName === 'BUTTON') {
        // if the button contains a number (1-9) or an operation symbol (/,x,-,+)
        if (/^[\d\.\/x\-\+]$/.test(e.target.textContent)) {
            if (screenLabel.textContent == "0" || screenLabel.textContent == "Error") {
                screenLabel.textContent = e.target.textContent;
            } else {
                screenLabel.textContent += e.target.textContent;
            }


        } else if (e.target.textContent == "DEL") {
            if (screenLabel.textContent.length > 1 && screenLabel.textContent !== "Error") {
                screenLabel.textContent = screenLabel.textContent.substring(0, screenLabel.textContent.length - 1);
            } else {
                screenLabel.textContent = "0";
            }

        } else if (e.target.textContent == "RESET") {
            screenLabel.textContent = "0";

        } else if (e.target.textContent == "=") {
            // validates syntax of the ecuation
            if (/^-?\d+(\.\d+)?(([-\+\/\*]-?\d+(\.\d+)?)+)?$/.test(screenLabel.textContent.replace(/x/g, "*"))) {
                screenLabel.textContent = eval(screenLabel.textContent.replace(/x/g, "*"));
            } else {
                screenLabel.textContent = "Error";
            }
        }
        
    }

});