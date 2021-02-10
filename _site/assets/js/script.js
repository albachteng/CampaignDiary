let options = document.getElementsByTagName("input");
let selection = document.getElementsByClassName("selection");
let npcs = document.getElementsByClassName("npc");

document.addEventListener('click', () => {
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selection[0].innerHTML = options[i].value;
            for (let  j = 0; j < npcs.length; j++) {
                npcs[j].classList.remove('hide'); // reset on click
                if (!npcs[j].classList.contains(`${options[i].value.replace(/ /g, "")}`)) {
                    npcs[j].classList.add('hide'); 
                }
            }
        }
    }
}); 