let displayButtons = document.getElementsByTagName("button");
    console.log(displayButtons);
const cities = document.getElementsByClassName("city"); 
    console.log(cities); 

const showRegion = (region) => {
    for (let i = 0; i < displayButtons.length; i++) {
        if (displayButtons[i].classList.contains(`${region}`)) {
            for (let j = 0; j < cities.length; j++) {
                cities[j].classList.add('hide');
                if (cities[j].classList.contains(`${region}`)) {
                    cities[j].classList.remove('hide');
                }
            }
        }
    }
}

document.addEventListener('click', (e) => {
    console.log(e.target.classList[0]); 
    showRegion(e.target.classList[0]);
}); 