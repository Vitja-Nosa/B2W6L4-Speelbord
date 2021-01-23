var inputWord = document.getElementById("inputWord");
var inputLetter = document.getElementById("inputLetter");
var button = document.getElementById("button");
var wordContainer = document.getElementById("wordContainer");

var word = undefined;
var letter = undefined;

button.onclick = function(){
	if (inputWord.value.length > 13) {
		alert("Uw woord is te lang.");
	}
	else if (inputWord.value.length <= 0 || inputLetter.value.length != 1) {
		alert("Ongeldige invoer.")
	}
	else {
		word = inputWord.value.split("");
		letter = inputLetter.value;
		makeDivs(word.length)
		checkLetter(inputLetter.value);	
	}
}

function makeDivs(qty) {
	wordContainer.innerHTML = "";
	for (i=0; i<qty; i++) {
		var createDiv = document.createElement("div")
		var divText = document.createTextNode(i+1);
		createDiv.appendChild(divText);
		createDiv.id = "letter_"+(i+1); 
		wordContainer.appendChild(createDiv);
	}
}	
function checkLetter(letter) {
	var loop = true
	while (loop == true) {
		if (word.includes(letter)) {
			var idOfCurrent = document.getElementById("letter_"+(word.indexOf(letter)+1))
			idOfCurrent.innerHTML = letter
			word[word.indexOf(letter)] = "";
		}
		else {
			loop = false
		}
	}
}