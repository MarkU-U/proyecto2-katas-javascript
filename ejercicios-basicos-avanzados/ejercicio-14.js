// Ejercicio 14
{
	const words = [
		"code",
		"repeat",
		"eat",
		"sleep",
		"code",
		"enjoy",
		"sleep",
		"code",
		"enjoy",
		"sleep",
		"code",
	];

	function repeatCounter(list) {
		const repetitions = {};

		for (const word of list) {
			repetitions[word] = (repetitions[word] || 0) + 1;
		}

		return repetitions;
	}

	console.log(repeatCounter(words));
}