const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const countriesList = document.createElement("ul");

for (const country of countries) {
  const listItem = document.createElement("li");
  listItem.textContent = country;
  countriesList.appendChild(listItem);
}

document.body.appendChild(countriesList);

const removableParagraph = document.querySelector(".fn-remove-me");
if (removableParagraph) {
  removableParagraph.remove();
}

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const printHere = document.querySelector('[data-function="printHere"]');
const carsList = document.createElement("ul");

for (const car of cars) {
  const listItem = document.createElement("li");
  listItem.textContent = car;
  carsList.appendChild(listItem);
}

printHere.appendChild(carsList);

const countriesCards = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const cardsContainer = document.createElement("section");
cardsContainer.className = "cards-container";

for (const countryCard of countriesCards) {
  const card = document.createElement("div");
  const title = document.createElement("h4");
  const image = document.createElement("img");
  const removeButton = document.createElement("button");

  title.textContent = countryCard.title;
  image.src = countryCard.imgUrl;
  image.alt = countryCard.title;
  removeButton.textContent = "Eliminar";

  removeButton.addEventListener("click", () => {
    card.remove();
  });

  card.appendChild(title);
  card.appendChild(image);
  card.appendChild(removeButton);
  cardsContainer.appendChild(card);
}

document.body.appendChild(cardsContainer);

const removeLastButton = document.createElement("button");
removeLastButton.textContent = "Eliminar último elemento";
removeLastButton.addEventListener("click", () => {
  const cards = cardsContainer.querySelectorAll("div");
  if (cards.length > 0) {
    cards[cards.length - 1].remove();
  }
});

document.body.insertBefore(removeLastButton, cardsContainer);