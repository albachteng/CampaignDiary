const navbar = document.getElementById("navbar");
const main = document.getElementById("main"); 
console.log(main)
console.log(navbar); 

navbar.addEventListener("mouseover", navbarIn, false);
navbar.addEventListener("mouseleave", navbarOut, false); 

function navbarIn() {
    main.setAttribute("style", "margin-left: 15rem;");
}

function navbarOut() {
    main.removeAttribute("style");
}