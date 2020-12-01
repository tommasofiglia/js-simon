// Un alert espone 5 numeri casuali diversi.Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

$(function () {

var numberList = $('.casual_numbers');
var startButton = $('#start_game');
var casualNumbers = [];

console.log(casualNumbers);

//Scrivo una funzione che generi un numero da 1 a numero casuale

function randomOneTo(max) {
  return Math.floor(Math.random() * max) + 1;
}

//Scrivo una funzione che mi dica se un numero è presente in un array

function verifyInArray(array, number) {
   var i = 0;
   while ( i < array.length) {
     if (number === array [i]) {
       return true;
     }
     i++;
   }
}

//Ciclo while che inserisce 5 numeri casuali nell'array  casualNumbers a patto che questi non si ripetano
var list = "";
while (casualNumbers.length < 5) {

  var numberComputer = randomOneTo(100);
  var list = list + " " + numberComputer;

  if (!verifyInArray(casualNumbers , numberComputer)) {
    casualNumbers.push(numberComputer);
    numberList.text(list);
  }

}

console.log(casualNumbers);

startButton.click(function() {
  console.log("dollarino");


});


});
