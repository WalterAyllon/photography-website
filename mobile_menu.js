var menu = document.querySelector(".mobile-navigation")
var ham = document.querySelector(".ham")
if(ham){
    ham.addEventListener('click', toggleMenu)
}

function toggleMenu() {
    if(menu.classList.contains("showMenu")){
        menu.classList.remove("showMenu");
    } else {
        menu.classList.add("showMenu");
    }
}