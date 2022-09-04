var viewHighscores = document.getElementById("viewHighscores");
var timeLeft = document.getElementById("timeLeft");
var mainPage = document.getElementById("mainPage");
var content = document.getElementById("questions");
var initialButton = document.getElementById("initialButton");
var buttonA = document.getElementById("buttonA");
var buttonB = document.getElementById("buttonB");
var buttonC = document.getElementById("buttonC");
var buttonD = document.getElementById("buttonD");

init();

function init() {
    buttonA.style.visibility = 'hidden';
    buttonB.style.visibility = 'hidden';
    buttonC.style.visibility = 'hidden';
    buttonD.style.visibility = 'hidden';
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
var timeLeft = "TIme left: ";
// timer
function timerRun() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      // counts down from 30
      secondsLeft--;
      timeLeft.textContent = "Time left: " + secondsLeft;
      // if wrong answer, lose 5 secs
      if(answer = false) {
         secondsLeft-5;
        }
      if(secondsLeft === 0) {
         // Stops execution of action at set interval
         clearInterval(timerInterval);
         // when timer = 0, then game over
         timeLeft.textContent = "Time Over!"
        }
  
    }, 1000);
};

// random question
//have a collection of 10 questions
// var question1 = "1";
// var question2 = "2";
// var question3 = "3";
// var question4 = "4";
// var question5 = "5";
// var question6 = "6";
// var question7 = "7";
// var question8 = "8";
// var question9 = "9";
// var question10 = "10";

// var questionsArray = [question1, question2, question3, question4, question5, question6, question7, question8, question10];

var questionsObject = {
   q1: "1",
   q2: "2",
   q3: "3",
   q4: "4",
   q5: "5",
   q6: "6",
   q7: "7",
   q8: "8",
   q9: "9",
   q10: "10",
};

// // each time an answer is put in, change question
function randomQuestion(){
    buttonA.style.visibility = 'visible';
    buttonB.style.visibility = 'visible';
    buttonC.style.visibility = 'visible';
    buttonD.style.visibility = 'visible';
   
   function questionFind(){
    for(var i = 0; i < questionsObject.length; i++){
        var ques = Math.floor(Math.random(questionsObject[i]) * questionsObject.length);
        content = ques;
    } if(questionFind == questionsObject[0]){
        buttonA = "a";
        buttonB = "b";
        buttonC = "b";
        buttonD = "d";
    } else if(questionFind == questionsObject[1]){
        buttonA = "a";
        buttonB = "b";
        buttonC = "b";
        buttonD = "d";
    } else if(questionFind == questionsObject[2]){
        buttonA = "a";
        buttonB = "b";
        buttonC = "b";
        buttonD = "d";
    } else if(questionFind == questionsObject[3]){
        buttonA = "a";
        buttonB = "b";
        buttonC = "b";
        buttonD = "d";
    } else if(questionFind == questionsObject[4]){
        buttonA = "a";
        buttonB = "b";
        buttonC = "b";
        buttonD = "d";
    } else if(questionFind == questionsObject[5]){
        buttonA = "a";
        buttonB = "b";
        buttonC = "b";
        buttonD = "d";
    } else if(questionFind == questionsObject[6]){
        buttonA = "a";
        buttonB = "b";
        buttonC = "b";
        buttonD = "d";
    } else if(questionFind == questionsObject[7]){
        buttonA = "a";
        buttonB = "b";
        buttonC = "b";
        buttonD = "d";
    } else if(questionFind == questionsObject[8]){
        buttonA = "a";
        buttonB = "b";
        buttonC = "b";
        buttonD = "d";
    }else if(questionFind == questionsObject[9]){
        buttonA = "a";
        buttonB = "b";
        buttonC = "b";
        buttonD = "d";
    }
    };
    
   questionFind();

    // pickQuestion();

    // function pickQuestion(){
    //     for(let i=0; i < questionsArray.length; i++){
    //      var ques = Math.floor(Math.random(questionsArray[i]) * questionsArray.length)
    //      content = ques;
    //     } if(pickQuestion == questionsArray[0]){
    //         buttonA = "a";
    //         buttonB = "b";
    //         buttonC = "b";
    //         buttonD = "d";
    //     } else if(pickQuestion == questionsArray[1]){
    //         buttonA = "a";
    //         buttonB = "b";
    //         buttonC = "b";
    //         buttonD = "d";
    //     } else if (pickQuestion == questionsArray[2]){
    //         buttonA = "a";
    //         buttonB = "b";
    //         buttonC = "b";
    //         buttonD = "d";
    //     } else if(pickQuestion == questionsArray[3]){
    //         buttonA = "a";
    //         buttonB = "b";
    //         buttonC = "b";
    //         buttonD = "d";
    //     } else if(pickQuestion == questionsArray[4]){
    //         buttonA = "a";
    //         buttonB = "b";
    //         buttonC = "b";
    //         buttonD = "d";
    //     } else if(pickQuestion == questionsArray[5]){
    //         buttonA = "a";
    //         buttonB = "b";
    //         buttonC = "b";
    //         buttonD = "d";
    //     } else if (pickQuestion == questionsArray[6]){
    //         buttonA = "a";
    //         buttonB = "b";
    //         buttonC = "b";
    //         buttonD = "d";
    //     } else if(pickQuestion == questionsArray[7]){
    //         buttonA = "a";
    //         buttonB = "b";
    //         buttonC = "b";
    //         buttonD = "d";
    //     } else if(pickQuestion == questionsArray[8]){
    //         buttonA = "a";
    //         buttonB = "b";
    //         buttonC = "b";
    //         buttonD = "d";
    //     } else if(pickQuestion == questionsArray[9]){
    //         buttonA = "a";
    //         buttonB = "b";
    //         buttonC = "b";
    //         buttonD = "d";
    //     }
        
    // };
    
};

// multiple answers
// 4 answer pop up for each question
// when an answer is selected, then skip to the next question
// if the answer is correct, add 1 to correct
// if the answer is wrong, add 1 to wrong, take 5 seconds from the clock


// game over
// when timer is 0, game is over
// when game over, run submission page

// input initials and score
// into submission page
// supply an Initials input
// present the score /10
// once details are submitted
// save data to local, run Highscores page

// viewighscores
// shown once game is finished
// shown by clicking View High Scores button
// shows top 5 scores
// show initials and the score /10
// include start button