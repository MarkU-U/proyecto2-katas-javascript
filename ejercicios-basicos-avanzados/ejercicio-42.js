// Ejercicio 42
{
	const fantasticFour = [
		"La antorcha humana",
		"Mr. Fantástico",
		"La mujer invisible",
		"La cosa",
	];

	function swap(array, indexOne, indexTwo) {
		const copy = [...array];
		const temp = copy[indexOne];
		copy[indexOne] = copy[indexTwo];
		copy[indexTwo] = temp;
		return copy;
	}

	console.log(swap(fantasticFour, 0, 3));
}