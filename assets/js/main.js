$(function () {  

  setTimeout(insertNumbers, 3000);
  var randomNumbers = [];
  var numberCpu;

  do{
    numberCpu = getRandomInt(1, 100);
    console.log(numberCpu);
    randomNumbers.push(numberCpu);
  } while (randomNumbers.length < 5)

  console.log(randomNumbers);
  $("#random_numbers").text(randomNumbers);

  //////////////////////////////////////////
  // funzione che genera numeri randomici //
  //////////////////////////////////////////

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
  }

  ///////////////////////////////////////////////////////////////////////////////
  // funzione che riceve l'input dall'utente e restituisce i numeri indovinati //
  ///////////////////////////////////////////////////////////////////////////////

  function insertNumbers() {

    $("#random_numbers").text("TEMPO SCADUTO!!!");
    var userArray = [];
    var winnerArray = [];
    var trovato = false;

    do{

      var userNumber = Number(prompt("Prova a riscrivere i numeri che hai appena visto a schermo"));
      while (isNaN(userNumber)) {
        userNumber = Number(prompt("Per favore, inserisci un numero"));
      }

      if (randomNumbers.includes(userNumber)) { 
        winnerArray.push(userNumber);
        trovato = true;
      } else {
        userArray.push(userNumber);
      }

    } while (userArray.length + winnerArray.length < 5)

    console.log(userArray);
    console.log(winnerArray);
    

    if (trovato){
      console.log("Complimenti, hai indovinato i seguenti numeri -----> " + winnerArray);
    } else {
      console.log("NON HAI INDOVINATO NESSUN NUMERO, ECCO COSA HAI INSERITO ----> " + userArray);
    }
  }

});

