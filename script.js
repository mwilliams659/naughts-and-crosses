// function place(box) {
//     alert("You clicked here!");
//     }


// Original code for the function below - not going to use but helpful to see
// When clicked, the box will display an X or an O
// function place(box) {
//     box.innerText = currentPlayer;
//     if (currentPlayer == "O") {
//         currentPlayer = "X";
//     } else {
//         currentPlayer = "O"
//     }
// }

var currentPlayer = "O";
// this is the state of play
var board = ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"]
var winner = "None"
// This function lets user click the box but once clicked, it cannot be changed
function place(box) {
    if(box.innerText != "") return;
    // Box id turned into integer
    const boxId = parseInt(box.id) 
    box.innerText = currentPlayer;
    // update the board
    board[boxId] = currentPlayer;
    console.log(board);
    // 0, 1, 2
    if(board[0] != "Empty"){
        if((board[1] != "Empty") && (board[1] === board[0])){
            if((board[2] != "Empty") && (board[2] === board[1])){
                winner = currentPlayer
                console.log(winner);
            }
        }
    }
    // 0, 3, 6
    if(board[0] != "Empty"){
        if((board[3] != "Empty") && (board[3] === board[0])){
            if((board[6] != "Empty") && (board[3] === board[6])){
                winner = currentPlayer
                console.log(winner);
            }
        }
    }
    // 0, 4, 8
    if(board[0] != "Empty"){
        if((board[4] != "Empty") && (board[4] === board[0])){
            if((board[8] != "Empty") && (board[4] === board[8])){
                winner = currentPlayer
                console.log(winner);
            }
        }
    }
    // 1, 4, 7
    if(board[1] != "Empty"){
        if((board[4] != "Empty") && (board[4] === board[1])){
            if((board[7] != "Empty") && (board[4] === board[7])){
                winner = currentPlayer
                console.log(winner);
            }
        }
    }
    // 2, 5, 8
    if(board[2] != "Empty"){
        if((board[5] != "Empty") && (board[5] === board[2])){
            if((board[8] != "Empty") && (board[5] === board[8])){
                winner = currentPlayer
                console.log(winner);
            }
        }
    }
    // 2, 4, 6
    if(board[2] != "Empty"){
        if((board[4] != "Empty") && (board[4] === board[2])){
            if((board[6] != "Empty") && (board[4] === board[6])){
                winner = currentPlayer
                console.log(winner);
            }
        }
    }
    // 3, 4, 5
    if(board[3] != "Empty"){
        if((board[4] != "Empty") && (board[4] === board[3])){
            if((board[5] != "Empty") && (board[4] === board[5])){
                winner = currentPlayer
                console.log(winner);
            }
        }
    }
    // 6, 7, 8
    if(board[6] != "Empty"){
        if((board[7] != "Empty") && (board[7] === board[6])){
            if((board[8] != "Empty") && (board[7] === board[8])){
                winner = currentPlayer
                console.log(winner);
            }
        }
    }
    
    // assign to other player for next turn
    currentPlayer == "O" ? currentPlayer = "X" : currentPlayer = "O";

    if (winner === "X") {
        setTimeout(function() {
            alert("X is the winner!")
    }, 0);
}
    if (winner === "O") {
        setTimeout(function() {
            alert("O is the winner!")
    }, 0);
}

}

// function checkWinner() {
//     if (box.innerText != "Empty") {

//     }
// }



// const winningCombinations = [
    
//     [1, 2, 3], 012 - done
//     [1, 4, 7], 036 - done
//     [1, 5, 9], 048 - done
//     [2, 5, 8], 147 - done
//     [3, 6, 9], 258 - done
//     [3, 5, 7], 246 - done
//      [4, 5, 6] 345 - done
//     [7, 8, 9], 678 - done
// ];



