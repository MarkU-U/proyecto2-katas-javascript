// Ejercicio 35
{
	const mutants = [
		{ name: "Wolverine", power: "regeneration" },
		{ name: "Magneto", power: "magnetism" },
		{ name: "Professor X", power: "telepathy" },
		{ name: "Jean Grey", power: "telekinesis" },
		{ name: "Rogue", power: "power absorption" },
		{ name: "Storm", power: "weather manipulation" },
		{ name: "Mystique", power: "shape-shifting" },
		{ name: "Beast", power: "superhuman strength" },
		{ name: "Colossus", power: "steel skin" },
		{ name: "Nightcrawler", power: "teleportation" },
	];

	function findMutantByPower(mutantsList, power) {
		const foundMutants = [];
		for (const mutant of mutantsList) {
			if (mutant.power === power) {
				foundMutants.push(mutant);
			}
		}

		if (foundMutants.length > 0) {
			return `Mutante encontrado: ${foundMutants.map((mutant) => mutant.name).join(", ")}`;
		}

		return `No se encontró ningún mutante con el poder ${power}.`;
	}

	console.log(findMutantByPower(mutants, "telepathy"));
	console.log(findMutantByPower(mutants, "invisibility"));
}