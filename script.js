const iconoMenu = document.querySelector(".icono-menu")
const menu = document.querySelector("#menu")

iconoMenu.addEventListener("click", (e) => {
    menu.classList.toggle("active")
    document.body.classList.toggle("opacity")
})