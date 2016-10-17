function Letter(gameWord) {
	var dashArray = [];
	wordSplit = gameWord.split("");
	let loopz = this.wordSplit.forEach(function(let) {
		dashArray.push("_");
		//correctGuesses = dashArray.length;
	})

	console.log(dashArray);
};

module.exports = Letter;