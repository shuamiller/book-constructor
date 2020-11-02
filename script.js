let bookButton = document.getElementById('book-button');
let body = document.querySelector('body');

let cardsDiv = document.getElementById('cards-div');
let addBox = document.createElement('div');
let form = document.createElement('form');
let submitDiv = document.createElement('div');
let submitButton = document.createElement('input');
let titleInput = document.createElement('input');
let authorInput = document.createElement('input');
let pagesInput = document.createElement('input');
let yesRadio = document.createElement('input');
let noRadio = document.createElement('input');
let radios = document.getElementsByName('read-radio');

let theSicknessUntoDeath = {
    title: "The Sickness Unto Death",
    author: "Soren Kierkegaard",
    pages: 201,
    readStatus: "Yes"
}

let myLibrary = [theSicknessUntoDeath];

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.wasRead}`
    }
};

function createOverlay() {
    let overlay = document.createElement('div');
    overlay.setAttribute('id', 'overlay');
    body.appendChild(overlay);
    return overlay;
}

function createAddBox() {
    
    addBox.setAttribute('id', 'add-box');
    body.appendChild(addBox);
    return addBox;
}

function createForm() {
    
    addBox.appendChild(form);
    return form;
}

function createTitleComponent() {
    let titleDiv = document.createElement('div');
    titleDiv.setAttribute('id', 'title-div');
    titleDiv.setAttribute('class', 'input-div');
    let titleLabel = document.createElement('label');
    titleLabel.textContent = "Add a Book Title"
    titleLabel.setAttribute('for', 'title')
    titleLabel.setAttribute('id', 'title-label');
    titleLabel.setAttribute('class', 'input-label');
    
    titleInput.required = true;
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title-input');
    titleInput.setAttribute('class', 'text-input');
    titleInput.setAttribute('name', 'title');

    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(titleInput);
    form.appendChild(titleDiv);
    return titleInput;
}

function createAuthorComponent() {
    let authorDiv = document.createElement('div');
    authorDiv.setAttribute('id', 'author-div');
    authorDiv.setAttribute('class', 'input-div');
    let authorLabel = document.createElement('label');
    authorLabel.textContent = "Add a Book Author";
    authorLabel.setAttribute('for', 'author');
    authorLabel.setAttribute('id', 'author-label');
    authorLabel.setAttribute('class', 'input-label');
    
    authorInput.required = true;
    authorInput.setAttribute('type', 'text');
    authorInput.setAttribute('id', 'author-input');
    authorInput.setAttribute('class', 'text-input');
    authorInput.setAttribute('name', 'author');
    
    authorDiv.appendChild(authorLabel);
    authorDiv.appendChild(authorInput);
    form.appendChild(authorDiv);
    return authorInput;
}

function createPagesComponent() {
    let pagesDiv = document.createElement('div');
    pagesDiv.setAttribute('id', 'pages-div');
    pagesDiv.setAttribute('class', 'input-div');
    let pagesLabel = document.createElement('label');
    pagesLabel.textContent = "Add Page Count";
    pagesLabel.setAttribute('for', 'pages');
    pagesLabel.setAttribute('id', 'pages-label');
    pagesLabel.setAttribute('class', 'input-label');
    
    pagesInput.required = true;
    pagesInput.setAttribute('type', 'number');
    pagesInput.setAttribute('id', 'pages-input');
    pagesInput.setAttribute('class', 'text-input');
    pagesInput.setAttribute('name', 'pages');
    
    pagesDiv.appendChild(pagesLabel);
    pagesDiv.appendChild(pagesInput);
    form.appendChild(pagesDiv);

}

function createReadComponent() {
    let readDiv = document.createElement('div');
    readDiv.setAttribute('id', 'read-div');
    readDiv.setAttribute('class', 'input-div');
    let readLabel = document.createElement('label');
    readLabel.textContent = "Have You Read It?";
    readLabel.setAttribute('for', 'read');
    readLabel.setAttribute('id', 'read-label');
    readLabel.setAttribute('class', 'input-label');
    let yesDiv = document.createElement('div');
    yesDiv.setAttribute('id', 'yes-div');
    yesDiv.setAttribute('class', 'radio-div');
    
    yesRadio.setAttribute('type', 'radio');
    yesRadio.setAttribute('id', 'yes-radio');
    yesRadio.setAttribute('class', 'radio');
    yesRadio.setAttribute('name', 'read-radio');
    yesRadio.setAttribute('value', 'Yes')
    let yesLabel = document.createElement('label');
    yesLabel.setAttribute('for', 'yes');
    yesLabel.textContent = "Yes";
    yesDiv.appendChild(yesRadio);
    yesDiv.appendChild(yesLabel);
    let noDiv = document.createElement('div');
    noDiv.setAttribute('id', 'no-div');
    noDiv.setAttribute('class', 'radio-div');
    
    noRadio.setAttribute('type', 'radio');
    noRadio.setAttribute('id', 'no-radio');
    noRadio.setAttribute('class', 'radio');
    noRadio.setAttribute('name', 'read-radio');
    noRadio.setAttribute('value', 'No');
    let noLabel = document.createElement('label');
    noLabel.setAttribute('for', 'no');
    noLabel.textContent = "No";
    noDiv.appendChild(noRadio);
    noDiv.appendChild(noLabel);
    readDiv.appendChild(readLabel);
    readDiv.appendChild(yesDiv);
    readDiv.appendChild(noDiv);
    form.appendChild(readDiv);
    
}

function createSubmitComponent() {
    
    submitDiv.setAttribute('id', 'submit-div');
    
    submitButton.setAttribute('id', 'submit-button');
    submitButton.setAttribute('type', 'submit')
    submitButton.setAttribute('value', "Add Book");
    submitDiv.appendChild(submitButton);
    form.appendChild(submitDiv);
    
}

function checkRadio(radios) {
    for (let i = 0; i < 2; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
}

function createBookObject() {
    let titleValue = titleInput.value;
    let authorValue = authorInput.value;
    let pagesValue = pagesInput.value;
    let readValue = checkRadio(radios);
    let newBook = new Book(titleValue, authorValue, pagesValue, readValue);
    myLibrary.push(newBook);
    return newBook;
}

function createBookCard(book) {
    let bookCard = document.createElement('div');
    bookCard.setAttribute('class', 'book-card');
    let headingDiv = document.createElement('div');
    headingDiv.setAttribute('class', 'heading-div');
    let bookHeading = document.createElement('h2');
    bookHeading.setAttribute('class', 'book-heading');
    bookHeading.textContent = `${book.title}`;
    headingDiv.appendChild(bookHeading);
    let deleteDiv = document.createElement('div');
    deleteDiv.setAttribute('class', 'delete-div');
    let deleteButton = document.createElement('i');
    deleteButton.setAttribute('class', 'fas fa-trash-alt');
    deleteDiv.appendChild(deleteButton);
    headingDiv.appendChild(deleteDiv);
    bookCard.appendChild(headingDiv);
    let bookAuthor = document.createElement('p');
    bookAuthor.setAttribute('class', 'book-author');
    bookAuthor.textContent = `Author: ${book.author}`;
    bookCard.appendChild(bookAuthor);
    let bookPages = document.createElement('p');
    bookPages.setAttribute('class', 'book-pages');
    bookPages.textContent = `Page Count: ${book.pages}`;
    bookCard.appendChild(bookPages);
    let bookRead = document.createElement('p');
    bookRead.setAttribute('class', 'book-read');
    bookRead.textContent = `Finished: ${book.readStatus}`;
    bookCard.appendChild(bookRead);
    cardsDiv.appendChild(bookCard);
}

bookButton.addEventListener('click', function() {
    createOverlay();
    createAddBox();
    createForm();
    createTitleComponent();
    createAuthorComponent();
    createPagesComponent();
    createReadComponent();
    createSubmitComponent();
    submitButton.addEventListener('click', function() {
        
        
        createBookCard(createBookObject());
        body.removeChild(addBox);
        body.removeChild(overlay);
    })
})

for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
    createBookCard(myLibrary[i]);
}