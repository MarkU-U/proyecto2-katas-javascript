const button = document.createElement("button");
button.id = "btnToClick";
button.textContent = "Click me";
document.body.appendChild(button);

button.addEventListener("click", (event) => {
  console.log(event);
});

const focusInput = document.querySelector(".focus");
focusInput.addEventListener("focus", (event) => {
  console.log(event.target.value);
});

const valueInput = document.querySelector(".value");
valueInput.addEventListener("input", (event) => {
  console.log(event.target.value);
});