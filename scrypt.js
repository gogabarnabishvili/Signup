const section = document.querySelector(".sectionForm");
const fomrDiv = document.querySelector(".regForm")
const fomrInput = document.querySelectorAll("input");
console.log(fomrInput)

function darkMode() {
    section.classList.toggle("darkMode");
    fomrDiv.classList.toggle("darkModeForm");
    fomrInput.style.backgroundColor = "#33393F"
        // fomrInput.classList.toggle("darkInput");

}