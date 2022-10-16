const createMenu = () => {
    const contentDiv = document.createElement("div")
    contentDiv.setAttribute("id", "content");

    const menuHeaderCon = document.createElement("div");
    menuHeaderCon.setAttribute("id", "menuHeaderCon");

    const menuHeader = document.createElement("h1");
    menuHeader.textContent = "Top Sellers";
    menuHeaderCon.append(menuHeader);

    contentDiv.append(menuHeaderCon);

    for(let i=0; i<itemArr.length; i++){
        createItem(itemArr[i].name(),itemArr[i].description(), contentDiv);
    };

    document.body.append(contentDiv);
};

const createItem = (x,y,z) => {
    const itemCon = document.createElement("div");
    itemCon.setAttribute("id", x.split(" ").join("")+"Con");

    const itemImgCon = document.createElement("div");
    itemImgCon.setAttribute("id", x.split(" ").join("")+"ImgCon");

    const itemImg = document.createElement("img");
    itemImg.setAttribute("src", x.split(" ").join("")+".png");
    itemImg.setAttribute("class", "purposeImg");

    const itemTextCon = document.createElement("div");
    itemTextCon.setAttribute("id", x.split(" ").join("")+"TextCon");

    const itemTextHeader = document.createElement("h1");
    itemTextHeader.setAttribute("id", x.split(" ").join("")+"TextHeader");
    itemTextHeader.textContent = x;

    const itemTextPara = document.createElement("p");
    itemTextPara.setAttribute("id", x.split(" ").join("")+"TextPara");
    itemTextPara.textContent = y;

    itemTextCon.append(itemTextHeader, itemTextPara)

    itemImgCon.append(itemImg)

    itemCon.append(itemImgCon, itemTextCon);


    z.append(itemCon);
};

const menuItems = (n, d) => {
    const name = () => n;
    const description = () => d;

    return {name, description}
}

const first = menuItems("First Item", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
const second = menuItems("Second Item", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
const third = menuItems("Third Item", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
const fourth = menuItems("Fourth Item", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

let itemArr = [first, second, third,fourth];

export {createMenu};