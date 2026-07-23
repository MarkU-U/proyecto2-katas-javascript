// Ejercicio 8
{
	const avengers = ["Hulk", "Thor", "Iron Man", "Captain A.", "Spiderman", "Captain M."];

	function findLongestWord(stringList) {
		if (stringList.length === 0) {
			return "";
		}

		let longestWord = stringList[0];
		for (const word of stringList) {
			if (word.length > longestWord.length) {
				longestWord = word;
			}
		}
		return longestWord;
	}

	console.log(findLongestWord(avengers));
}