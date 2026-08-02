const randomImage = document.querySelector(".random-image");

const getRandomPokemonImage = async () => {
  const randomId = Math.floor(Math.random() * 151) + 1;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  const pokemon = await response.json();

  const imageUrl =
    pokemon.sprites.other["official-artwork"].front_default ||
    pokemon.sprites.front_default ||
    pokemon.sprites.other.home.front_default;

  randomImage.src = imageUrl;
  randomImage.alt = pokemon.name;
};

if (typeof document !== "undefined") {
  getRandomPokemonImage();
}