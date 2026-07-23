// Ejercicio 40
{
	function findArrayIndex(array, text) {
		for (let i = 0; i < array.length; i += 1) {
			if (array[i] === text) {
				return i;
			}
		}
		return -1;
	}

	const mainCharacters = ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"];

	function removeItem(array, text) {
		const index = findArrayIndex(array, text);
		if (index !== -1) {
			array.splice(index, 1);
		}
		return array;
	}

	console.log(findArrayIndex(mainCharacters, "Rey"));
	console.log(findArrayIndex(mainCharacters, "Yoda"));
	console.log(removeItem([...mainCharacters], "Han Solo"));
}