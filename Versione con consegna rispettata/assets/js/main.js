/***********************************
 Un alert espone 5 numeri casuali diversi. Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
**********************************/

$(function () {

  //Creo tre array che contengano i numeri Pc , quelli dell'utente e i numeri indovinati.
    var numeriPC = [];
    var numeriUtente = [];
    var numeriIndovinati = [];
    var numeroCasuale;

  //Ciclo for che estrae a sorte 5 numeri casuali per il pc sneza che siano ripetuti

    for (var i = 0; numeriPC.length < 5; i++) {
      numeroCasuale = getRandom(1, 100);

      if (!numeriPC.includes(numeroCasuale)) {
        numeriPC.push(numeroCasuale);
      }

    };

    //Alert che dice all'utente quali sono i numeri da Ricordare
    alert("I numeri da ricordare sono: " + numeriPC + " . " + " Una volta che avrai fatto click su ok passeranno 30 secondi e dopo dovrai inserire i numeri che ricordi tra quelli che sono presenti qui");

    //Impostiamo il timeout per un evento asincrono, che avvenga 30 secondi dopo il click su  ok dato dall'utente.

    setTimeout(game, 30000);

    //Funzione dentro il timeout che fa scegliere i numeri al giocatore e che, se la scelta è corretta, inserisce i numeri indovinati in un array "numeriIndovinati", utile per dire all'utente quanti numeri ha indovinato.
    function game() {

      for (var i = 0; numeriUtente.length < 5; i++) {
        var numeroScelto = Number(prompt("Inserisci uno dei numeri che hai visto prima"));


        if (numeriUtente.includes(numeroScelto) || isNaN(numeroScelto)) {
          alert("ERRORE! Hai già inserito questo numero oppure quello che hai inserito non è un numero")
        } else if (numeriPC.includes(numeroScelto)) {
          numeriUtente.push(numeroScelto);
          numeriIndovinati.push(numeroScelto);
        } else {
          numeriUtente.push(numeroScelto);
        }

      }

      //Comunico il punteggio al giocatore

      if (numeriIndovinati.length == 0) {
        alert("Nemmeno un numero ricordato.. Problemi di memoria?");
      } else if (numeriIndovinati.length == 1){
        alert("Hai ricordato soltanto un numero, cioé " + numeriIndovinati + ". Puoi fare decisamente fare di meglio!");
      } else if (numeriIndovinati.length == 5){
        alert("Che fenomeno!! Li hai ricordati tutti! I numeri erano: " + numeriIndovinati);
      } else {
        alert("Hai ricordato " + numeriIndovinati.length + " numeri: " + numeriIndovinati);
      }


    };


    //Funzione che sceglie un  numero casuale
    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

});
