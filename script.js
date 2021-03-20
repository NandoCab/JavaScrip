/*const para = document.querySelector("p");

    para.addEventListener("click", updateName);

    function updateName() {
        let name = prompt("Ingresa un nuevo nombre");
        para.textContent = "Player 1: " + name;
        alert("Holo soy una alerta")
    }*/



document.addEventListener("DOMContentLoaded", function(){
    function createParagraph() {
        var para = document.createElement("h1");
        para.textContent = "You clicked the button";
        document.body.appendChild(para);
    }
    
    var buttons = document.querySelectorAll("button");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", createParagraph)
    }
})