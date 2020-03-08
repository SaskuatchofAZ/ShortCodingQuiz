var startCard = document.querySelector("#start-card");
var quizCard = document.querySelector("#quiz");
var scoreCard = document.querySelector("#score-card");

var question = document.querySelector("#question");
var answerOne = document.querySelector("#answer-1");
var answerTwo = document.querySelector("#answer-2");
var answerThree = document.querySelector("#answer-3");
var answerFour = document.querySelector("#answer-4");

var start = document.querySelector("#start-button");
var secondsRemaining = document.querySelector("#timer");
var finalScore = document.querySelector("#final-score");
var saveScore = document.querySelector("#save-score");
var initials = document.querySelector("#initials");


var highScoreList = document.querySelector("#high-score-list");

var questionOne = "How many semicolons should one put at the end of a consise line of code?";
var questionOneRightAnswer = "One";
var questionOneWrongAnswers = ["Two","Three","As many as possible."];

var questionTwo = "What is the proper start of a for loop?";
var questionTwoRightAnswer = "for(i=0;i<(number of loops);i++)";
var questionTwoWrongAnswers = ["for(myBelly; numberOfCorndogs; yummy++","for(meNotKnowing; thisIsCorrect; 100%)", "for(score + 7yearsAgo; r.foreFathers => thisContinent.append(newNation))"];

var questionThree = "What method adds new content to the DOM?";
var questionThreeRightAnswer = "example.append(newConent)";
var questionThreeWrongAnswers = ["computer.pleaseDoAsIAsk(imBeggingYou)","example.attach(myStuff)","doLittleDance.makeLittleLove(getDownTonight)"];

var remainingSeconds = 100;
var totalScore = 0;
var myTimer;
var highScores = [];

function grabHighScores() {
    var highScoreCheck = localStorage.getItem("highScores");
    if(highScoreCheck !== null){
        highScores = JSON.parse(highScoreCheck);
    }
}

function renderHighScores() {
    
    highScoreList.innerHTML = "";

    for (var i = 0; i < highScores.length; i++) {
        var highScore = highScores[i];

        var li = document.createElement("li")
        li.setAttribute("class", "list-group-item");
        li.textContent = highScore;

        highScoreList.appendChild(li);
    }
}

function storeHighScores() {
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function startQuiz() {
    myTimer = setInterval(startTimer, 1000);
    quizCard.style.display = "block"
    question.textContent = questionOne;
    answerOne.textContent = questionOneWrongAnswers[2];
    answerTwo.textContent = questionOneRightAnswer;
    answerThree.textContent = questionOneWrongAnswers[0];
    answerFour.textContent = questionOneWrongAnswers[1];

    answerTwo.addEventListener("click", function(){
        event.stopPropagation();
        totalScore = totalScore + 10;
        questionNumTwo();

    })

    answerOne.addEventListener("click", function(){
        event.stopPropagation();
        remainingSeconds = remainingSeconds - 25;
        questionNumTwo();
    })

    answerThree.addEventListener("click", function(){
        event.stopPropagation();
        remainingSeconds = remainingSeconds - 25;
        questionNumTwo();
    })

    answerFour.addEventListener("click", function(){
        event.stopPropagation();
        remainingSeconds = remainingSeconds - 25;
        questionNumTwo();
    })

}

function questionNumTwo() {
    question.textContent = questionTwo;
    answerOne.textContent = questionTwoRightAnswer;
    answerTwo.textContent = questionTwoWrongAnswers[1];
    answerThree.textContent = questionTwoWrongAnswers[2];
    answerFour.textContent = questionTwoWrongAnswers[0];

    answerOne.addEventListener("click", function(){
        event.stopPropagation();
        totalScore = totalScore + 10;
        questionNumThree();

    })

    answerTwo.addEventListener("click", function(){
        event.stopPropagation();
        remainingSeconds = remainingSeconds - 25;
        questionNumThree();
    })

    answerThree.addEventListener("click", function(){
        event.stopPropagation();
        remainingSeconds = remainingSeconds - 25;
        questionNumThree();
    })

    answerFour.addEventListener("click", function(){
        event.stopPropagation();
        remainingSeconds = remainingSeconds - 25;
        questionNumThree();
    })

}

function questionNumThree() {
    question.textContent = questionThree;
    answerOne.textContent = questionThreeWrongAnswers[2];
    answerTwo.textContent = questionThreeWrongAnswers[1];
    answerThree.textContent = questionThreeWrongAnswers[0];
    answerFour.textContent = questionThreeRightAnswer;

    answerFour.addEventListener("click", function(){
        event.stopPropagation();
        totalScore = totalScore + 10;
        clearInterval(myTimer);
        calculateScore();
        quizCard.style.display = "none";
    })

    answerOne.addEventListener("click", function(){
        event.stopPropagation();
        remainingSeconds = remainingSeconds - 25;
        clearInterval(myTimer);
        calculateScore();
        quizCard.style.display = "none";
        
    })

    answerTwo.addEventListener("click", function(){
        event.stopPropagation();
        remainingSeconds = remainingSeconds - 25;
        clearInterval(myTimer);
        calculateScore();
        quizCard.style.display = "none";
        
    })

    answerThree.addEventListener("click", function(){
        event.stopPropagation();
        remainingSeconds = remainingSeconds - 25;
        clearInterval(myTimer);
        calculateScore();
        quizCard.style.display = "none";
        
    })

}

function calculateScore(){
    scoreCard.style.display = "block";
    totalScore = (totalScore * 10) + remainingSeconds;
    console.log(totalScore);
    finalScore.textContent = totalScore;
    renderHighScores();
    

}

function startTimer() {
    secondsRemaining.textContent = remainingSeconds;
    remainingSeconds--;
}

grabHighScores();

start.addEventListener("click", function(){
    startCard.style.display = "none";
    timer;
    startQuiz();
});

saveScore.addEventListener("click", function(event){
    event.preventDefault();

    var highScoreText = initials.value + " " + totalScore;
    
    if(initials.value = ""){
        return
    }


    highScores.push(highScoreText);
    initials.value = "";

    storeHighScores();
    renderHighScores();
    
})