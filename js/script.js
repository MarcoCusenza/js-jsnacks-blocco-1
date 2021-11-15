const result = document.querySelector(".result");

// JSnack 1
// let sum = 0;

// //For
// for (let i = 0; i < 5; i++) {
//     sum = sum + parseInt(prompt("Inserisci un numero da sommare"));
// }

// //While
// // let i = 0;
// // while (i < 5) {
// //     sum = sum + parseInt(prompt("Inserisci un numero da sommare"));
// //     i++;
// // }

// result.innerHTML = `La somma è: ${sum}`;


// --------------------------


// JSnack 2
const stringa1 = prompt("Inserisci la prima parola");
const stringa2 = prompt("Inserisci la seconda parola");

if (stringa1.length == stringa2.length) {
    result.innerHTML = `${stringa1} ${stringa2}`;
} else if (stringa1.length > stringa2.length) {
    result.innerHTML = `${stringa1}`;
} else {
    result.innerHTML = `${stringa2}`;
}