function playGame(playerInput) {
    clearMessages();
    function getMoveName(argMoveId) {
        if (argMoveId === 1) {
            return 'kamień';
        } else if (argMoveId === 2) {
            return 'nożyce';
        } else if (argMoveId === 3) {
            return 'papier';
        }  
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch'; 
    }

    function displayResult(argComputerMove, argPlayerMove) {
    
        if (
            (argComputerMove === 'kamień' && argPlayerMove === 'papier') ||
            (argComputerMove === 'papier' && argPlayerMove === 'nożyce') ||
            (argComputerMove === 'nożyce' && argPlayerMove === 'kamień')
        ) {
            printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
            printMessage('Wygrywasz!');
        } else if (
            (argComputerMove === 'kamień' && argPlayerMove === 'nożyce') ||
            (argComputerMove === 'papier' && argPlayerMove === 'kamień') ||
            (argComputerMove === 'nożyce' && argPlayerMove === 'papier')
        ) {
            printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
            printMessage('Przegrywasz!');
        } else if (
            (argComputerMove === 'kamień' && argPlayerMove === 'kamień') ||
            (argComputerMove === 'papier' && argPlayerMove === 'papier') ||
            (argComputerMove === 'nożyce' && argPlayerMove === 'nożyce')
        ) {
            printMessage('Oboje zagraliśmy ' + argComputerMove);
            printMessage('Remis!');
        } else if (argPlayerMove === 'nieznany ruch') {
            printMessage('Odśwież i wybierz ruch');
        }
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);
    /*
    if (randomNumber === 1) {
        computerMove = 'kamień';
    } else if (randomNumer === 2) {
        computerMove = 'papier'
    } else {
        computerMove = 'nożyce'
    }*/
    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);
    /*
    if (playerInput === 1) {
        playerMove = 'kamień';
    } else if (playerInput === 2) {
        playerMove = 'papier'
    } else if (playerInput === 3) {
        playerMove = 'nożyce'
    } */

    displayResult(computerMove, playerMove)
}

//playGame(3);

document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1)
});

document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(2)
});

document.getElementById('play-paper').addEventListener('click', function () {
    playGame(3)
});
