let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){computerMove = 'kamień';}

if(randomNumber == 2){ omputerMuve = 'nożyce';}

if(randomNumber == 3){ computerMove = 'papier';}


printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch!! 1: kamień. 2:nożyce, 3: papier.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){ playerMove = 'kamień';}

if(playerInput == '2'){ playerMove = 'nożyce';}

if(playerInput =='3'){ playerMove ='papier';}

printMessege('Twój ruch to: ' + playerMove);