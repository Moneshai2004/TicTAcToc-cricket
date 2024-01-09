const boxs = document.querySelectorAll('.box');
const statusTxt = document.querySelector('#status'); // Use querySelector instead of querySelectorAll
const btnRestart = document.querySelector('#Restart'); // Use querySelector instead of querySelectorAll

let x = "<img src='../img/circle.jpeg'>";
let o = "<img src='../img/o.jpeg'>";

const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = x;
let player = "X";
let running = false;
Init();

function Init() {
    boxs.forEach(box => box.addEventListener('click', boxClick));
    btnRestart.addEventListener('click', restartGame);
    statusTxt.textContent = `${player} your Turn`;
    running = true;
}

function boxClick() {
    const index=(this.dataset.index);
    if(options[index]!=""|| !running){
        return;

    }
    updateBox(this,index);
    checkWinner();
}

function updateBox(box, index) {
    options[index]=player;
    box.innerHTML=currentPlayer;

   
}

function changePlayer() {
    // Implement this function
}

function checkWinner() {
    let isWon=false;
}

function restartGame() {
    // Implement this function
}
