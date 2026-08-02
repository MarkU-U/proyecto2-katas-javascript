const body = document.body;

const emptyDiv = document.createElement("div");
body.appendChild(emptyDiv);

const divWithParagraph = document.createElement("div");
const paragraphInsideDiv = document.createElement("p");
divWithParagraph.appendChild(paragraphInsideDiv);
body.appendChild(divWithParagraph);

const divWithSixParagraphs = document.createElement("div");
for (let i = 0; i < 6; i += 1) {
  const paragraph = document.createElement("p");
  divWithSixParagraphs.appendChild(paragraph);
}
body.appendChild(divWithSixParagraphs);

const dynamicParagraph = document.createElement("p");
dynamicParagraph.textContent = "Soy dinámico!";
body.appendChild(dynamicParagraph);

const insertHereHeading = document.querySelector("h2.fn-insert-here");
insertHereHeading.textContent = "Wubba Lubba dub dub";

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const appList = document.createElement("ul");
for (const app of apps) {
  const listItem = document.createElement("li");
  listItem.textContent = app;
  appList.appendChild(listItem);
}
body.appendChild(appList);

const removableNodes = document.querySelectorAll(".fn-remove-me");
for (const node of removableNodes) {
  node.remove();
}

const middleParagraph = document.createElement("p");
middleParagraph.textContent = "Voy en medio!";
const divs = document.querySelectorAll("body > div");
body.insertBefore(middleParagraph, divs[1]);

const insertionTargets = document.querySelectorAll("div.fn-insert-here");
for (const target of insertionTargets) {
  const paragraph = document.createElement("p");
  paragraph.textContent = "Voy dentro!";
  target.appendChild(paragraph);
}