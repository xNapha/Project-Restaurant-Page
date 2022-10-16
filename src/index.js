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

    document.body.append(header);
};

const createHome = () =>{
    const contentDiv = document.createElement("div")
    contentDiv.setAttribute("id", "content");
    for(let i=0; i<sectionArr.length; i++){
        createSection(sectionArr[i].type(),sectionArr[i].header(),sectionArr[i].para(), "img",contentDiv);
    }

    document.body.appendChild(contentDiv);
};

const createSection = (type,header,para,img,contentDiv) =>{
    const sectionDivCon = document.createElement("div");
    sectionDivCon.setAttribute("id", type);

    const sectionDivImg = document.createElement("img");
    sectionDivImg.setAttribute("class", "purposeImg");
    sectionDivImg.setAttribute("src", img+".png");

    const sectionDivWordCon = document.createElement("div");
    sectionDivWordCon.setAttribute("id",type+"TextCon");

    const sectionHead = document.createElement("h1");
    sectionHead.textContent = header;

    const sectionPara = document.createElement("p");
    sectionPara.textContent = para;


    sectionDivWordCon.append(sectionHead,sectionPara);

    sectionDivCon.append(sectionDivImg, sectionDivWordCon);

    contentDiv.append(sectionDivCon)
};

const removeContent = () => {
    document.getElementById("content").remove();
};


const sectionContent  = (t, h, p) => {
    const type = () => t;
    const header = () => h;
    const para = () => p;

    return {type, header, para}
};

const goal  = sectionContent("Goal", "Our Purpose","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
const team  = sectionContent("Team", "Meet the Team","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

let sectionArr = [goal, team];


createHeader();
createHome();


