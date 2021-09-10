const linkDark = document.querySelector("#button-dark")
const linkBody = document.querySelector("body")
const linkLogin = document.querySelector("#button-login")
const linkPopup = document.querySelector("#popuptoggle")
const cancelbtn = document.querySelector(".cancel-btn")
const bcontainer = document.querySelector(".b-container")
const blackContainer = document.querySelector("#blackcontainer")

linkDark.addEventListener("click", function () {
    linkBody.classList.toggle("dark");
})

linkLogin.addEventListener("click", function() {
    blackContainer.classList.remove("b-popup");
    blackContainer.classList.add("b-container");
    linkPopup.classList.remove("b-popup");
    linkPopup.classList.add("b-popup-show");
})

cancelbtn.addEventListener("click", function() {
    linkPopup.classList.remove("b-popup-show");
    linkPopup.classList.add("b-popup");
    blackContainer.classList.add("b-popup");
    blackContainer.classList.remove("b-container");
})

blackContainer.addEventListener("click", function() {
    linkPopup.classList.remove("b-popup-show");
    linkPopup.classList.add("b-popup");
    blackContainer.classList.add("b-popup");
    blackContainer.classList.remove("b-container");
})

