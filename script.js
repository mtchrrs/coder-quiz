var viewHighScores = document.getElementById("viewHighscores");
var timeLeft = document.getElementById("timeLeft");
var mainPage = document.getElementById("mainPage");
var title = document.getElementById("main-title");
var initialButton = document.getElementById("initialButton");
var answerGrid = document.getElementById("answers");
var buttonA = document.getElementById("buttonA");
var buttonB = document.getElementById("buttonB");
var buttonC = document.getElementById("buttonC");
var buttonD = document.getElementById("buttonD");
var userDetails = document.getElementById("inputDetails");
var saveButton = document.getElementById("saveButton");
var submissionsPage = document.getElementById("submissions");
var highScoreList = document.getElementById("list-highscores");
var content = document.getElementById("content");
var detailsLabel = document.getElementById("initials-label");
var restartButton = document.getElementById("restartButton");
var hiddenAns = document.getElementById("hiddenAns");

init();

function init() {
  buttonA.style.visibility = 'hidden';
  buttonB.style.visibility = 'hidden';
  buttonC.style.visibility = 'hidden';
  buttonD.style.visibility = 'hidden';
  highScoreList.style.visibility = 'hidden';
  submissionsPage.style.visibility = 'hidden';
  userDetails.style.visibility = 'hidden';
  saveButton.style.visibility = 'hidden';
  content.style.visibility = 'hidden';
  restartButton.style.visibility = 'hidden';
};

function gameReset(){
  buttonA.style.display = 'none';
  buttonB.style.display = 'none';
  buttonC.style.display = 'none';
  buttonD.style.display = 'none';
  highScoreList.style.visibility = 'hidden';
  submissionsPage.style.visibility = 'hidden';
  answerGrid.style.visibility = 'hidden';
  userDetails.style.visibility = 'hidden';
  saveButton.style.visibility = 'hidden';
  content.style.visibility = 'hidden';
  initialButton.style.visibility = 'visible';
  restartButton.style.visibility = 'hidden';
}

// start button
initialButton.addEventListener("click", function startQuiz(event) {
  event.preventDefault();
  // when I click the button... quiz starts
  // timer starts counting down
  timerRun();
  // random question is presented
  // 4 answers to the multiple choice question are shown
  randomQuestion();
  // disappears until viewhighscore page is shown
  initialButton.style.visibility = 'hidden';
});



var secondsLeft = 30;
var correctAns = 0;

 
// timer
function timerRun() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      // counts down from 30
      secondsLeft--;
      timeLeft.textContent = "Time left: " + secondsLeft + " seconds";
     // if wrong answer, lose 5 secs
      if(secondsLeft <= 0) {
         // Stops execution of action at set interval
         clearInterval(timerInterval);
         // when timer = 0, then game over
         timeLeft.textContent = "Time Over!";
         postQuizPage();
        }
        // switch to highscores page once time is over
        
    }, 1000);
    
}

// random question
//have a collection of 10 questions

const questionsArray = [
    {
   question: "1", 
   answer:[
    {text1: "true"},
    {text2: "b"},
    {text3: "c"},
    {text4: "d"},
    {ans: "true"},
   ]
 },
 {
    question: "2", 
    answer:[
     {text1: "a"},
     {text2: "true"},
     {text3: "c"},
     {text4: "d"},
     {ans: "true"},
    ]
  },
  {
    question: "3", 
    answer:[
     {text1: "a"},
     {text2: "b"},
     {text3: "true"},
     {text4: "d"},
     {ans: "true"},
    ]
  },
  {
    question: "4", 
    answer:[
     {text1: "a"},
     {text2: "b"},
     {text3: "c"},
     {text4: "true"},
     {ans: "true"},
    ]
  },
  {
    question: "5", 
    answer:[
     {text1: "true"},
     {text2: "b"},
     {text3: "c"},
     {text4: "d"},
     {ans: "true"},
    ]
  },
  {
    question: "6", 
    answer:[
     {text1: "a"},
     {text2: "true"},
     {text3: "c"},
     {text4: "d"},
     {ans: "true"},
    ]
  },
  {
    question: "7", 
    answer:[
     {text1: "a"},
     {text2: "b"},
     {text3: "true"},
     {text4: "d"},
     {ans: "true"},
    ]
  },
  {
    question: "8", 
    answer:[
     {text1: "a"},
     {text2: "b"},
     {text3: "c"},
     {text4: "true"},
     {ans: "true"},
    ]
  },
  {
    question: "9", 
    answer:[
     {text1: "true"},
     {text2: "b"},
     {text3: "c"},
     {text4: "d"},
     {ans: "true"},
    ]
  },
  {
    question: "10", 
    answer:[
     {text1: "a"},
     {text2: "true"},
     {text3: "c"},
     {text4: "d"},
     {ans: "true"},
    ]
  },
];

let yourGlobalVariable  

// // each time an answer is put in, change question
function randomQuestion(){
  title.style.visibility = 'hidden';
  answerGrid.style.visability = 'hidden';
  buttonA.style.visibility = 'visible';
  buttonB.style.visibility = 'visible';
  buttonC.style.visibility = 'visible';
  buttonD.style.visibility = 'visible';
  content.style.visibility = 'visible';
  var questionIndex = Math.floor(Math.random() * questionsArray.length);
  var thisQuestion = questionsArray[questionIndex];

  console.log(thisQuestion);

  buttonA.textContent = thisQuestion.answer[0].text1;
  buttonB.textContent = thisQuestion.answer[1].text2;
  buttonC.textContent = thisQuestion.answer[2].text3;
  buttonD.textContent = thisQuestion.answer[3].text4;

  content.textContent = thisQuestion.question;
  var correctAnswer = thisQuestion.answer[4].ans;

  localStorage.setItem("correctAnswer", JSON.stringify(correctAnswer));
 // multiple answers
 // 4 answer pop up for each question
 // when an answer is selected, then skip to the next question
 
};

var rightButton = JSON.parse(localStorage.getItem("correctAnswer"));
let count = 0
//need to bring variable from the questions to match the one selected in the answer
buttonA.addEventListener("click", function(event){
  event.preventDefault();
  count ++;
  if (buttonA.textContent == rightButton){
    // if the answer is correct, add 1 to correct
    correctAns++;
    randomQuestion();
  } else {
    // if the answer is wrong, add 1 to wrong, take 5 seconds from the clock
    secondsLeft-=5;
    randomQuestion();
  }
});

buttonB.addEventListener("click", function(event){
 event.preventDefault();
 count ++;
  if (buttonB.textContent == rightButton){
    correctAns++;
    randomQuestion();
  } else {
    secondsLeft-=5;
    randomQuestion();
  }
});

buttonC.addEventListener("click", function(event){
  event.preventDefault();
  count ++;
  if (buttonC.textContent == rightButton){
    correctAns++;
    randomQuestion();
  } else {
    secondsLeft-=5;
    randomQuestion();
  }
});

buttonD.addEventListener("click", function(event){
  event.preventDefault();
  count ++;
  if (buttonD.textContent == rightButton){
    correctAns++;
    randomQuestion();
  } else {
    secondsLeft-=5;
    randomQuestion();
  }
});


// game over
// when timer is 0, game is over
// when game over, run submission page
function postQuizPage(event){
  // event.preventDefault();
  buttonA.style.visibility = 'hidden';
  buttonB.style.visibility = 'hidden';
  buttonC.style.visibility = 'hidden';
  buttonD.style.visibility = 'hidden';
  answerGrid.style.visibility = 'hidden';
  userDetails.style.visibility = 'visible';
  saveButton.style.visibility = 'visible';
  detailsLabel.style.visibility = 'hidden';
  title.style.visibility = 'visible';
  saveButton.textContent = "Submit";
  // input initials and score
  // into submission page
  // present the score /10    
  title.textContent = "Well done! You achieved " + correctAns + "/" + count;
  content.textContent = "What are your initials?";
  // supply an Initials input
    
};



saveButton.addEventListener("click", function(event){
  event.preventDefault();
  let arr = JSON.parse(localStorage.getItem("userHighScores")) || [];
  var userHighScores = {
    Initials: userDetails.value,
    Score: correctAns, //count,
  };

  arr.push(userHighScores)
  // once details are submitted
  // save data to local, run Highscores page
  localStorage.setItem("userHighScores", JSON.stringify(arr));
  location.reload(true);
});

// to get multiple stored scores, ie initials and scores, 
// i want to save multiple inputs to local storage

// i want to load and save them into an object

//from that object I want to save them into an array that exists in the local storage
//this array can hold 5 objects
//when more than 5 objects are in there, it deletes the oldest

// // viewighscores
// // shown once game is finished
// // shown by clicking View High Scores button
var SectionHighScore = document.getElementById("section-highscore");

viewHighScores.addEventListener("click", function(event){
  event.preventDefault
  buttonA.style.display = 'none';
  buttonB.style.display = 'none';
  buttonC.style.display = 'none';
  buttonD.style.display = 'none';
  answerGrid.style.visibility = 'visible';
  userDetails.style.visibility = 'hidden';
  saveButton.style.visibility = 'hidden';
  content.style.visibility = 'hidden';
  initialButton.style.visibility = 'hidden';
  restartButton.style.visibility = 'visible';
  highScoreList.style.visibility = 'hidden';
  
  title.textContent = "High Scores Page"
  
  var storedScores = JSON.parse(localStorage.getItem("userHighScores"));
 
  answerGrid.textContent = storedScores;

  // NEED ASSISTANCE
  // var ul = document.createElement('ul');
  // var li = document.createElement('li');
  // for(var i=0; i<5; i++){
  //   SectionHighScore.appendChild(ul);
  //   ul.appendChild(li);
  //   if(Array.isArray(storedScores[i])){
  //     li.innerHTML = storedScores[i];
  //   }
  // };
  // console.log(SectionHighScore);
 // NEED ASSISTANCE
});

restartButton.addEventListener("click", function(event){
  event.preventDefault();
  location.reload(true);
});


