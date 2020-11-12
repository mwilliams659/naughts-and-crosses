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

    if(board[0] != "Empty"){
        if((board[1] != "Empty") && (board[1] === board[0])){
            if((board[2] != "Empty") && (board[1] === board[0])){
                winner = currentPlayer
                console.log(winner);
            }
        }
    }
    
    // assign to other player for next turn
    currentPlayer == "O" ? currentPlayer = "X" : currentPlayer = "O";

}



const winningCombinations = [
    
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [7, 8, 9],
];



