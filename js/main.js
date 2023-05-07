const menubar = document.querySelector("#menubar");
const abrir   = document.querySelector("#abrir");
const cerrar  = document.querySelector("#cerrar");

abrir.addEventListener("click", ()=> {
    menubar.classList.add("visible");
})

cerrar.addEventListener("click", ()=> {
    menubar.classList.remove("visible");
})