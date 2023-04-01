
let closePopUp = document.querySelector(".span-for-closing-popUp")
let submitPopUp = document.querySelector(".submit-input")
let overlay = document.querySelector(".popUp-overlay")

let welcomeUser = document.querySelector(".text-for-welcome")
let nameForSimulator = document.querySelector(".get-name-from-popUp")



function fGetUserName() {
    let userName = document.querySelector(".text-input").value
    if (userName.length >= 1) {
        localStorage.setItem("userName", userName)
        overlay.style.display = "none";
        welcomeUser.textContent = "Welcome " + userName
        nameForSimulator.textContent += userName + "."
    }
    else {
        enterName.textContent = "Please, enter something."
    }
}

function fClosingPopUp() {
    overlay.classList.add("overlay-display-none")
}


function fSubmitPopUp() { 
    overlay.classList.add("overlay-display-none")
}
    


closePopUp.addEventListener("click", fClosingPopUp)
submitPopUp.addEventListener("click", fGetUserName)




