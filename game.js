var Game = {
	words: ["dog", "cat", "cow", "giraffe", "rhino"],
	random: function() {
		let choose = this.words[Math.floor(Math.random() * this.words.length)];
		gameWord = choose.toUpperCase();
		// console.log(gameWord);
		return gameWord;
	}
};

module.exports = Game;