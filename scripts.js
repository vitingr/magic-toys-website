const header = document.querySelector(".header")

window.addEventListener("scroll", () => {

    header.classList.toggle("sticky", this.window.scrollY > 0)

})

let menu = document.querySelector("#menu-icon")
let navmenu = document.querySelector(".navmenu")

menu.onclick = () => {
    menu.classList.toggle("bx-x")
    navmenu.classList.toggle("open")
}
