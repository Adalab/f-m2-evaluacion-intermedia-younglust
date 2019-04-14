"use strict";
//Juego de adivinar número random. Da pistas si el número es alto o bajo

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
//looping into objects
const contentFeedbackText = Object.values(feedbackTextGame);
let acc = 0;
const randomNumber = getRandomNumber(100);

// randomm number untill max
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//get feedback into html
function getFeedbackTexts(index) {
  parrafMain.innerHTML = contentFeedbackText[index];
};

//counter
function startCounter() {
  acc += 1;
  counter.innerHTML = acc;
};

//feedback
function feedbackGame() {
  const everyValue = parseInt(inputMain.value);

  if (everyValue === randomNumber) {
    getFeedbackTexts(3);

  } else if (everyValue > randomNumber) {
    getFeedbackTexts(1);

  } else if (everyValue < randomNumber) {
    getFeedbackTexts(2);
  }
}

function handlerButton(event) {
  event.preventDefault();
  feedbackGame();
  startCounter();
  console.log("Número aleatorio ", randomNumber);  
};
btnMain.addEventListener("click", handlerButton);

//reset button
function resetButton(event) {
  event.preventDefault();
  inputMain.value = "";
  getFeedbackTexts(0);
  counter.innerHTML = 0;
  acc = 0;
};
resetButon.addEventListener("click", resetButton);