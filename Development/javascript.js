// when start quiz is clicked, display question1
var begin = document.getElementById("startBtn");
var questionIndex = 0;
var theQuestion = document.getElementById("question1")

function displayQuestion(questionIndex) {
    theQuestion.innerHTML = "";
    var title =  questions[questionIndex].title;

    var h3 = document.querySelector("h3");
    h3.textContent = title;
    theQuestion.setAttribute(h3)

    for(var i = 0; i < choices; i++){
        var choice = choices[i];
        var button = document.createElement("button");
        if(choice === answer){ // change timer + correct / wrong button
        }
        else {

        }
        theQuestion.append(button)
    }
};

begin.addEventListener("click", displayQuestion);




// when any of the question1 buttons are clicked, hide question1 and display question2
var q1 = document.getElementById('1abtn');

console.log(q1);

function show2() {
    document.getElementById("question2").style.display = "contents";
    document.getElementById("question1").style.display = "none";
};

q1.addEventListener("click", show2)

// when any of the question2 buttons are clicked, hide question2 and display question3 
var q2 = document.getElementById("2abtn", "2bbtn", "2cbtn", "2dbtn")

function show3() {
    document.getElementById("question3").style.display = "contents";
    document.getElementById("question2").style.display = "none";
};

q2.addEventListener("click", show3)


// when any of the question3 buttons are clicked, hide question3 and display question4
var q3 = document.getElementById("3abtn", "3bbtn", "3cbtn", "3dbtn")

function show4() {
    document.getElementById("question4").style.display = "contents";
    document.getElementById("question3").style.display = "none";
};

q3.addEventListener("click", show4)



// when any of the question4 buttons are clicked, hide question4 and display question5
var q4 = document.getElementById("4abtn", "4bbtn", "4cbtn", "4dbtn")

function show5() {
    document.getElementById("question5").style.display = "contents";
    document.getElementById("question4").style.display = "none";
};

q4.addEventListener("click", show5)


// when any of the question5 buttons are clicked, hide question5 and display user name initials page
var q5 = document.getElementById("5abtn", "5bbtn", "5cbtn", "5dbtn")

function showInitials() {
    document.getElementById("initialpage").style.display = "contents";
    document.getElementById("question5").style.display = "none";
};

q5.addEventListener("click", showInitials)

// when the user submits initials, display score along with previous scores in highscore page



// when the user clicks start quiz, a timer starts at 75 seconds

var timeEl = document.querySelector(".navbar-right");

var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " ";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

function sendMessage() {
    alert("Time has run out! :-(");
}

startBtn.addEventListener("click", setTime);


// when the user clicks any of the buttons except for the correct answer, the timer deducts 15 seconds


function reduceTime() {
    timeEl.textContent = secondsLeft - 15 + " ";
}

var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    ///etc.
  ];