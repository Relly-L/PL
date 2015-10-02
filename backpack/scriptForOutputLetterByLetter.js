var outputText = "Text for output";		//текст вывода

var currentPosition = 0;
var div = $('#location');                //цель скрипта
var interval = setInterval(function() {
	div.html(div.html() + outputText[currentPosition]);
	currentPosition++;
	if (currentPosition === outputText.length) {
		clearInterval(interval);
		currentPosition = 0;
	}
}, 1);