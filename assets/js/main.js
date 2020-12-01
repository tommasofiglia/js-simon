/***************************************************
CONSEGNA

Un alert espone 5 numeri casuali diversi.Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
****************************************************/

$(function () {

  var numberList = $('.casual_numbers');
  var startButton = $('#start_game');
  var hiddenElements = $('.hidden');
  var time = $('.time');
  var score = $('.score');
  var casualNumbers = [];
  var userNumbers = [];
  var numeriIndovinati = [];
  var seconds;
  var numeroInserito;

// Scrivo una funzione che generi un numero da 1 a numero casuale.

  function randomOneTo(max) {
    return Math.floor(Math.random() * max) + 1;
  }

// Scrivo una funzione che mi dica se un numero è presente in un array.

  function verifyInArray(array, number) {
     var i = 0;
     while ( i < array.length) {
       if (number === array [i]) {
         return true;
       }
       i++;
     }
  }

// Ciclo while che inserisce 5 numeri casuali nell'array  casualNumbers a patto che questi non si ripetano. I numeri vengono anche stampari a schermo.

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

// Scrivo cosa succede quando clicco su "Avvia Gioco".

  startButton.click(function() {
    seconds = 30;
    time.html(seconds);

    hiddenElements.removeClass('hidden');

    setTimeout(game, 30000);

// Funzione che, passati i 30 secondi, cancella il testo contenente i numeri e apre il prompt per fare giocare l'utente

    function game() {

      hiddenElements.addClass('hidden');

      for (var i = 0; userNumbers.length < 5; i++) {
        var numeroInserito = Number(prompt('Aggiungi uno dei numeri visti prima'));


        if (numeroInserito == 0 || numeroInserito > 100 || isNaN(numeroInserito)){
          alert("Il numero che hai inserito non è valido! Ricorda che sono ammessi solo numeri compresi tra 1 e 100 e che non puoi scrivere alcuna lettera.");
        } else if (!verifyInArray(userNumbers , numeroInserito) && verifyInArray(casualNumbers , numeroInserito)) {
          userNumbers.push(numeroInserito);
          numeriIndovinati.push(numeroInserito);
          console.log("Hai inserito " + numeriIndovinati.length + " numeri giusti");
        } else if (!verifyInArray(userNumbers , numeroInserito)) {
          userNumbers.push(numeroInserito);
          console.log(userNumbers);

        }

      }
// Restituzione del punteggio all'utente

      alert("I numeri che hai indovinato sono " + numeriIndovinati.length);
      location.reload();

    }

  });

});
