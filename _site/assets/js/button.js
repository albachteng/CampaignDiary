let buttons = document.getElementsByTagName("button");
const cities = document.getElementsByClassName("city"); 

console.log(buttons, cities); 

const showRegion = (region) => {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains(`${region}`)) {
            for (let j = 0; j < cities.length; j++) {
                cities[j].classList.add('hide');
                if (cities[j].classList.contains(`${region}`)) {
                    cities[j].classList.remove('hide');
                }
            }
        }
    }
}

const hideRegion = () => {
    for (let i = 0; i < cities.length; i++) {
        cities[i].classList.add('hide'); 
    }
}

document.addEventListener('click', (e) => {
    showRegion(e.target.classList[0]);
    document.removeEventListener('click', showRegion); 
    document.addEventListener('click', showRegion)
}); 