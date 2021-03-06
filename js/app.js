// /*-------------------------------- Constants --------------------------------*/

const cherry = '../images/cherry.png';
const diamond = '../images/diamond.png';
const bell = '../images/bell.png';
const seven = '../images/seven.png';
const clover = '../images/clover.png'
const mysterybox = '../images/question-mark.png'
const audio = new Audio('../audio/butn.mp3')
const winner = new Audio('../audio/winner.wav')

// /*-------------------------------- Variables --------------------------------*/

const arrayOfChoices = [cherry,bell,clover,diamond,mysterybox,seven]
let credits = 5000

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
//credits displayed at the beginning of sch



//function called getRandomNumber, that has a weighted probability per number
//for in loop so iterates through every variable(properties) of the array(object) and those inherits from its chain)
  //properties nearer take precedence over those further away in the array/object
//have the sum equal to the number in weightedRand object 
function getRandomNumber() {
  let sum = 0
  let num
  const weightedRand = {
    0:0.25, 1:0.25, 2:0.2, 3:0.15, 4:0.1, 5:0.05
    //cherry,bell,mysterybox,clover,diamond,seven
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

  const mysteryPrize = Math.floor(Math.random() * 5001) - 2500;
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

    //credits
    //ties into the array of choices, and will add credits depending on the combination you get
    //if else statement so user cant play with negative credits
    //will keep allowing the user to hit play but wont add/subtract credits
    if (credits > 0) {
  if(num1 === '0' && num2 === '0' && num3 === '0') {
    credits = credits + 100;
  } else if(num1 === '1' && num2 === '1' && num3 === '1') {
    credits = credits + 100;
  } else if (num1 === '2' && num2 === '2' && num3 === '2') {
    credits = credits + 250;
  } else if (num1 === '3' && num2 === '3' && num3 === '3') {
    credits = credits + 500;
  } else if (num1 === '4' && num2 === '4' && num3 === '4') {
    credits = credits + mysteryPrize;
  } else if (num1 === '5' && num2 === '5' && num3 === '5') {
    credits = credits + 5000;
    jackpot()
  } else {
    credits = credits - 10;
  }
//to call more than once
  credOutput.innerHTML = credits;
} else { alert("You have no more credits!")}
 //button click
 setTimeout(function(){
  audio.play();
},0);
}

  //trigger if you want voice chat when you win
  //if win, voice command will activate 
function jackpot() {
  if(jackpot) {
    speak("WINNER WINNER CHICKEN DINNER")
  }
}

//will speak when there is a winner
const speak = (msg) => {
  const sp = new SpeechSynthesisUtterance(msg);
  speechSynthesis.speak(sp);
}

//function to show message when there is a winner
function showMessage() {
  const winnerMsg = document.getElementById("displayResults");
  winnerMsg.style.display = "block";
  winnerMsg.classList.add('animate__flash')
  setTimeout(function(){
    winner.play();
  },0);
}

//function to hide message if there is no winner
function hideMessage() {
  const winnerMsg = document.getElementById("displayResults");
  winnerMsg.style.display = "none";
}

// light and dark mode
function toggleLightDark() {
  body.className = body.className === "dark" ? "" : "dark"
}
function checkDarkPref() {
  if (
    window.matchMedia("(prefers-color-scheme:dark)").matches &&
    body.className !== "dark") 
    {
    toggleLightDark()
    }
}
checkDarkPref()