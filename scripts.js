/*    modal-login    */

var login = document.querySelector(".login");
var modalLogin = document.querySelector(".modal-login");
var modalClose = document.querySelector(".modal-close");
var inputLogin = modalLogin.querySelector("[name=login]");
var inputPassword = modalLogin.querySelector("[name=password]");
var form = modalLogin.querySelector("form");
var storageLogin = localStorage.getItem("login");

login.addEventListener("click", function(event) {
    event.preventDefault();
    modalLogin.classList.add("modal-login-show");
    
    if (storageLogin) {
        inputLogin.value = storageLogin;
        inputPassword.focus();
    } else {
        inputLogin.focus();
    }
});

modalClose.addEventListener("click", function(event) {
    event.preventDefault();
    modalLogin.classList.remove("modal-login-show");
});

form.addEventListener("submit", function(event){
    if (!(inputLogin.value && inputPassword.value)) {
        event.preventDefault();
        modalLogin.classList.add("modal-login-error");
    } else {
        localStorage.setItem("login", inputLogin.value);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
        if (modalLogin.classList.contains("modal-login-show")) {
          modalLogin.classList.remove("modal-login-show");            
        }
    }
});


/*    modal-map    */

var openMap = document.querySelector(".open-map");
var modalMap = document.querySelector(".modal-map");
var closeMap = modalMap.querySelector(".modal-close");

openMap.addEventListener("click", function(event) {
    event.preventDefault();
    modalMap.classList.add("modal-map-show");
});

closeMap.addEventListener("click", function(event){
    event.preventDefault();
    modalMap.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function(event){
    if (event.keyCode == 27) {
        if (modalMap.classList.contains("modal-map-show")) {
          modalMap.classList.remove("modal-map-show");            
        }
    }
});


/*    gallery test    */

var galleryNxt = document.querySelector(".gallery-next");
var galleryImg = document.querySelector(".gallery-content img");

galleryNxt.addEventListener("click", function(event){
    event.preventDefault();
    galleryImg.classList.toggle("active");
});