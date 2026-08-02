const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];
console.log(pointsListCopy);

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyCopy = { ...toy };
console.log(toyCopy);

const pointsLis2 = [54, 87, 99, 65, 32];
const mergedPoints = [...pointsList, ...pointsLis2];
console.log(mergedPoints);

const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };
const mergedToy = { ...toy, ...toyUpdate };
console.log(mergedToy);

const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];
const colorsCopyWithoutThird = [...colors.slice(0, 2), ...colors.slice(3)];
console.log(colorsCopyWithoutThird);