const printMessage = function(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
}

const displayResult = function(argComputerMove, argPlayerMove) {
    if ((argComputerMove == "kamień" && argPlayerMove === "papier") ||
    ( argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
    ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
        printMessage('Wygrałeś z mną!');
    }
    else if (argComputerMove == argPlayerMove) {
        printMessage('Tym razem Remis!');
    }
    else {
        printMessage("Wygrałem z Tobą!");
    }
}