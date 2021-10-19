// /*-------------------------------- Constants --------------------------------*/
const cherry = '../images/cherry.png';
const diamond = '../images/diamond.png';
const bell = '../images/bell.png';
const seven = '../images/seven.png';
const clover = '../images/clover.png'

const audio = new Audio('../audio/butn.mp3')
const winner = new Audio('../audio/winner.wav')

// /*-------------------------------- Variables --------------------------------*/

const arrayOfChoices = [cherry,bell,clover,diamond,seven]

// /*------------------------ Cached Element References ------------------------*/

const displayResults = document.querySelector("#displayResults");
const titleEl = document.querySelector('#title');
const slotsMachine = document.querySelector('#slotsMachine');
const spinButton = document.querySelector('#spinButton')
const slotOne = document.querySelector('#slotOne')
const slotTwo = document.querySelector('#slotTwo')
const slotThree = document.querySelector('#slotThree')
const credOutput = document.querySelector('#credOutput')
const btn = document.querySelector('light-dark-button')
const body = document.querySelector("body")
const lightDarkBtn = document.querySelector("#light-dark-button")
// /*----------------------------- Event Listeners -----------------------------*/

lightDarkBtn.addEventListener("click", toggleLightDark)

// /*-------------------------------- Functions --------------------------------*/

//function called getRandomNumber, that has a weighted probability per number
//for in loop so iterates through every variable in the object
//have the sum equal to the number in weightedRand object 
function getRandomNumber() {
  let sum = 0
  let num
  const weightedRand = {
    0:0.3, 1:0.3, 2:0.25, 3:0.1, 4:0.05
  }
  for (num in weightedRand) {
    sum += weightedRand[num]
    if(Math.random() <= sum) return num;
  }
  return num
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

  // assaigning each slot with a randomly generated number
  // used local img file and called those images into the consts, allowing me to change the numbers to pics instead
  slotOne.innerHTML = `<img class="imgOne" src="${arrayOfChoices[num1]}">`;
  slotTwo.innerHTML =  `<img class="imgTwo" src="${arrayOfChoices[num2]}">`;
  slotThree.innerHTML =  `<img class="imgThree" src="${arrayOfChoices[num3]}">` ;
//determine if there is a winner, if yes show the WINNER message, if not, hide message
  if (num1 === num2 && num1 === num3) {
    showMessage();
  } else {
    hideMessage();
  }
  //button click
  setTimeout(function(){
    audio.play();
  },0);



  //credits
  let credits = 100
  document.querySelector('#credOutput').innerHTML = credits

  if(slotOne === 0 && slotTwo === 0 && slotThree === 0) {
    credits = credits + 20;
  } else if(slotOne === 1 && slotTwo === 1 && slotThree=== 1) {
    credits = credits + 20;
  } else if (slotOne === 2 && slotTwo === 2 && slotThree=== 2) {
    credits = credits + 40;
  } else if (slotOne === 3 && slotTwo === 3 && slotThree=== 3) {
    credits = credits + 100;
  } else if (slotOne === 4 && slotTwo === 4 && slotThree=== 4) {
    credits = credits + 400;
  } else {
    credits = credits - 10;
  }
  function zeroCredits() {
    if(credits === 0) {
      document.querySelector('#credOutput').innerHTML = 0
    }
  }
  zeroCredits()
}


//function to show message when there is a winner
function showMessage() {
  const winnerMsg = document.getElementById("displayResults");
  winnerMsg.style.display = "block";
  winnerMsg.classList.add('animate__flash')
  setTimeout(function(){
    winner.play();
  },0);
  //if win, voice command will activate 
  // if(showMessage) {
  //   speak("winner winner chicken dinner")
  }

//function to hide message if there is no winner
function hideMessage() {
  const winnerMsg = document.getElementById("displayResults");
  winnerMsg.style.display = "none";
}


//will speak when there is a winner
// const speak = (msg) => {
//   const sp = new SpeechSynthesisUtterance(msg);
//   speechSynthesis.speak(sp);
// }



// light and dark mode
function toggleLightDark() {
  body.className = body.className === "dark" ? "" : "dark"
}
function checkDarkPref() {
  if (
    window.matchMedia("(prefers-color-scheme:dark)").matches &&
    body.className !== "dark"
  ) {
    toggleLightDark()
  }
}
checkDarkPref()