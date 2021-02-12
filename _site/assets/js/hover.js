const navbar = document.getElementById("navbar");
const main = document.getElementById("main"); 
console.log(main)
console.log(navbar); 

function navbarIn() {
    main.setAttribute("style", "margin-left: 15rem;");
}

function navbarOut() {
    main.removeAttribute("style");
}

if (window.innerWidth <= 601) {
    navbar.removeEventListener("mouseover", navbarIn);
    navbar.removeEventListener("mouseleave", navbarOut);
} else {
    navbar.addEventListener("mouseover", navbarIn, false); 
    navbar.addEventListener("mouseleave", navbarOut, false); 
}