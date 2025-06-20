import "./styles.css";
import {div as homeContent} from "./homeContent.js";
import {div as menuContent} from "./menuContent.js";
import {div as aboutContent} from "./aboutContent.js";

document.addEventListener("DOMContentLoaded",function (){
    addContent(homeContent)

    const homeButton = document.querySelector("#home-button");
    homeButton.addEventListener("click", () => addContent(homeContent));

    const menuButton = document.querySelector("#menu-button");
    menuButton.addEventListener("click", () => addContent(menuContent));

    const aboutButton = document.querySelector("#about-button");
    aboutButton.addEventListener("click", () => addContent(aboutContent));


    function addContent (content){
        const oldContentDiv = document.querySelector("#content");
        if (oldContentDiv){
            oldContentDiv.remove();
        }
        document.body.appendChild(content);
    }

});