

/*Esercizio parola palindroma*/
/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

/*no funzione*/
/*
const word = prompt('Inserisci una parola');

let wordLength = word.length;

console.log(wordLength);

let ArrWordReadFromLeft = [];
let ArrWordReadFromRight = [];

for (i = 0; i < wordLength; i++) {
    ArrWordReadFromLeft.push(word[i]);
}
console.log(ArrWordReadFromLeft);




for(i = wordLength - 1; i >= 0; i--) {
    ArrWordReadFromRight.push(word[i]);
}
console.log(ArrWordReadFromRight);


let WordReadFromLeft = ArrWordReadFromLeft.toString();
console.log(WordReadFromLeft);
let WordReadFromRight = ArrWordReadFromRight.toString();
console.log(WordReadFromRight);




if (WordReadFromLeft == WordReadFromRight) {
    console.log('La parola è palindroma');
} else {
    console.log('La parola non è palindroma');
}
*/






/*Esercizio*/
/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

/*Con funzionni*/
let scelta = prompt('Scegli pari o dispari').toLowerCase();

console.log(scelta);

const numPlayer = parseInt(prompt('Inserissci un numero da 1 a 5'));

console.log(numPlayer);

function RandomNum(max) {
    return Math.floor(Math.random() * max);
}

const numberPC = RandomNum(5);

console.log(numberPC);

let sum = numPlayer + numberPC;

console.log('La somma è:' + ' ' + sum);

function PariODispari(numero) {

    if(numero % 2 == 0) {
        console.log('La somma è pari');
        pari = true;
    } else {
        console.log('La somma è dispari');
        pari = false;
    }
    
}

PariODispari(sum);


if (scelta == 'pari' && pari == true) {
    console.log('Hai vinto perchè hai scelto pari e la somma dei numeri è pari');
} else  if (scelta == 'dispari' && pari == false) {
    console.log('Hai vinto perchè hai scelto dispari e la somma dei numeri è dispari');
} else if (scelta == 'pari' && pari == false) {
    console.log('Hai perso perchè hai scelto pari e la somma dei numeri è dispari');
} else {
    console.log('Hai perso perchè hai scelto dispari e la somma dei numeri è pari');
}




