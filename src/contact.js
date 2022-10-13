const createContact = () => {
    const contentDiv = document.createElement("div")
    contentDiv.setAttribute("id", "content");


    document.body.appendChild(contentDiv);
};

export { createContact };