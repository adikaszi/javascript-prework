let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if( randomNumber == 1 ){
  computerMove = 'kamień';
}
if( randomNumber == 2 ){
    computerMove = 'papier';
}
if( randomNumber == 3 ){
    computerMove = 'Nożyce';
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if( playerInput == '1' ){
  playerMove = 'kamień';
}
if( playerInput == '2' ){
  playerMove = 'papier';
}
if( playerInput == '3' ){
    playerMove = 'Nożyce';
}

printMessage('Mój ruch to: ' + computerMove);
printMessage('Twój ruch to: ' + playerMove);
if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
else if( computerMove == 'papier' && playerMove == 'Nożyce'){
    printMessage('Ty Wygrywasz!');
}
else if( computerMove == 'Nożyce' && playerMove == 'Kamień'){
    printMessage('Ty wygrywasz!');
}
else if( computerMove == playerMove ){
    printMessage('Remis!');
}
else if( playerMove == 'Nieznany ruch' ){
   printMessage('Przegrałeś!')
}
else{
    printMessage('Przegrałeś!')
}