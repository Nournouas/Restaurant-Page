import poopcake from "./cake.jpg";
export const div = document.createElement("div");
div.setAttribute("id", "content");

const divTopCard = document.createElement("div");
divTopCard.classList.add("top-card");


const h2 = document.createElement("h2");
h2.textContent = "Who are we?";

const h1 = document.createElement("h1");
h1.textContent = "OUR STORY";

const img = document.createElement("img")
img.src = poopcake;

const p = document.createElement("p");
p.textContent = "Welcome to The Pooksters – where love is baked into every slice. We’re just two people: me and my Pookie. No big kitchen teams. No corporate nonsense. Just the two of us, elbow-deep in cream cheese, graham cracker crumbs, and dreams. It all started in our little kitchen, making cheesecake late into the night – sometimes for fun, sometimes because we couldn’t stop taste-testing. What began as a sweet hobby turned into a full-blown obsession... and now, a cheesecake haven for everyone who walks through our doors. At The Pooksters, we don’t just make cheesecake – we live cheesecake. Classic New York-style? Got it. Salted caramel swirls? You bet. Experimental flavors like matcha mango or blueberry basil? We go there. And yes, we always argue over whose batch is better (Pookie usually wins). So if you’re looking for that perfect bite, made with real ingredients and real love – pull up a chair, loosen your belt, and welcome to the family. Love, The Pooksters"

divTopCard.appendChild(h2);
divTopCard.appendChild(h1);
divTopCard.appendChild(img);
divTopCard.appendChild(p)

div.style.boxShadow= "0px 4px 4px 0px #00000040,inset 0 0 0 1000px rgba(0, 0, 0, 0.49)"

div.appendChild(divTopCard);
