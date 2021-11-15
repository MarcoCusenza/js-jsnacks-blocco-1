// JSnack 1
const result = document.querySelector(".result");
let sum = 0;

for (let i = 0; i < 5; i++) {
    sum = sum + parseInt(prompt("Inserisci un numero da sommare"));
}

result.innerHTML = `La somma è: ${sum}`;