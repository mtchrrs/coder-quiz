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
};

function gameReset(){
  buttonA.style.visibility = 'hidden';
  buttonB.style.visibility = 'hidden';
  buttonC.style.visibility = 'hidden';
  buttonD.style.visibility = 'hidden';
  highScoreList.style.visibility = 'hidden';
  submissionsPage.style.visibility = 'hidden';
  answerGrid.style.visibility = 'hidden';
  userDetails.style.visibility = 'hidden';
  saveButton.style.visibility = 'hidden';
  content.style.visibility = 'hidden';
  initialButton.style.visibility = 'visible';
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
var wrongAnswer = 0;
 
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
    {text1: "true", correct: true},
    {text2: "b", correct: false},
    {text3: "c", correct: false},
    {text4: "d", correct: false},
   ]
 },
 {
    question: "2", 
    answer:[
     {text1: "a", correct: false},
     {text2: "true", correct: true},
     {text3: "c", correct: false},
     {text4: "d", correct: false},
    ]
  },
  {
    question: "3", 
    answer:[
     {text1: "a", correct: false},
     {text2: "b", correct: false},
     {text3: "true", correct: true},
     {text4: "d", correct: false},
    ]
  },
  {
    question: "4", 
    answer:[
     {text1: "a", correct: false},
     {text2: "b", correct: false},
     {text3: "c", correct: false},
     {text4: "true", correct: true},
    ]
  },
  {
    question: "5", 
    answer:[
     {text1: "true", correct: true},
     {text2: "b", correct: false},
     {text3: "c", correct: false},
     {text4: "d", correct: false},
    ]
  },
  {
    question: "6", 
    answer:[
     {text1: "a", correct: false},
     {text2: "true", correct: true},
     {text3: "c", correct: false},
     {text4: "d", correct: false},
    ]
  },
  {
    question: "7", 
    answer:[
     {text1: "a", correct: false},
     {text2: "b", correct: false},
     {text3: "true", correct: true},
     {text4: "d", correct: false},
    ]
  },
  {
    question: "8", 
    answer:[
     {text1: "a", correct: false},
     {text2: "b", correct: false},
     {text3: "c", correct: false},
     {text4: "true", correct: true},
    ]
  },
  {
    question: "9", 
    answer:[
     {text1: "true", correct: true},
     {text2: "b", correct: false},
     {text3: "c", correct: false},
     {text4: "d", correct: false},
    ]
  },
  {
    question: "10", 
    answer:[
     {text1: "a", correct: false},
     {text2: "true", correct: true},
     {text3: "c", correct: false},
     {text4: "d", correct: false},
    ]
  },
];


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

  buttonA.setAttribute("data-correct",thisQuestion.answer[0].correct);
  buttonA.setAttribute("data-correct",thisQuestion.answer[1].correct);
  buttonA.setAttribute("data-correct",thisQuestion.answer[2].correct);
  buttonA.setAttribute("data-correct",thisQuestion.answer[3].correct);

  content.textContent = thisQuestion.question;

 
 // multiple answers
 // 4 answer pop up for each question
 // when an answer is selected, then skip to the next question
 

};

buttonA.addEventListener("click", function(event){
  event.preventDefault();
  if (event.target["data-correct"] === true){
    // if the answer is correct, add 1 to correct
    addAns();
    randomQuestion();
  } else {
    // if the answer is wrong, add 1 to wrong, take 5 seconds from the clock
    wrongAnswer++;
    secondsLeft-=5;
    randomQuestion();
  }
});

buttonB.addEventListener("click", function(event){
 event.preventDefault();
  if (event.target["data-correct"] === true){
    addAns();
    randomQuestion();
  } else {
    wrongAnswer++;
    secondsLeft-=5;
    randomQuestion();
  }
});

buttonC.addEventListener("click", function(event){
  event.preventDefault();
  if (event.target["data-correct"] === true){
    addAns();
    randomQuestion();
  } else {
    wrongAnswer++;
    secondsLeft-=5;
    randomQuestion();
  }
});

buttonD.addEventListener("click", function(event){
  event.preventDefault();
  if (event.target["data-correct"] === true){
    addAns();
    randomQuestion();
  } else {
    wrongAnswer++;
    secondsLeft-=5;
    randomQuestion();
  }
});

function addAns(){
  correctAns++;
};

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
    title.textContent = "Well done! You achieved " + correctAns + "/10";
    content.textContent = "What are your initials?";
    // supply an Initials input
    
};

saveButton.addEventListener("click", function(event){
  event.preventDefault();
  var userHighScores = {
    Initials: userDetails.value,
    Score: correctAns,
  };
  // once details are submitted
  // save data to local, run Highscores page
  localStorage.setItem("userHighScores", JSON.stringify(userHighScores));

});

// // viewighscores
// // shown once game is finished
// // shown by clicking View High Scores button
// viewHighScores.addEventListener("click", viewHighscores());

// function viewHighscores() {
//   buttonA.style.visibility = 'hidden';
//   buttonB.style.visibility = 'hidden';
//   buttonC.style.visibility = 'hidden';
//   buttonD.style.visibility = 'hidden';
//   answerGrid.style.visibility = 'visible';
//   userDetails.style.visibility = 'hidden';
//   saveButton.style.visibility = 'hidden';
//   content.style.visibility = 'hidden';
//   // shows top 5 scores
//   title.textContent = "High Scores Page"
//   // show initials and the score /10
//   var storedScores = JSON.parse(localStorage.getItem("userHighScores"));
//   answerGrid.textContent = storedScores.Initials + " scored " + storedScores.Score +"/10";
//   // include start button
//   initialButton.style.visibility = 'visible';
//   initialButton.textContent = "Restart Quiz";
//   intitialButton.addEventListener("click", location.reload());
//   if(storedScores === null){
//     prompt("You must play the quiz to get a highscore!");
//     return;
//   };
// };
