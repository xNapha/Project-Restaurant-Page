import "./style.css";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";

const createHeader = () => {
    const header = document.createElement("header");

    const imgDiv = document.createElement("div");

    const img = document.createElement("img");
    img.setAttribute("class", "logo");

    imgDiv.append(img);

    const uL = document.createElement("ul");

    const home = document.createElement("li");
    home.textContent="Home";
    home.addEventListener("click", ()=>{
        removeContent();
        createHome();
    });

    const menu = document.createElement("li");
    menu.textContent="Menu";
    menu.addEventListener("click", ()=>{
        removeContent();
        createMenu();
    });

    const contact = document.createElement("li");
    contact.textContent = "Contact"
    contact.addEventListener("click", ()=>{
        removeContent();
        createContact();
    });


    uL.append(home, menu, contact);
    header.append(imgDiv,uL);

    document.body.appendChild(header);
};

const createHome = () =>{
    const contentDiv = document.createElement("div")
    contentDiv.setAttribute("id", "content");

    const purposeDivCon = document.createElement("div");
    purposeDivCon.setAttribute("id", "purpose");

    const purposeDivImg = document.createElement("img");
    purposeDivImg.setAttribute("class", "purposeImg");

    const purposeDivWordCon =document.createElement("div");
    purposeDivWordCon.setAttribute("id","purposeTextCon");
    const purposeHead = document.createElement("h1");

    purposeHead.textContent = "Our Mission";

    const purposePara = document.createElement("p");
    purposePara.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


    purposeDivWordCon.append(purposeHead,purposePara);

    purposeDivCon.append(purposeDivImg, purposeDivWordCon);

    const teamDivCon = document.createElement("div");

    const teamDivImg = document.createElement("img");
    teamDivImg.setAttribute("class", "purposeImg");

    const teamDivWordCon = document.createElement("div");
    teamDivWordCon.setAttribute("id","teamTextCon");
    const teamHead = document.createElement("h1");

    teamHead.textContent = "Meet the team";

    const teamPara = document.createElement("p");
    teamPara.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


    teamDivWordCon.append(teamHead,teamPara);

    teamDivCon.append(teamDivImg, teamDivWordCon);


    contentDiv.append(purposeDivCon, teamDivCon);
    document.body.appendChild(contentDiv);
};

const removeContent = () =>{
    document.getElementById("content").remove();
};


createHeader();
createHome();


