function getMoveName(argMoveId) {
    if(argMoveId == 1){
        return 'kamień';
    }
    else if (argMoveId == 2){
        return 'nożyce';
    }
    else if (argMoveId == 3) {
        return 'papier';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId);
    return 'nieznany ruch';
}

function playGame(playerInput) {
    clearMessages();
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);
    displayResult(computerMove, playerMove);
  }

document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
    });
  document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(2);
    });
  document.getElementById('play-paper').addEventListener('click', function () {
    playGame(3);
    });