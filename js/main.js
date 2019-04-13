"use strict";

const inputMain = document.querySelector(".main__input");
const btnMain = document.querySelector(".main__button-try");
const parrafMain = document.querySelector(".main__parraf");
const counter = document.querySelector(".main__counter");
const resetButon = document.querySelector(".main__reset-button");
const defaultText = "Introduce un número y haz click en el botón 'Prueba'";
const numberBig = "Demasiado alto";
const numberLow = "Demasiado bajo";
const numberWinner = "¡HAS GANADO, CAMPEONA!";
let acc = 0;

// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);

function handlerButton(event) {
  event.preventDefault();

  const everyValue = parseInt(inputMain.value);

  if (everyValue === randomNumber) {
    parrafMain.innerHTML = numberWinner;
  } else if (everyValue > randomNumber) {
    parrafMain.innerHTML = numberBig;
  } else if (everyValue < randomNumber) {
    parrafMain.innerHTML = numberLow;
  }

  console.log("Número aleatorio ", randomNumber);

  //counter
  acc += 1;
  counter.innerHTML = acc;
}
btnMain.addEventListener("click", handlerButton);

//add reset button
function resetButton() {
  inputMain.value = "";
  parrafMain.innerHTML = defaultText;
  counter.innerHTML = 0;
}
resetButon.addEventListener("click", resetButton);
