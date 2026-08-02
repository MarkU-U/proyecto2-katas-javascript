const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const albumsList = document.querySelector("#albums-list");

albums.forEach((album, index) => {
  const item = document.createElement("li");
  item.className = "album-item";

  const badge = document.createElement("span");
  badge.className = "album-index";
  badge.textContent = String(index + 1).padStart(2, "0");

  const name = document.createElement("span");
  name.className = "album-name";
  name.textContent = album;

  item.appendChild(badge);
  item.appendChild(name);
  albumsList.appendChild(item);
});