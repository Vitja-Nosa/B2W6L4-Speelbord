var inputWord = document.getElementById("inputWord");
var userInput = document.getElementById("userInput");
var button = document.getElementById("button");
var wordContainer = document.getElementById("wordContainer");

var word = undefined;
var userWord = undefined;

button.onclick = function(){
	word = undefined;
	userWord = undefined;
	if (inputWord.value.length > 13 || userInput.value.length > 13 || userInput.value.length > inputWord.value.length) {
		alert("Uw woord is te lang.");
	}
	else {
		word = inputWord.value.split("");
		userWord = userInput.value.split("");
		makeDivs(word.length);
		outcome();
	}
}

function makeDivs(qty) {
	wordContainer.innerHTML = "";
	for (i=0; i<qty; i++) {
		var createDiv = document.createElement("div")
		var divText = document.createTextNode("-");
		createDiv.appendChild(divText);
		createDiv.id = "letter_"+(i+1); 
		wordContainer.appendChild(createDiv);
	}
}	
function outcome() {
	for (i=0; i<userWord.length; i++) {
		var currentId = document.getElementById("letter_"+(i+1));
		if (word[i] == userWord[i]) {
			currentId.style.backgroundColor = "green"
		}
		else if (word.includes(userWord[i])) {
			currentId.style.backgroundColor = "yellow"
			currentId.style.borderRadius = "50%"
			word[word.indexOf(userWord[i])] = ""
		}
		currentId.innerHTML = userWord[i]
	}	
}