let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

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

let computerMove = getMoveName(randomNumber);

let playerInput = prompt('Wybierz swój ruch!! 1: kamień. 2: nożyce, 3: papier.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

displayResult(computerMove, playerMove);

console.log('moves:', computerMove, playerMove);

