var qAndA = [
	{
		question: "What is my name?",
		answer: "Evan"
	},
	{
		question: "What is my favorite color?",
		answer: "tomato"
	},
	{
		question: "What is my favorite animated film?",
		answer: "Iron Giant"
	},
	{
		question: "What is my favorite TV series?",
		answer: "Firefly"
	}
];

for(var i = 0; i < qAndA.length; i++) {
	var newDiv = document.createElement("div");
	var newH1 = document.createElement("h1");
	var newInput = document.createElement("input");
		newH1.innerText = qAndA[i].question;
		newDiv.appendChild(newH1);
		newDiv.appendChild(newInput);
		document.body.appendChild(newDiv);
}

var newBtn = document.createElement("button");
	newBtn.textContent = "Submit Quiz";
	newBtn.addEventListener("click", checkAnswers);
	// newBtn.setAttribute("onclick", "checkAnswers()");
	document.body.appendChild(newBtn);

function checkAnswers() {
	var inputs = document.querySelectorAll("input");
	for(var i = 0; i < inputs.length; i++) {
		if(inputs[i].value == qAndA[i].answer) {
			//correct
			inputs[i].className = "correct";
		} else {
			//incorrect
			inputs[i].className = "incorrect";
		}
	}
}