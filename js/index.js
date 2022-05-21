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

var isDisplayingResult = false;

buttons.addEventListener('click', e => {
    
    if (e.target.nodeName === 'BUTTON') {
        // if the button contains a number or an operation symbol (/,x,-,+)
        if (regexNDS.test(e.target.textContent)) {
            if ((!isNaN(e.target.textContent) && isDisplayingResult) || parseInt(getScreenText()) == "0") {
                replaceScreenText(e.target.textContent);
            } else {
                concatToScreenText(e.target.textContent);
            }
            isDisplayingResult = false;

        } else if (e.target.textContent == "DEL") {
            if (getScreenText().length > 1 && getScreenText() !== "Error") {
                let textWithoutLastChar = getScreenText().substring(0, getScreenText().length - 1);
                replaceScreenText(textWithoutLastChar);
            } else {
                replaceScreenText("0");
            }

        } else if (e.target.textContent == "RESET") {
            replaceScreenText("0");

        } else if (e.target.textContent == "=") {
            let formattedEquation = getScreenText().replace(/x/g, "*");

            // validates syntax of the ecuation
            if (regexEquation.test(formattedEquation)) {
                replaceScreenText(eval(formattedEquation));
            } else {
                replaceScreenText("Error");
            }
            isDisplayingResult = true;
        }
        
    }

});

function getScreenText() {
    return screenLabel.textContent;
}

function replaceScreenText(text) {
    screenLabel.textContent = text;
}

function concatToScreenText(text) {
    screenLabel.textContent += text;
}