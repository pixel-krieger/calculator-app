// Logic for theme switcher

let radios = document.querySelectorAll('input[name="theme"]');

radios.forEach(radio => radio.addEventListener("change", () => {
    let themeStylesheet = document.getElementById("theme-stylesheet");
    themeStylesheet.href = "styles/css/themes/" + radio.value + ".css";
}));


// Logic for screen and buttons

let buttons = document.querySelectorAll('.buttons__button');
let screenLabel = document.getElementById("screen__text");

buttons.forEach(button => {

    // if the button contains a number (1-9) or an operation symbol (/,x,-,+)
    if (/^[\d\.\/x\-\+]$/.test(button.textContent)) {
        button.addEventListener("click", () => {
            if (screenLabel.textContent == "0") {
                screenLabel.textContent = button.textContent;
            } else {
                screenLabel.textContent += button.textContent;
            }

        });

    } else if (button.textContent == "DEL") {
        button.addEventListener("click", () => {
            if (screenLabel.textContent.length > 1) {
                screenLabel.textContent = screenLabel.textContent.substring(0, screenLabel.textContent.length - 1);
            } else {
                screenLabel.textContent = "0";
            }
        });

    } else if (button.textContent == "RESET") {
        button.addEventListener("click", () => {
            screenLabel.textContent = "0";
        });

    } else if (button.textContent == "=") {
        button.addEventListener("click", () => {
            // validates syntax of the ecuation
            if (/^\d+([\/x\+\-]\d+)+$/.test(screenLabel.textContent) || /^\d+$/.test(screenLabel.textContent)) {
                screenLabel.textContent = eval(screenLabel.textContent);
            } else {
                screenLabel.textContent = "Error";
            }
        });
    }
});