const createContact = () => {
    const contentCon = document.createElement("div");
    contentCon.setAttribute("id","contentCon");


    const content = document.createElement("div")
    content.setAttribute("id", "content");
    content.setAttribute("class","contactContent")

    map(content);
    details(content);
    contactForm(content);

    contentCon.append(content);

    document.body.appendChild(contentCon);
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
    commentSection.setAttribute("placeholder", "Enter your comments here...");


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

    const openingTimesCon = document.createElement("div");
    openingTimesCon.setAttribute("id","openingTimesCon");
    const openingTimes = document.createElement("div");
    openingTimes.setAttribute("id","openingTimes");
    const head = document.createElement("p");
    head.setAttribute("id", "head")
    const weekdays = document.createElement("p");
    weekdays.setAttribute("id", "subrurbName")
    const weekends = document.createElement("p");
    weekends.setAttribute("id", "countryName")
    head.textContent = "Opening Hours:"
    weekdays.textContent = "Weekdays: 8 AM - 9PM"
    weekends.textContent = "Weekends: 8 AM - 11PM"
    
    openingTimes.append(head,weekdays,weekends);

    const numberCon = document.createElement("div");
    numberCon.setAttribute("id", "numberCon");
    const number = document.createElement("p");
    number.setAttribute("id", "number");
    number.textContent = "0412 345 678"

    openingTimesCon.append(openingTimes);
    numberCon.append(number);
    detailsCon.append(openingTimesCon, numberCon);
    c.append(detailsCon);
};

const map = (c) =>{
    const locationCon = document.createElement("div");
    locationCon.setAttribute("id", "locationCon");
    
    const iframe = document.createElement("iframe");
    iframe.setAttribute("height", "450rem");
    iframe.setAttribute("width", "450rem");
    iframe.setAttribute("allowfullscreen", "true");
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("src", "https://www.google.com/maps/embed/v1/place?key=AIzaSyATaCCAPbYWTfSDfkQlMTua29Tqslm2UI4&q=Melbourne+Central,Melbourne+VIC");
    
    locationCon.append(iframe);
    
    c.append(locationCon);
}



export { createContact };