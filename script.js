function place(box) {
    alert("You clicked here!");
    }



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
// This function lets user click the box but once clicked, it cannot be changed
function place(box) {
    if(box.innerText != "") return;
    box.innerText = currentPlayer;
    currentPlayer == "O" ? currentPlayer = "X" : currentPlayer = "O";
}