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

function isValidEmail(email) {
    let re = /^(([^<>()[].,;:\s@"]+(.[^<>()[].,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})).ge$/;
    return re.test(String(email).toLowerCase());
}

const emailErr = document.querySelector(".errorTextEmail")
fomrInput[1].addEventListener("click", () => {
    fomrInput[1].value = ""
})

fomrInput[4].addEventListener("click", (e) => {
    e.preventDefault

    if (fomrInput[0].value === "") {
        emailErr.innerHTML = "Please enter an Email !";
        fomrInput[0].style.border = "1px solid red";
    } else if (!isValidEmail(fomrInput[0])) {
        emailErr.innerHTML = "The email does not end with ge !";
        fomrInput[0].style.border = "1px solid red";
    } else {
        fomrInput[0].style.border = "1px solid green"
        emailErr.innerHTML = "";
    }
    const errorTextCountry = document.querySelector(".errorTextCountry");
    if (fomrInput[1].value === "") {
        errorTextCountry.innerHTML = "Please enter an Country !";
        fomrInput[1].style.border = "1px solid red";
    } else {
        fomrInput[1].style.border = "1px solid green"
        errorTextCountry.innerHTML = "";
    }
    const errorTextCity = document.querySelector(".errorTextCity");
    if (fomrInput[2].value === "") {
        errorTextCity.innerHTML = "Please enter an City !";
        fomrInput[2].style.border = "1px solid red";
    } else {
        fomrInput[2].style.border = "1px solid green"
        errorTextCity.innerHTML = "";
    }
    const errorTextZip = document.querySelector(".errorTextZip");
    if (fomrInput[3].value === "") {
        errorTextZip.innerHTML = "Please enter an Zip Code !";
        fomrInput[3].style.border = "1px solid red";
    } else {
        fomrInput[3].style.border = "1px solid green"
        errorTextZip.innerHTML = "";
    }
})