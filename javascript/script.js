const word = prompt('Inserisci una parola');

let wordLength = word.length;

console.log(wordLength);

let ArrWordReadFromLeft = [];
let ArrWordReadFromRight = [];

for (i = 0; i < wordLength; i++) {
    ArrWordReadFromLeft.push(word[i]);
}
console.log(ArrWordReadFromLeft);




for(i = wordLength; i > 0; i--) {
    ArrWordReadFromRight.push(word[i]);
}
console.log(ArrWordReadFromRight);