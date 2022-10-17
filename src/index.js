import "./style.css";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";

const createHeader = () => {
    const headerCon = document.createElement("div");
    headerCon.setAttribute("id","headerCon");
    const header = document.createElement("header");

    const imgDiv = document.createElement("div");
    imgDiv.setAttribute("id","imgDiv")

    const img = document.createElement("img");
    img.setAttribute("id", "logo");

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
    headerCon.append(header)
    document.body.append(headerCon);
};

const createHome = () =>{
    const contentCon = document.createElement("div");
    contentCon.setAttribute("id", "contentCon");

    const content = document.createElement("div")
    content.setAttribute("id", "content");
    for(let i=0; i<sectionArr.length; i++){
        createSection(sectionArr[i].type(),sectionArr[i].header(),sectionArr[i].para(), "img",content);
    }
    contentCon.append(content)
    document.body.appendChild(contentCon);
};

const createSection = (type,header,para,img,content) =>{
    const sectionDivCon = document.createElement("div");
    sectionDivCon.setAttribute("id", type.toLowerCase());
    sectionDivCon.setAttribute("class", "sections");

    const sectionDivImg = document.createElement("img");
    sectionDivImg.setAttribute("class", "sectionImg");
    sectionDivImg.setAttribute("src", img+".png");

    const sectionDivWordCon = document.createElement("div");
    sectionDivWordCon.setAttribute("id",type.toLowerCase()+"TextCon");
    sectionDivWordCon.setAttribute("class","textCon");

    const sectionHead = document.createElement("h1");
    sectionHead.textContent = header;

    const sectionPara = document.createElement("p");
    sectionPara.textContent = para;


    sectionDivWordCon.append(sectionHead,sectionPara);

    sectionDivCon.append(sectionDivImg, sectionDivWordCon);

    content.append(sectionDivCon)
};

const removeContent = () => {
    document.getElementById("contentCon").remove();
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


