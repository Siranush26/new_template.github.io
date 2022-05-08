let burger=document.querySelector("#hamburger")
let nav_menu=document.querySelector("#nav_menu")

burger.addEventListener("click", navbar);

function navbar() {
    nav_menu.classList.add("nav_menu");
 
    if (nav_menu.style.display === "block") {
        nav_menu.style.display = "none";
      } else {
        nav_menu.style.display = "block";
      }
}
