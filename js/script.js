let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if( randomNumber == 1 ){ 
    computerMove = 'kamień';
}
if( randomNumber == 2 ){ 
    computerMove = 'nożyce';
}
if( randomNumber == 3 ){ 
    computerMove = 'papier';
}

let playerInput = prompt('Wybierz swój ruch!! 1: kamień. 2: nożyce, 3: papier.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){ 
    playerMove = 'kamień';
}
if(playerInput == '2'){ 
    playerMove = 'nożyce';
}
if(playerInput == '3'){ 
    playerMove = 'papier';
}

printMessage('Twój ruch to: ' + playerMove);
printMessage('Mój ruch to: ' + computerMove);
if (computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
} 
else if (computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
} 
else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
} 
else if (computerMove == playerMove) {
    printMessage('Remis!');
} 
else if(playerMove == 'nieznany ruch') {
    printMessage('Przegrałeś!');
}
else {
    printMessage('Przegrałeś!');
}