// Ejercicio 12
{
	const duplicates = [
		"sushi",
		"pizza",
		"burger",
		"potatoe",
		"pasta",
		"ice-cream",
		"pizza",
		"chicken",
		"onion rings",
		"pasta",
		"soda",
	];

	function removeDuplicates(list) {
		const uniqueValues = [];
		for (const item of list) {
			if (!uniqueValues.includes(item)) {
				uniqueValues.push(item);
			}
		}
		return uniqueValues;
	}

	console.log(removeDuplicates(duplicates));
}