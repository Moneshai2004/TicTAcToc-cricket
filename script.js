// Select all elements with the class 'box' and assign them to the constant 'boxs'
const boxs=document.querySelectorAll('.box');
// Select the element with the id 'status' and assign it to the constant 'statusTxt'
const statusTxt=document.querySelector('#status');
// Select the element with the id 'Restart' and assign it to the constant 'btnRestart'
const btnRestart=document.querySelector('#Restart');
// Define the images for X and O
let x="<img src='img/circle.jpeg'>";
let o="<img src='img/o.jpeg'>";

// Define the winning combinations for Tic Tac Toe
const win=[
 [0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6]
];

// Initialize the game board
let options=["","","","","","","","",""];
let currentPlayer=x;
let player="X";
let running=false;
// Start the game
init();

// Function to initialize the game
function init(){
 // Add click event listeners to each box
 boxs.forEach(box=>box.addEventListener('click',boxClick));
 // Add click event listener to the Restart button
 btnRestart.addEventListener('click',restartGame);
 // Display the current player's turn
 statusTxt.textContent=`${player} Your Turn`;
 running=true;
}

// Function to handle a box click
function boxClick(){
 // Get the index of the clicked box
 const index=this.dataset.index;
 // If the box is already filled or the game is not running, exit the function
 if(options[index]!="" || !running){
   return;
 }
 // Update the box and switch players
 updateBox(this,index);
 checkWinner();
}

// Function to update a box and switch players
function updateBox(box,index){
 // Update the options array and the box's content
 options[index]=player;
 box.innerHTML=currentPlayer;
}

// Function to switch players
function changePlayer(){
   // Switch the player and currentPlayer variables
   player=(player=='X') ? "O" :"X";
   currentPlayer=(currentPlayer==x) ? o :x;
   // Update the status text
   statusTxt.textContent=`${player} Your Turn`;
}

// Function to check for a winner
function checkWinner(){
 let isWon=false;
 // Loop through the winning combinations
 for(let i=0;i<win.length;i++){
   // Get the current combination
   const condition=win[i];
   // Get the values of the boxes in the current combination
   const box1=options[condition[0]];
   const box2=options[condition[1]];
   const box3=options[condition[2]];
   // If any of the boxes are empty, skip to the next iteration
   if(box1=="" || box2=="" || box3==""){
     continue;
   }
   // If all boxes in the current combination are the same, a player has won
   if(box1==box2 && box2==box3){
     isWon=true;
     // Add the 'win' class to the winning boxes
     boxs[condition[0]].classList.add('win');
     boxs[condition[1]].classList.add('win');
     boxs[condition[2]].classList.add('win');
   }
 }

 // If a player has won, update the status text and stop the game
 if(isWon){
   statusTxt.textContent=`${player} Won..`;
   running=false;
 }
 // If the game is a draw, update the status text and stop the game
 else if(!options.includes("")){
   statusTxt.textContent=`Game Draw..!`;
   running=false;
 }
 // Otherwise, switch players
 else{
   changePlayer();
 }
}

// Function to restart the game
function restartGame(){
 // Reset the game board, players, and status text
 options=["","","","","","","","",""];
 currentPlayer=x;
 player="X";
 running=true;
 statusTxt.textContent=`${player} Your Turn`;

 // Clear the boxes and remove the 'win' class
 boxs.forEach(box=>{
     box.innerHTML="";
     box.classList.remove('win');
 });
}
