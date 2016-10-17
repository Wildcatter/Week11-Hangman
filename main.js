var prompt = require("prompt");
prompt.start();

var game = require("./game.js");
var letter = require("./letter.js");
//var word = require("./word.js");
var dashArray = [];
var guessArray = []; 
var guessesLeft = 3;
var correctGuesses = 0;
var totalRightGuesses;

//game.random();
//letter(gameWord);

//console.log(wordSplit);
//console.log(gameWord);
//console.log(game.random());

prompt.get(['ready'], function (err, result) {
	if (result.ready == 'Y') {
		startGame();
	} else {
		console.log('idiot');
	}
});

function startGame () {
	game.random();
	letter(gameWord);
	console.log(wordSplit);
	console.log(gameWord);
	totalRightGuesses = wordSplit.length;
	
	guessStuff();
};

function guessStuff () {
	prompt.get(['userGuess'], function (err, result) {
		//console.log(result.userGuess);
		//console.log(wordSplit);
		//console.log(gameWord);
		var guess = result.userGuess;
		guessArray.push(guess);
		var correctGuess = false;
		console.log(guess);
		for (let i =0; i < wordSplit.length; i++) {
			if (guess == wordSplit[i]) {
				correctGuess = true;
			}		
		}
		console.log(correctGuess);

		if (correctGuess) {
			console.log("correct!");
			correctGuesses += 1;
			if (correctGuesses == totalRightGuesses) {
				console.log("you win!");
			}
		} else{
			guessesLeft -= 1;
			console.log('you suck')
			if (guessesLeft == 0) {
				console.log("DATS GAME");
			}
		}


		console.log(correctGuesses);
		console.log(guessesLeft);
		console.log(guessArray);
		guessStuff();

	});	
};