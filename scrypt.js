const section = document.querySelector(".sectionForm");
const fomrDiv = document.querySelector(".regForm")
const fomrInput = document.querySelectorAll("input");
const title = document.querySelector("#title");
const darkModeBtn = document.querySelector(".darkModeBtn");


function darkMode() {
    darkModeBtn.classList.toggle("darkBtn")
    if (darkModeBtn.textContent === "Dark Mode") {
        darkModeBtn.innerHTML = "light mode";
    } else {
        darkModeBtn.innerHTML = "Dark Mode";
    }
    title.classList.toggle("darkColor");
    section.classList.toggle("darkMode");
    fomrDiv.classList.toggle("darkModeForm");
    for (let i = 0; i < fomrInput.length; i++) {
        fomrInput[i].classList.toggle("darkInput")
    }
}