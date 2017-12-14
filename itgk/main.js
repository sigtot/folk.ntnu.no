// Random number between min and max
function randBetween(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

var questionDiv = document.getElementById("questionDiv");
var nextButton = document.getElementById("nextButton");
var questionNum = 0;
var right = 0;
var wrong = 0;
var streak = 0;

// Lag tekstelement og erstatt tidligere innhold hos parent
function createAndReplace(type,text,parent){
	parent.innerHTML = "";

	var newTextNode = document.createTextNode(text);
	var newElement = document.createElement(type);

	newElement.appendChild(newTextNode);
	parent.appendChild(newElement);
}

function createButtonAndAppend(type,text,parent,onclick){
	//var newTextNode = document.createTextNode(text);
	var newElement = document.createElement(type);

	//newElement.appendChild(newTextNode);
	newElement.innerHTML = text;
	newElement.setAttribute("onclick","chooseAnswer(this," + onclick + ")")
	parent.appendChild(newElement);
}

var askedQuestions = [];

window.onload = function(){
	// Begin app
	printQuestion();
}

function chooseQuestion(){
	if (askedQuestions.length == questions.length){
		askedQuestions = []
	}

	var qNum = randBetween(0,questions.length);
	if (askedQuestions.indexOf(qNum) != -1){
		return chooseQuestion();
	}
	askedQuestions.push(qNum);
	return qNum;
}

function printQuestion(){
	qNum = chooseQuestion();
	questionNum = qNum;
	questionDiv.innerHTML = "<h3>" + questions[qNum].question + "</h3>";
	createButtonAndAppend("button",questions[qNum].answer1,questionDiv,1);
	createButtonAndAppend("button",questions[qNum].answer2,questionDiv,2);
	createButtonAndAppend("button",questions[qNum].answer3,questionDiv,3);
	createButtonAndAppend("button",questions[qNum].answer4,questionDiv,4);
}

function chooseAnswer(self,answer){
	if (answer == questions[questionNum].correctAnswer){
		self.style.background = "#8bc34a"
		right++;
		streak++;
	}else{
		self.style.background = "#f44336"
		wrong++;
		streak = 0;
		questionDiv.getElementsByTagName("button")[questions[questionNum].correctAnswer - 1].style.background = "#aed581";
	}
	for(i = 0; i < questionDiv.getElementsByTagName("button").length;i++){
		questionDiv.getElementsByTagName("button")[i].style.pointerEvents = "none";
	}
	updateScores();
}

nextButton.onclick = function(){
	updateScores();
	printQuestion();
}

var scoresDiv = document.getElementById("scoresDiv");
function updateScores(){
	var scorePercent = Math.round(100 * (right - wrong) / askedQuestions.length,2);
	scoresDiv.getElementsByTagName("span")[0].innerHTML = right;
	scoresDiv.getElementsByTagName("span")[1].innerHTML = wrong;
	scoresDiv.getElementsByTagName("span")[2].innerHTML = right - 0.5 * wrong + "/" + askedQuestions.length + "(" + scorePercent + "%)";
	scoresDiv.getElementsByTagName("span")[3].innerHTML = streak;
}