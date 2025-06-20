export const div = document.createElement("div");
div.setAttribute("id", "content");

const divTopCard = document.createElement("div");
divTopCard.classList.add("top-card");

const h2 = document.createElement("h2");
h2.textContent = "Have a look at our";

const h1 = document.createElement("h1");
h1.textContent = "MENU";

const buttonOne = document.createElement("button");
buttonOne.textContent = "Download the Menu"
divTopCard.appendChild(h2);
divTopCard.appendChild(h1);
divTopCard.appendChild(buttonOne);

div.style.background = "#faf2f7";
div.style.background = "radial-gradient(circle, rgb(18, 12, 4) 0%, rgb(0, 0, 0) 100%)";

div.appendChild(divTopCard);