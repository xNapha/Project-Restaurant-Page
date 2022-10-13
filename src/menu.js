const createMenu = () => {
    const contentDiv = document.createElement("div")
    contentDiv.setAttribute("id", "content");
    createItem("1","para", contentDiv);
    createItem("2","para", contentDiv);
    createItem("3","para", contentDiv);

    document.body.append(contentDiv);
};

const createItem = (x,y,z) => {

    console.log("1")

    const itemCon = document.createElement("div");
    itemCon.setAttribute("id", x+"Con");
    console.log("2")

    const itemImgCon = document.createElement("div");
    itemImgCon.setAttribute("id", x+"ImgCon");
    console.log("3")

    const itemImg = document.createElement("img");
    itemImg.setAttribute("id", x+".png");
    console.log("4")

    const itemTextCon = document.createElement("div");
    itemTextCon.setAttribute("id", x+"TextCon");
    console.log("5")

    const itemTextHeader = document.createElement("h1");
    itemTextHeader.setAttribute("id", x+"TextHeader");
    itemTextHeader.textContent = x;
    console.log("6")

    const itemTextPara = document.createElement("p");
    itemTextPara.setAttribute("id", x+"TextPara");
    itemTextPara.textContent = y;
    console.log("7")

    itemTextCon.append(itemTextHeader, itemTextPara)
    console.log("8")

    itemImgCon.append(itemImg)
    console.log("9")

    itemCon.append(itemImgCon, itemTextCon);
    console.log("10")

    z.append(itemCon);
};

export {createMenu};