var gameMap = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

var usedPositions = []

var playerXRound = true

var playerX = 1
var playerO = 0

function clickDiv(house, row, id) {
    if(usedPositions.indexOf(id) != -1) {
        alert('Não é possível jogar na mesma posição')
    } else {
        usedPositions.push(id)

        if (playerXRound) {
            document.getElementById('player').innerText = 'Vez do jogador X'
            document.getElementById(id).innerText = 'X'
    
            gameMap[row][house] = playerX
            playerXRound = false
        } else {
            document.getElementById('player').innerText = 'Vez do jogador O'
            document.getElementById(id).innerText = 'O'
    
            gameMap[row][house] = playerO
            playerXRound = true
        }
    }

    var winner = verifyWinner()

    if(winner !== null) {
        if(winner == playerX) {
            document.getElementById('player').innerHTML = '<span>Jogador X ganhou!</span>'
            alert('Jogador X ganhou!')
        } else if(winner == playerO) {
            document.getElementById('player').innerHTML = '<span>Jogador O ganhou!</span>'
            alert('Jogador O ganhou!') 
        }

        setTimeout(() => {
            restartGame()
        }, 5000)
    }
}

function verifyWinner() {
    var rowOne = gameMap[0]
    var rowTwo = gameMap[1]
    var rowThree = gameMap[2]

    var winner = null

    // Winner 0

    // row
    if(rowOne[0] == 0 && rowOne[1] == 0 && rowOne[2] == 0) {
        winner = 0
    } else if(rowTwo[0] == 0 && rowTwo[1] == 0 && rowTwo[2] == 0) {
        winner = 0
    } else if(rowThree[0] == 0 && rowThree[1] == 0 && rowThree[2] == 0) {
        winner = 0
    }

    // column
    if(rowOne[0] == 0 && rowTwo[0] == 0 && rowThree[0] == 0) {
        winner = 0
    } else if(rowOne[1] == 0 && rowTwo[1] == 0 && rowThree[1] == 0) {
        winner = 0
    } else if(rowOne[2] == 0 && rowTwo[2] == 0 && rowThree[2] == 0) {
        winner = 0
    }

    // diagonal
    if(rowOne[0] == 0 && rowTwo[1] == 0 && rowThree[2] == 0) {
        winner = 0
    } else if(rowOne[2] == 0 && rowTwo[1] == 0 && rowThree[0] == 0) {
        winner = 0
    }

    // Winner 1

    // row
    if(rowOne[0] == 1 && rowOne[1] == 1 && rowOne[2] == 1) {
        winner = 1
    } else if(rowTwo[0] == 1 && rowTwo[1] == 1 && rowTwo[2] == 1) {
        winner = 1
    } else if(rowThree[0] == 1 && rowThree[1] == 1 && rowThree[2] == 1) {
        winner = 1
    }

    // column
    if(rowOne[0] == 1 && rowTwo[0] == 1 && rowThree[0] == 1) {
        winner = 1
    } else if(rowOne[1] == 1 && rowTwo[1] == 1 && rowThree[1] == 1) {
        winner = 1
    } else if(rowOne[2] == 1 && rowTwo[2] == 1 && rowThree[2] == 1) {
        winner = 1
    }

    // diagonal
    if(rowOne[0] == 1 && rowTwo[1] == 1 && rowThree[2] == 1) {
        winner = 1
    } else if(rowOne[2] == 1 && rowTwo[1] == 1 && rowThree[0] == 1) {
        winner = 1
    }

    return winner
}

function restartGame() {
    window.location.reload()
}