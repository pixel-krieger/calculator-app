let radios = document.querySelectorAll('input[name="theme"]');

radios.forEach(radio => radio.addEventListener("change", ()=>{
    themeStylesheet = document.getElementById("theme-stylesheet");
    themeStylesheet.href = "styles/css/themes/"+radio.value+".css";
}));
