for (let i =0; i < wordSplit.length; i++) {
	switch (guess) {
		case guess == wordSplit[i]:
			console.log("correct");
			break;
		default:
			console.log("nope");
	}
}