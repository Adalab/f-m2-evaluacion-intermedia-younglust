"use strict";
//Juego de adivinar número random. Da pistas si el número es algo o bajo
const inputMain = document.querySelector(".main__input");
const btnMain = document.querySelector(".main__button-try");
const parrafMain = document.querySelector(".main__parraf");
const counter = document.querySelector(".main__counter");
const resetButon = document.querySelector(".main__reset-button");
const feedbackTextGame = {
  default: "Introduce un número y haz click en el botón 'Prueba'",
  big: "Demasiado alto",
  low: "Demasiado bajo",
  winner: "¡HAS GANADO, CAMPEONA!"
};
let acc = 0;

// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);

//counter
function startCounter() {
  acc += 1;
  counter.innerHTML = acc;
}

//feedback
function feedbackGame() {
  const everyValue = parseInt(inputMain.value);

  if (everyValue === randomNumber) {
    parrafMain.innerHTML = feedbackTextGame.winner;

  } else if (everyValue > randomNumber) {
    parrafMain.innerHTML = feedbackTextGame.big;

  } else if (everyValue < randomNumber) {
    parrafMain.innerHTML = feedbackTextGame.low;
  }
}

function handlerButton(event) {
  event.preventDefault();
  feedbackGame();
  startCounter();
  console.log("Número aleatorio ", randomNumber);  
}
btnMain.addEventListener("click", handlerButton);

//reset button
function resetButton() {
  inputMain.value = "";
  parrafMain.innerHTML = feedbackTextGame.default;
  counter.innerHTML = 0;
  acc = 0;
}
resetButon.addEventListener("click", resetButton);
