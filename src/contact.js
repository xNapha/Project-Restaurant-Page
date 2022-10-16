const createContact = () => {
    const contentDiv = document.createElement("div")
    contentDiv.setAttribute("id", "content");

    map(contentDiv);
    details(contentDiv);
    contactForm(contentDiv);

    

    document.body.appendChild(contentDiv);
};

const contactForm = (c) =>{
    const formCon = document.createElement("div");
    formCon.setAttribute("id", "formCon");
    const form = document.createElement("form");
    form.setAttribute("id", "contactForm")
    formCon.append(form);

    formSections("Name",form);
    formSections("Email",form);
    formSections("Subject",form);

    const commentSectionCon = document.createElement("div");
    commentSectionCon.setAttribute("id", "commentSectionCon");
    const commentSection = document.createElement("textArea");
    commentSection.setAttribute("id", "commentSection");
    commentSection.setAttribute("name", "feedback");
    commentSection.setAttribute("rows", "14");
    commentSection.setAttribute("cols", "100");

    const submitButtonCon = document.createElement("div");
    submitButtonCon.setAttribute("id", "submitButtonCon");
    const submitButton = document.createElement("button");
    submitButton.setAttribute("id", "submitButton");
    submitButton.setAttribute("type", "button")
    submitButton.setAttribute("value", "Submit")
    submitButton.textContent = "Submit";


    submitButtonCon.append(submitButton);
    commentSectionCon.append(commentSection);
    form.append(commentSectionCon,submitButtonCon);
    
    c.append(formCon);
};

const formSections = (t,f) => {
    const sectionCon = document.createElement("div");
    sectionCon.setAttribute("id", t+"Con");

    const sectionInput = document.createElement("input");
    sectionInput.setAttribute("id", t);
    sectionInput.setAttribute("type", "text");
    sectionInput.setAttribute("class", "inputField");
    sectionInput.setAttribute("name", t.toLowerCase());
    sectionInput.setAttribute("placeholder", t);
    sectionInput.setAttribute("required", "true");
    sectionInput.setAttribute("minlength", "1");

    sectionCon.append(sectionInput);
    f.append(sectionCon);
};

const details = (c) => {
    const detailsCon = document.createElement("div");
    detailsCon.setAttribute("id", "detailsCon");

    const addressCon = document.createElement("div");
    addressCon.setAttribute("id","addressCon");
    const address = document.createElement("div");
    address.setAttribute("id","address");
    const streetName = document.createElement("p");
    streetName.setAttribute("id", "streetName")
    const subrurbName = document.createElement("p");
    subrurbName.setAttribute("id", "subrurbName")
    const countryName = document.createElement("p");
    countryName.setAttribute("id", "countryName")
    streetName.textContent = "123 Placeholder Street,"
    subrurbName.textContent = "Placeholder 0000,"
    countryName.textContent = "Melbourne, VIC"
    
    address.append(streetName,subrurbName,countryName);

    const numberCon = document.createElement("div");
    numberCon.setAttribute("id", "numberCon");
    const number = document.createElement("p");
    number.setAttribute("id", "number");
    number.textContent = "0412 345 678"

    addressCon.append(address);
    numberCon.append(number);
    detailsCon.append(addressCon, numberCon);
    c.append(detailsCon);
};

const map = (c) =>{
    const locationCon = document.createElement("div");
    locationCon.setAttribute("id", "map");
    
    const iframe = document.createElement("iframe");
    iframe.setAttribute("height", "400px");
    iframe.setAttribute("width", "400px");
    iframe.setAttribute("allowfullscreen", "true");
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("src", "https://www.google.com/maps/embed/v1/place?key=AIzaSyATaCCAPbYWTfSDfkQlMTua29Tqslm2UI4&q=Melbourne+Central,Melbourne+VIC");
    
    locationCon.append(iframe);
    
    c.append(locationCon);
}



export { createContact };