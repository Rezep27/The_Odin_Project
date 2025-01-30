const container = document.querySelector(".main-container");

const firstP = document.createElement("p");
firstP.style.color = "red";
firstP.textContent = "Hey I'm red!";

container.appendChild(firstP);

const titleH3 = document.createElement("h3");
titleH3.style.color = "blue";
titleH3.textContent = "I'm a blue H3";

container.appendChild(titleH3);

const secondContainer = document.createElement("div");
secondContainer.setAttribute("style", "border: 3px solid black; background-color: pink")


const titleH1 = document.createElement("h1");
titleH1.textContent = "I'm in a div";
secondContainer.appendChild(titleH1);

const secondP = document.createElement("p");
secondP.textContent = "ME TOO!";
secondContainer.appendChild(secondP);

container.appendChild(secondContainer);