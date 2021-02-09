let options = document.getElementsByTagName("input");
let selection = document.getElementsByClassName("another");

console.log(options); 

document.addEventListener('click', () => {
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selection[0].innerHTML = options[i].value;
        }
    }
}); 
