// Ejercicio 13
{
	const names = [
		"Peter",
		"Steve",
		"Tony",
		"Natasha",
		"Clint",
		"Logan",
		"Xabier",
		"Bruce",
		"Peggy",
		"Jessica",
		"Marc",
	];

	function nameFinder(nameList, nameToFind) {
		const index = nameList.indexOf(nameToFind);
		if (index !== -1) {
			return [true, index];
		}
		return false;
	}

	console.log(nameFinder(names, "Logan"));
	console.log(nameFinder(names, "Wanda"));
}