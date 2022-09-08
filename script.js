// define elements in the order that they appear in the HTML file for easier reference
var viewHighScores = document.getElementById("viewHighscores");
var timeLeft = document.getElementById("timeLeft");
var mainPage = document.getElementById("mainPage");
var title = document.getElementById("main-title");
var content = document.getElementById("content");
var hiddenAns = document.getElementById("hiddenAns");
var answerGrid = document.getElementById("answers");
var buttonA = document.getElementById("buttonA");
var buttonB = document.getElementById("buttonB");
var buttonC = document.getElementById("buttonC");
var buttonD = document.getElementById("buttonD");
var submissionsPage = document.getElementById("submissions");
var userDetails = document.getElementById("inputDetails");
var saveButton = document.getElementById("saveButton");
var initialButton = document.getElementById("initialButton");
var sectionHighScore = document.getElementById("section-highscore");
var restartButton = document.getElementById("restartButton");

// call the init function so that the web application starts up with a clean workspace
init();
//create an init function to hide elements that arent needed yet upon opening the application
function init() {
  buttonA.style.visibility = 'hidden';
  buttonB.style.visibility = 'hidden';
  buttonC.style.visibility = 'hidden';
  buttonD.style.visibility = 'hidden';
  submissionsPage.style.visibility = 'hidden';
  userDetails.style.visibility = 'hidden';
  saveButton.style.visibility = 'hidden';
  content.style.visibility = 'hidden';
  restartButton.style.visibility = 'hidden';
};

// start button - when I click the button => quiz starts
initialButton.addEventListener("click", function startQuiz(event) {
  event.preventDefault();
  // call the timerRun function => timer starts counting down
  timerRun();
  // call the randomQuestion function => random question is presented
  randomQuestion();
  // initial button then disappears until the page is reloaded
  initialButton.style.visibility = 'hidden';
});

// created variables to record 
// (a) the seconds left, starting at 30
var secondsLeft = 30;
// (b) the correct answers, starting at 0
var correctAns = 0;

// timer - called in 'intialButton' => counts down from secondsLeft var, stops at 0, time over!
function timerRun() {
    // sets timer interval to 'count down' every second
    var timerInterval = setInterval(function() {
      // takes one from 'secondsLeft' var (globally defined)
      secondsLeft--;
      // shows the text content at the top right of the application
      timeLeft.textContent = "Time left: " + secondsLeft + " seconds";
      // stops the timer from going below 0, and stops the game
      if(secondsLeft <= 0) {
        // stops execution of action at set interval
        clearInterval(timerInterval);
        // when timer = 0, then game over
        timeLeft.textContent = "Time Over!";
        // runs the postQuizPage
        postQuizPage();
       } 
    }, 1000);
    
}

// array of ten question objects --> why an array?
// this allows me to store the question, possible answers and answers all in one place
const questionsArray = [
    {
   //this shows the actual question to be asked
   question: "What is the easiest way to refence an element from HTML into JS?", 
   answer:[
    // these are the multi-choice options to pick from
    {text1: '.getElementbyId()'},
    {text2: '.findElement()'},
    {text3: '.searchHTMLfor()'},
    {text4: '.getIdByElement()'},
    // this is the correct answer that matches one of the multi-choice options
    {ans: '.getElementbyId()'},
   ]
 },
 {
    question: "The term 'var' refers to..", 
    answer:[
     {text1: 'an array'},
     {text2: 'an object'},
     {text3: 'a variable'},
     {text4: 'an element'},
     {ans: 'a variable'},
    ]
  },
  {
    question: "How would you call a function names 'callMe'?", 
    answer:[
     {text1: '.callfunction(callMe)'},
     {text2: 'function callMe()'},
     {text3: 'callMe()'},
     {text4: 'fcn.callMe'},
     {ans: 'callMe()'},
    ]
  },
  {
    question: "How do you add a single line comment in JavaScript?", 
    answer:[
     {text1: '"=> this is the comment <="'},
     {text2: '"/* this is the comment */"'},
     {text3: '"<!-- this is the comment -->"'},
     {text4: '"// this is the comment"'},
     {ans: '"// this is the comment"'},
    ]
  },
  {
    question: "Which of the following is a string?", 
    answer:[
     {text1: "'7'"},
     {text2: '10'},
     {text3: 'var string = 5'},
     {text4: 'var object = {4, 5, 6}'},
     {ans: "'7'"},
    ]
  },
  {
    question: "How to you make a variable react to a mouse 'click'?", 
    answer:[
     {text1: '.addEventListener(click)'},
     {text2: '.addClickListener'},
     {text3: '.listenFor(click)'},
     {text4: '.click'},
     {ans: '.addEventListener(click)'},
    ]
  },
  {
    question: "How would you create a variable?", 
    answer:[
     {text1: 'variable = myVariable;'},
     {text2: 'vbl = myVariable;'},
     {text3: 'var myVariable;'},
     {text4: 'var = myVariable;'},
     {ans: 'var myVariable;'},
    ]
  },
  {
    question: "How do you reference JavaScript in HTML?", 
    answer:[
     {text1: '<script>'},
     {text2: '<javascript>'},
     {text3: '<js>'},
     {text4: '<readscript>'},
     {ans: '<script>'},
    ]
  },
  {
    question: "How would you create a function in JavaScript?", 
    answer:[
     {text1: 'createFunction = myFunction()'},
     {text2: 'myFunction()'},
     {text3: 'fcn.myFunction()'},
     {text4: 'function myFunction()'},
     {ans: 'function myFunction()'},
    ]
  },
  {
    question: "How do you write an 'if' statement in JavaScript?", 
    answer:[
     {text1: 'if i == 8'},
     {text2: 'if (i==8)'},
     {text3: '.if(i=8)'},
     {text4: '(i==8)if'},
     {ans: 'if (i==8)'},
    ]
  },
];

// this function runs when the 'initialButton' is run
// randomQuestion picks a question from the array so that it can be presented to the user
function randomQuestion(){
  // hide the title and answer grid elements
  title.style.visibility = 'hidden';
  answerGrid.style.visability = 'hidden';
  // show the button icons in the webpage
  buttonA.style.visibility = 'visible';
  buttonB.style.visibility = 'visible';
  buttonC.style.visibility = 'visible';
  buttonD.style.visibility = 'visible';
  content.style.visibility = 'visible';
  // create a variable that picks a random number from the lenght of the array using math floor
  var questionIndex = Math.floor(Math.random() * questionsArray.length);
  // create a variable that identifies the question number from the array
  var thisQuestion = questionsArray[questionIndex];
  console.log(thisQuestion);
  // present the multi-choice options from the question picked above 
  buttonA.textContent = thisQuestion.answer[0].text1;
  buttonB.textContent = thisQuestion.answer[1].text2;
  buttonC.textContent = thisQuestion.answer[2].text3;
  buttonD.textContent = thisQuestion.answer[3].text4;
  // shows the actual question in the 'content' section of the application
  content.textContent = thisQuestion.question;
  // create a variable which represents the correct answer, as found in the questions array
  var correctAnswer = thisQuestion.answer[4].ans;
  console.log(correctAnswer);
  // store the correct answer in local storage for later reference
  localStorage.setItem("correctAnswer", JSON.stringify(correctAnswer));
};

// create a global variable from correct answer (logged above) to reference in the buttons
var rightButton = JSON.parse(localStorage.getItem("correctAnswer"));
// create a variable for the questions attempted for a more accurate reading
let count = 0

// create a button and event listener for each multi-choice answer to record user selections
buttonA.addEventListener("click", function(event){
  event.preventDefault();
  // increases the questions attempted count (when button is clicked)
  count ++;
  // uses the variable with the correct answer and compares it to the buttons content
  if (buttonA.textContent == rightButton){
    // if the answer is correct, add 1 to correct
    correctAns++;
    // re-run the random Question funtion
    randomQuestion();
  } else {
    // if the answer is wrong take 5 seconds from the timer (secondsLeft var)
    secondsLeft-=5;
    // re-run the random Question function
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


// the game is over when timer is 0, when the game is over, run submission page
function postQuizPage(){
  // hide the multi-choice buttons and answerGrid content
  buttonA.style.visibility = 'hidden';
  buttonB.style.visibility = 'hidden';
  buttonC.style.visibility = 'hidden';
  buttonD.style.visibility = 'hidden';
  answerGrid.style.visibility = 'hidden';
  // show the user details var, save button and title var
  userDetails.style.visibility = 'visible';
  saveButton.style.visibility = 'visible';
  title.style.visibility = 'visible';
 // show the content on the save button as submit
  saveButton.textContent = "Submit";
  // input initials, presents the score correct out of attempted questions    
  title.textContent = "Well done! You achieved " + correctAns + "/" + count;
  content.textContent = "What are your initials?";
  // supply an Initials input (userDetails)
};

// create a button that submits the user details after the initials have been entered and reloads game
saveButton.addEventListener("click", function(event){
  event.preventDefault();
  // create an array called 'arr' that recieves existing "userHighScores" saved to local storage
  let arr = JSON.parse(localStorage.getItem("userHighScores")) || [];
  // then create an object to hold the game stats i.e initials, score, questions attempted
  var userHighScores = {
    Initials: userDetails.value,
    Score: correctAns, 
    Count: count,
  };
  // push the object 'userHighScores' to the variable
  arr.push(userHighScores)
  // save variable and object to the local storage
  localStorage.setItem("userHighScores", JSON.stringify(arr));
  // then reload the page to start the home page again
  location.reload(true);
});

// viewighscores button ==> only access to high scores page
viewHighScores.addEventListener("click", function(event){
  event.preventDefault
  // remove from display any var that is not needed
  buttonA.style.display = 'none';
  buttonB.style.display = 'none';
  buttonC.style.display = 'none';
  buttonD.style.display = 'none';
  answerGrid.style.display = 'none';
  userDetails.style.display = 'none';
  saveButton.style.display = 'none';
  content.style.display = 'none';
  initialButton.style.display = 'none';
  // show the restart
  restartButton.style.visibility = 'visible';
  // title of the page
  title.textContent = "High Scores Page"
  // get the information previously stored in local storage
  var storedScores = JSON.parse(localStorage.getItem("userHighScores"));
  // sort the data in the variable in order from highest score to lowest
  storedScores.sort((a, b) => b.Score - a.Score);
 // create an unordered list to present the scores from the storedScores var
  var ul = document.createElement('ul');
  // add an id to style in css
  ul.setAttribute('id', 'created-ul');
  // append the unordered list to be a child of the sectionHighScore var
  sectionHighScore.appendChild(ul);
  // create a for loop to show the top five highest scores
  for(var i=0; i<5; i++){
    // create a list item for each of the scores to be presented
    var li = document.createElement('li');
    // create an id for teh list item to be styled in css
    li.setAttribute('id', 'created-li');
    // present the content from the storedScores variable into the created list
    li.innerHTML = `${storedScores[i].Initials} scored ${storedScores[i].Score} / ${storedScores[i].Count} in 30 seconds!`;
    // append the list var as a child of the unordered list
    ul.appendChild(li);
  }
 // once the button is clicked, hide it, the only option is then the restart button
  viewHighScores.style.visibility = 'hidden';
});

// restart button ==> seen in the 'viewHighScores' function, this will reload the page
restartButton.addEventListener("click", function(event){
  event.preventDefault();
  location.reload(true);
});
