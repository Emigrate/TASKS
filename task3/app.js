const linkDark = document.querySelector(".button-dark")
const linkBody = document.querySelector("body")
const linkLogin = document.querySelector(".button-login")
const linkPopup = document.querySelector("#popuptoggle")
const cancelbtn = document.querySelector(".cancelbtn")
const bcontainer = document.querySelector(".b-container")

linkDark.addEventListener("click", function () {
    linkBody.classList.toggle("dark");
})

linkLogin.addEventListener("click", function() {
    linkPopup.classList.remove("b-popup");
    linkPopup.classList.add("b-popup-show");
})

cancelbtn.addEventListener("click", function(){
    linkPopup.classList.remove("b-popup.show");
    linkPopup.classList.add("b-popup");
})

bcontainer.addEventListener("click", function(){
    linkPopup.classList.remove("b-popup.show");
    linkPopup.classList.add("b-popup");
})
