const createMenu = () => {
    const contentCon = document.createElement("div");
    contentCon.setAttribute("id","contentCon");

    const content = document.createElement("div");
    content.setAttribute("id", "content");
    content.setAttribute("class", "menuContent");

    const menuHeaderCon = document.createElement("div");
    menuHeaderCon.setAttribute("id", "menuHeaderCon");

    const menuHeader = document.createElement("h1");
    menuHeader.textContent = "Top Sellers";
    menuHeaderCon.append(menuHeader);

    content.append(menuHeaderCon);

    for(let i=0; i<itemArr.length; i++){
        createItem(itemArr[i].name(),itemArr[i].description(), content);
    };
    contentCon.append(content);
    document.body.append(contentCon);
};

const createItem = (x,y,z) => {
    const itemCon = document.createElement("div");
    itemCon.setAttribute("id", x.split(" ").join("")+"Con");
    itemCon.setAttribute("class", "itemCon");

    const itemImgCon = document.createElement("div");
    itemImgCon.setAttribute("id", x.split(" ").join("")+"ImgCon");
    itemImgCon.setAttribute("class", "itemImgCon");

    const itemImg = document.createElement("img");
    itemImg.setAttribute("src", x.split(" ").join("")+".png");
    itemImg.setAttribute("class", "itemImg");

    const itemTextCon = document.createElement("div");
    itemTextCon.setAttribute("id", x.split(" ").join("")+"TextCon");
    itemTextCon.setAttribute("class", "itemTextCon");

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
const fifth = menuItems("Fifth Item", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
const sixth = menuItems("Sixth Item", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
const seventh= menuItems("Seventh Item", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
const eighth = menuItems("Eighth Item", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
const nineth = menuItems("Nineth Item", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

let itemArr = [first, second, third,fourth, fifth, sixth, seventh, eighth, nineth];

export {createMenu};