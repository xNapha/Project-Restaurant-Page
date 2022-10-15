const createMenu = () => {
    const contentDiv = document.createElement("div")
    contentDiv.setAttribute("id", "content");
    createItem("1","para", contentDiv);
    createItem("2","para", contentDiv);
    createItem("3","para", contentDiv);

    document.body.append(contentDiv);
};

const createItem = (x,y,z) => {
    const itemCon = document.createElement("div");
    itemCon.setAttribute("id", x+"Con");

    const itemImgCon = document.createElement("div");
    itemImgCon.setAttribute("id", x+"ImgCon");

    const itemImg = document.createElement("img");
    itemImg.setAttribute("id", x+".png");

    const itemTextCon = document.createElement("div");
    itemTextCon.setAttribute("id", x+"TextCon");

    const itemTextHeader = document.createElement("h1");
    itemTextHeader.setAttribute("id", x+"TextHeader");
    itemTextHeader.textContent = x;

    const itemTextPara = document.createElement("p");
    itemTextPara.setAttribute("id", x+"TextPara");
    itemTextPara.textContent = y;

    itemTextCon.append(itemTextHeader, itemTextPara)

    itemImgCon.append(itemImg)

    itemCon.append(itemImgCon, itemTextCon);


    z.append(itemCon);
};

export {createMenu};