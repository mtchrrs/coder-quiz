var viewHighScores = document.getElementById("viewHighscores");
var timeLeft = document.getElementById("timeLeft");
var mainPage = document.getElementById("mainPage");
var content = document.getElementById("questions");
var initialButton = document.getElementById("initialButton");
var answerGrid = document.getElementById("answers");
var buttonA = document.getElementById("buttonA");
var buttonB = document.getElementById("buttonB");
var buttonC = document.getElementById("buttonC");
var buttonD = document.getElementById("buttonD");
var userDetails = document.getElementById("inputDetails");
var saveButton = document.getElementById("saveButton");

init();

function init() {
    buttonA.style.visibility = 'hidden';
    buttonB.style.visibility = 'hidden';
    buttonC.style.visibility = 'hidden';
    buttonD.style.visibility = 'hidden';
    userDetails.style.visibility = 'hidden';
    saveButton.style.visibility = 'hidden';
};

// start button
initialButton.addEventListener("click", function(event) {
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

// timer
function timerRun() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      // counts down from 30
      secondsLeft--;
      timeLeft.textContent = "Time left: " + secondsLeft + " seconds";
     // if wrong answer, lose 5 secs
       if(wrongAnswer++) {
          secondsLeft-5;
        }
      if(secondsLeft === 0) {
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
   question1: "1", 
   answer1:[
    {text1: "a", correct: true},
    {text2: "b", correct: false},
    {text3: "c", correct: false},
    {text4: "d", correct: false},
   ]
 },
 {
    question2: "2", 
    answer2:[
     {text1: "a", correct: false},
     {text2: "b", correct: true},
     {text3: "c", correct: false},
     {text4: "d", correct: false},
    ]
  },
  {
    question3: "3", 
    answer3:[
     {text1: "a", correct: false},
     {text2: "b", correct: false},
     {text3: "c", correct: true},
     {text4: "d", correct: false},
    ]
  },
  {
    question4: "4", 
    answer4:[
     {text1: "a", correct: false},
     {text2: "b", correct: false},
     {text3: "c", correct: false},
     {text4: "d", correct: true},
    ]
  },
  {
    question5: "5", 
    answer5:[
     {text1: "a", correct: true},
     {text2: "b", correct: false},
     {text3: "c", correct: false},
     {text4: "d", correct: false},
    ]
  },
  {
    question6: "6", 
    answer6:[
     {text: "a", correct: false},
     {text: "b", correct: true},
     {text: "c", correct: false},
     {text: "d", correct: false},
    ]
  },
  {
    question7: "7", 
    answer7:[
     {text1: "a", correct: false},
     {text2: "b", correct: false},
     {text3: "c", correct: true},
     {text4: "d", correct: false},
    ]
  },
  {
    question8: "8", 
    answer8:[
     {text1: "a", correct: false},
     {text2: "b", correct: false},
     {text3: "c", correct: false},
     {text4: "d", correct: true},
    ]
  },
  {
    question9: "9", 
    answer9:[
     {text1: "a", correct: true},
     {text2: "b", correct: false},
     {text3: "c", correct: false},
     {text4: "d", correct: false},
    ]
  },
  {
    question10: "10", 
    answer10:[
     {text1: "a", correct: false},
     {text2: "b", correct: true},
     {text3: "c", correct: false},
     {text4: "d", correct: false},
    ]
  },
];

function randomQuestion(){
    for(var i = 0; i <= questionsArray.length; i++){
        Math.floor(Math.random(questionsArray[i]) * questionsArray.length)
    }
    content.innerText = questionsArray.randomQuestion()
}

// // each time an answer is put in, change question
function randomQuestion(){
    buttonA.style.visibility = 'visible';
    buttonB.style.visibility = 'visible';
    buttonC.style.visibility = 'visible';
    buttonD.style.visibility = 'visible';
   
   var questionFind = function() {
     for(var i = 0; i <= questionsArray.length; i++){
         Math.floor(Math.random(questionsArray[i]) * questionsArray.length);
        } 
     
     if(questionFind == questionsArray[0]){
         buttonA.textContent = answer1.text1;
         buttonB.textContent = answer1.text2;
         buttonC.textContent = answer1.text3;
         buttonD.textContent = answer1.text4;
     } else if(questionFind == questionsArray[1]){
         buttonA.textContent = answer2.text1;
         buttonB.textContent = answer2.text2;
         buttonC.textContent = answer2.text3;
         buttonD.textContent = answer2.text4;
     } else if(questionFind == questionsArray[2]){
         buttonA.textContent = answer3.text1;
         buttonB.textContent = answer3.text2;
         buttonC.textContent = answer3.text3;
         buttonD.textContent = answer3.text4;
     } else if(questionFind == questionsArray[3]){
         buttonA.textContent = answer4.text1;
         buttonB.textContent = answer4.text2;
         buttonC.textContent = answer4.text3;
         buttonD.textContent = answer4.text4;
     } else if(questionFind == questionsArray[4]){
         buttonA.textContent = answer5.text1;
         buttonB.textContent = answer5.text2;
         buttonC.textContent = answer5.text3;
         buttonD.textContent = answer5.text4;
     } else if(questionFind == questionsArray[5]){
         buttonA.textContent = answer6.text1;
         buttonB.textContent = answer6.text2;
         buttonC.textContent = answer6.text3;
         buttonD.textContent = answer6.text4;
     } else if(questionFind == questionsArray[6]){
         buttonA.textContent = answer7.text1;
         buttonB.textContent = answer7.text2;
         buttonC.textContent = answer7.text3;
         buttonD.textContent = answer7.text4;
     } else if(questionFind == questionsArray[7]){
         buttonA.textContent = answer8.text1;
         buttonB.textContent = answer8.text2;
         buttonC.textContent = answer8.text3;
         buttonD.textContent = answer8.text4;
     } else if(questionFind == questionsArray[8]){
         buttonA.textContent = answer9.text1;
         buttonB.textContent = answer9.text2;
         buttonC.textContent = answer9.text3;
         buttonD.textContent = answer9.text4;
     }else if(questionFind == questionsArray[9]){
         buttonA.textContent = answer10.text1;
         buttonB.textContent = answer10.text2;
         buttonC.textContent = answer10.text3;
         buttonD.textContent = answer10.text4;
     }};
   questionFind();
   content.textContent = questionFind();
    
};

var correctAns = 0;
var wrongAnswer = 0;

// multiple answers
// 4 answer pop up for each question
// when an answer is selected, then skip to the next question
buttonA.addEventListener("click", function(event){
    event.preventDefault();
    if (buttonA == true){
        correctAns++;
        randomQuestion();
    } else {
        wrongAnswer++;
        randomQuestion();
    }
});

buttonB.addEventListener("click", function(event){
    event.preventDefault();
    if (buttonB == true){
        correctAns++;
        randomQuestion();
    } else {
        wrongAnswer++;
        randomQuestion();
    }
});

buttonC.addEventListener("click", function(event){
    event.preventDefault();
    if (buttonC == true){
        correctAns++;
        randomQuestion();
    } else {
        wrongAnswer++;
        randomQuestion();
    }
});

buttonD.addEventListener("click", function(event){
    event.preventDefault();
    if (buttonD == true){
        correctAns++;
        randomQuestion();
    } else {
        wrongAnswer++;
        randomQuestion();
    }
});

// if the answer is correct, add 1 to correct
// if the answer is wrong, add 1 to wrong, take 5 seconds from the clock


// game over
// when timer is 0, game is over
// when game over, run submission page
function postQuizPage(event){
    event.preventDefault();
    buttonA.style.visibility = 'hidden';
    buttonB.style.visibility = 'hidden';
    buttonC.style.visibility = 'hidden';
    buttonD.style.visibility = 'hidden';
    userDetails.style.visibility = 'visible';
    saveButton.style.visibility = 'visible';
    content.textContent = "Well done! you achieved " + correctAns + "/10";
    submission.textContent = "What are your initials?";
    saveButton.eventListener("click", function(event){
        event.preventDefault();

        var userHighScores = {
            Initials: submission.value,
            Score: correctAns,
        };

        localStorage.setItem("userHighScores", JSON.stringify(userHighScores));
        viewHighscores();
    });
    
};
// input initials and score
// into submission page
// supply an Initials input
// present the score /10
// once details are submitted
// save data to local, run Highscores page

// viewighscores

viewHighScores.addEventListener("click", viewHighscores());

function viewHighscores() {
    buttonA.style.visibility = 'hidden';
    buttonB.style.visibility = 'hidden';
    buttonC.style.visibility = 'hidden';
    buttonD.style.visibility = 'hidden';
    userDetails.style.visibility = 'hidden';
    saveButton.style.visibility = 'hidden';
    if(savedDetails === null){
        prompt("You must play the quiz to get a highscore!");
        return;
    };
    
    var savedDetails = JSON.parse(localStorage.getItem("userHighScores"));
    answerGrid.textContent = savedDetails.Initials + savedDetails.Score +"/10";

};
// shown once game is finished
// shown by clicking View High Scores button
// shows top 5 scores
// show initials and the score /10
// include start button