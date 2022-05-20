// Logic for theme switcher

const radios = document.querySelectorAll('input[name="theme"]');

radios.forEach(radio => radio.addEventListener("change", () => {
    let themeStylesheet = document.getElementById("theme-stylesheet");
    themeStylesheet.href = "styles/css/themes/" + radio.value + ".css";
}));


// Logic for screen and buttons

const buttons = document.querySelector('.buttons');
const screenLabel = document.getElementById("screen__text");

const regexNDS = /^[\d\.\/x\-\+]$/; //regex for number, dot (.) or symbol (/,x,-,+)
const regexEquation = /^-?\d+(\.\d+)?(([-\+\/\*]-?\d+(\.\d+)?)+)?$/;

buttons.addEventListener('click', e => {
    
    if (e.target.nodeName === 'BUTTON') {
        // if the button contains a number (1-9) or an operation symbol (/,x,-,+)
        if (regexNDS.test(e.target.textContent)) {
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
            if (regexEquation.test(screenLabel.textContent.replace(/x/g, "*"))) {
                screenLabel.textContent = eval(screenLabel.textContent.replace(/x/g, "*"));
            } else {
                screenLabel.textContent = "Error";
            }
        }
        
    }

});