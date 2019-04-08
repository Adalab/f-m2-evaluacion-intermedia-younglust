'use strict';
console.log('hola');

//Juego de adivinar número random. Da pistas si el número es algo o bajo


//Obtener el input en sí
//Obtener el botón
//Obtener valor del párrafo
//Obtener el elemento que será el contador
    //Cada vez que se haga click el contador suma 1
//Escuchar click del botón
//Añadir listener al botón
//Generar número aleatorio y mostrarlo por consola
    //Si el número es mayor del value mostrar mensaje: número más bajo
    //Si número es menor del value mostrar mensaje: número más alto
    //Si acierta mostrar mensaje: Has  ganado...




const inputMain = document.querySelector('.main__input');
const btnMain = document.querySelector('.main__button');
const parrafMain = document.querySelector('.main__parraf');
const counter = document.querySelector('.main__contador');

// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
// Anda, chacho, píntame en la consola un número random hasta 100;



let acc = 0;

btnMain.addEventListener('click', handlerButton);

const everyValue = inputMain.value;

const numberBig = 'Demasiado alto';
const numberLow = 'Demasiado bajo';
const numberWinner = '¡HAS GANADO, CAMPEONA!';

function handlerButton(event) {
    event.preventDefault();
    //const parrfInner = parrafMain.innerHTML;

    //parrafMain.innerHTML = inputMain.value;

    // for (let i = 0; i < btnMain; i++) {
    //     acc += 1;
    //     counter.innerHTML = acc;        
        
    // }
    const randomNumber = getRandomNumber(100);
    console.log('Número aleatorio ' , randomNumber);

    if(everyValue < randomNumber) {
        parrafMain.innerHTML = numberLow;

    } else if(everyValue > randomNumber) {

        parrafMain.innerHTML = numberBig;
        
    } else {
        numberWinner;
    }
}


