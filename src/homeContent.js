import greekimage from "./greek-bg.jpeg";
const bgGreek = document.createElement("img");
bgGreek.src = greekimage;

export const div = document.createElement("div");
div.setAttribute("id", "content");

const divTopCard = document.createElement("div");
divTopCard.classList.add("top-card");

const h2 = document.createElement("h2");
h2.textContent = "Oldest restaurant in woolwich";

const h1 = document.createElement("h1");
h1.textContent = "The pooksters";

const buttonOne = document.createElement("button");
buttonOne.textContent = "Book a Table"
divTopCard.appendChild(h2);
divTopCard.appendChild(h1);
divTopCard.appendChild(buttonOne);

div.style.background = "url('"+[greekimage]+"')"
div.style.backgroundSize = "cover";

div.style.boxShadow= "0px 4px 4px 0px #00000040,inset 0 0 0 1000px rgba(0,0,0,.5)"

div.appendChild(divTopCard);