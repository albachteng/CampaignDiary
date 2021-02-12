const main = document.getElementById('main');
const navbar = document.getElementById('navbar');
console.log(main); 
console.log(navbar); 

document.addEventListener('mouseover', (e) => {
    if (e.target == navbar) {
        console.log('hover'); 
        main.classList.add('hover');
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target == navbar) {
        console.log('stop hover'); 
        main.classList.remove('hover');
    }
});