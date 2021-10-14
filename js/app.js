/*-------------------------------- Constants --------------------------------*/
const cherry = 'https://e7.pngegg.com/pngimages/764/629/;png-clipart-cherry-fruit-texas-hold-em-slot-machine-unity-poker-icon-cherry-game-food.png';
const diamond = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT48T-uQu6rkAK8Mgu4cj3o8kir3sT1tcJ2Qw&usqp=CAU';
const bar = 'https://static.wikia.nocookie.net/fallout/images/c/c6/Slot_Bar.png/revision/latest?cb=20101122225842';
const bell = 'https://www.pinclipart.com/picdir/middle/571-5714183_slot-machine-bell-png-clipart.png';
const strawberry = 'https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/strawberry-512.png';
const crown = 'https://www.slots-777.com/wp-content/uploads/2020/07/wild.png';
const clover = 'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Clover-512.png';
const seven = 'https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/7-512.png';

const slotsReel = 8;

/*-------------------------------- Variables --------------------------------*/


const arrayOfChoices = [cherry, diamond, bar, bell, strawberry, crown, clover, seven]

/*------------------------ Cached Element References ------------------------*/

const displayResults = document.querySelector("#displayResults")
const slotsMachine = document.querySelector('#slotsMachine')
const playButton = document.querySelector('#playButton')
const wallet = document.querySelector('#wallet')
const slotNum = document.querySelector('.slot-number')
const slotOne = document.querySelector('$slotOne')
const slotTwo = document.querySelector('$slotTwo')
const slotThree = document.querySelector('$slotThree')

/*----------------------------- Event Listeners -----------------------------*/





/*-------------------------------- Functions --------------------------------*/

function getRandomSlots() {
  return Math.floor(Math.random() * arrayOfChoices.length);
}
