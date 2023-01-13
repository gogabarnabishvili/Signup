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

const emailErr = document.querySelector(".errorTextEmail")
fomrInput[1].addEventListener("click", () => {
    fomrInput[1].value = ""
})
console.log(emailErr)
fomrInput[4].addEventListener("click", () => {
        if (fomrInput[0] === "") {
            emailErr.innerHTML = "please chack email !";
        }
    })
    // const form = document.querySelectorAll("form");
    // console.log(fomrInput[4])
    // fomrInput[4].addEventListener("keyup", () => {
    //     if (fomrInput[0] === "")
    // })