// /*-------------------------------- Constants --------------------------------*/
// const cherry = 'https://e7.pngegg.com/pngimages/764/629/;png-clipart-cherry-fruit-texas-hold-em-slot-machine-unity-poker-icon-cherry-game-food.png';
// const diamond = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT48T-uQu6rkAK8Mgu4cj3o8kir3sT1tcJ2Qw&usqp=CAU';
// const bell = 'https://www.pinclipart.com/picdir/middle/571-5714183_slot-machine-bell-png-clipart.png';
// const seven = 'https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/7-512.png';

// const slotsReel = 4;

// /*-------------------------------- Variables --------------------------------*/


// const arrayOfChoices = [cherry, diamond, bell, seven]

// /*------------------------ Cached Element References ------------------------*/

const displayResults = document.querySelector("#displayResults")
const titleEl = document.querySelector('#title');

// /*----------------------------- Event Listeners -----------------------------*/



// /*-------------------------------- Functions --------------------------------*/
//generates a random number between 1-4
//adds plus 1 to all numbers so instead of 0-3. it chooses 1-4
function getRandomNumber() {
  return Math.floor(Math.random() * 4) + 1;
}


// when spin button pushed executes the code
function spin() {
  //calling the ids from html
  const slotOne = document.querySelector('#slotOne')
  const slotTwo = document.querySelector('#slotTwo')
  const slotThree = document.querySelector('#slotThree')
  //assigning the random numbers into three different consts to be able to call them into each slot
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const num3 = getRandomNumber();
// assaigning each slow with a randomly generated number
slotOne.innerHTML = `${num1}`;
slotTwo.innerHTML =  `${num2}`;
slotThree.innerHTML =  `${num3}`;
//determine if there is a winner, if yes show the WINNER message, if not, hide message
if (num1 === num2 && num1 === num3) {
  showMessage();
} else {
  hideMessage();
  }
}

//function to show message when there is a winner
function showMessage() {
  const winnerMsg = document.getElementById("displayResults");
  winnerMsg.style.display = "block";
  winnerMsg.classList.add('animate__flash')
}

//function to hide message if there is no winner
function hideMessage() {
  const winnerMsg = document.getElementById("displayResults");
  winnerMsg.style.display = "none";
}