const navbar = document.getElementById("navbar");
const main = document.getElementById("main"); 

function navbarIn() {
    main.setAttribute("style", "transition: margin-left 400ms; margin-left: 10rem;");
}

function navbarOut() {
    main.setAttribute("style", "transition: margin-left 400ms; margin-left: 4rem;");
}

if (window.innerWidth <= 601) {
    console.log('hover off');
    navbar.removeEventListener("mouseover", navbarIn);
    navbar.removeEventListener("mouseleave", navbarOut);
} else {
    navbar.addEventListener("mouseover", navbarIn, false); 
    navbar.addEventListener("mouseleave", navbarOut, false); 
}