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
// const slotsMachine = document.querySelector('#slotsMachine')
// const playButton = document.querySelector('#playButton')
// const wallet = document.querySelector('#wallet')
// const slotNum = document.querySelector('.slot-number')

// /*----------------------------- Event Listeners -----------------------------*/





// /*-------------------------------- Functions --------------------------------*/

function getRandomNumber() {
  return Math.floor(Math.random() * 2) + 1;
}

function getElement(id) {
  return document.getElementById(id);
}

function spin() {
  const slotOne = document.querySelector('#slotOne')
  const slotTwo = document.querySelector('#slotTwo')
  const slotThree = document.querySelector('#slotThree')


  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const num3 = getRandomNumber();

  slotOne.innerHTML = `${num1}`;
  slotTwo.innerHTML =  `${num2}`;
  slotThree.innerHTML =  `${num3}`;

  if (num1 === num2 && num1 === num3) {
    showMessage();
  } else {
    hideMessage();
  }

}

function showMessage() {
  const msg = document.getElementById("displayResults");
  msg.style.display = "block";
}

function hideMessage() {
  const msg = document.getElementById("displayResults");
  msg.style.display = "none";
}