const characterList = document.querySelector("#character-list");
const characterImage = document.querySelector(".character-image");

const apiUrl = "https://thronesapi.com/api/v2/Characters";

const loadCharacters = async () => {
  try {
    const response = await fetch(apiUrl);
    const characters = await response.json();

    characters.forEach((character, index) => {
      const option = document.createElement("option");
      option.value = String(index);
      option.textContent = character.fullName;
      characterList.appendChild(option);
    });

    const updateCharacterImage = (index) => {
      const selectedCharacter = characters[index];
      if (selectedCharacter) {
        characterImage.src = selectedCharacter.imageUrl;
        characterImage.alt = selectedCharacter.fullName;
      }
    };

    characterList.addEventListener("change", (event) => {
      updateCharacterImage(Number(event.target.value));
    });

    updateCharacterImage(0);
  } catch (error) {
    console.error(error);
  }
};

if (typeof document !== "undefined") {
  loadCharacters();
}