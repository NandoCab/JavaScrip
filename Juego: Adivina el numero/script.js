/*let randomNumber = Math.floor(Math.random() * 100) +1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lourOrHi = document.querySelector(".lourOrHi");
const guessField = document.querySelector("#guessField");
const guesssubmit = document.querySelector(".guesssubmit");

let guessCount = 1;
let resetButon;*/

/*function checkGuess() {
    //alert("Soy un marcador de posicion")

    console.log("randomNumber: ", randomNumber)

    let userGuess = Number(guessField.value);

    if(guessCount === 1) {
        guesses.textContent = "Intentos anteriores: ";
    }

    guesses.textContent += userGuess + " ";

    if(userGuess === randomNumber) {
        lastResult.textContent = "¡Felicidades lo adivinaste!";
        lastResult.style.backgroundColor = "green";
        lourOrHi.textContent = " "
        setGameOver();
    } else if(guessCount === 10) {
        lastResult.textContent = "Fin del juego";
        setGameOver();
    } else {
        lastResult.textContent = "Equivocado";
        lastResult.style.backgroundColor = "red";

        if(userGuess < randomNumber) {
            lourOrHi.textContent = "El numero es muy bajo";
        } else if(userGuess > randomNumber){
            lourOrHi.textContent = "El numero es muy grande";
        }
    }

    guessCount ++;
    guessField.value = "";
    guessField.focus();
}

guesssubmit.addEventListener("click", checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guesssubmit.disabled = true;
    resetButon = document.createElement("button");
    resetButon.textContent = "Iniciar juego nuevo";
    document.body.appendChild(resetButon);
    resetButon.addEventListener("click", resetGame)
}

function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll(".resultParas p")
    for(let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = ""; 
    }
    resetButon.parentNode.removeChild(resetButon);
    guessField.disabled = false;
    guesssubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
    lastResult.style.backgroundColor = "white";
    randomNumber = Math.floor(Math.random * 100) + 1;
}*/

const button = document.querySelector("button");

const car = 16;

button.onclick = function() {
    var name = prompt("¿Cual es tu nombre?");
    alert("Hola " + name + ", me alegro de verte");
    console.log(name);
    //car = name;
    three();
}

function three () {
    console.log("Estamos aqui: ", name)
}