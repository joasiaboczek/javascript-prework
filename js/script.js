function playGame(playerInput) {
    clearMessages();
    clearResult();
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
            playerScore = playerScore + 1;
        } else if (
            (argComputerMove === 'kamień' && argPlayerMove === 'nożyce') ||
            (argComputerMove === 'papier' && argPlayerMove === 'kamień') ||
            (argComputerMove === 'nożyce' && argPlayerMove === 'papier')
        ) {
            printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
            printMessage('Przegrywasz!');
            computerScore = computerScore + 1;
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
  
    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);
 
    displayResult(computerMove, playerMove)
    printResult('WYNIK MECZU')
    printResult('(gracz) ' + playerScore + ' - ' + computerScore + ' (komputer)')
}

let playerScore = 0;
let computerScore = 0;

document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1)
});

document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(2)
});

document.getElementById('play-paper').addEventListener('click', function () {
    playGame(3)
});