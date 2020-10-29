let bookButton = document.getElementById('book-button');
let body = document.querySelector('body');
let cardsDiv = document.getElementById('cards-div');

let myLibrary = [theSicknessUntoDeath];

let theSicknessUntoDeath = {
    title = "The Sickness Unto Death",
    author = "Soren Kierkegaard",
    pages = 201,
    readStatus = "Yes"
}

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
}

function createAddBox() {
    let addBox = document.createElement('div');
    addBox.setAttribute('id', 'add-box');
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
    let titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title-input');
    titleInput.setAttribute('class', 'text-input');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('required');
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
    authorLabel.textContent("Add a Book Author");
    authorLabel.setAttribute('for', 'author');
    authorLabel.setAttribute('id', 'author-label');
    authorLabel.setAttribute('class', 'input-label');
    let authorInput = document.createElement('input');
    authorInput.setAttribute('type', 'text');
    authorInput.setAttribute('id', 'author-input');
    authorInput.setAttribute('class', 'text-input');
    authorInput.setAttribute('name', 'author');
    authorInput.setAttribute('required');
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
    pagesLabel.textContent("Add Page Count");
    pagesLabel.setAttribute('for', 'pages');
    pagesLabel.setAttribute('id', 'pages-label');
    pagesLabel.setAttribute('class', 'input-label');
    let pagesInput = document.createElement('input');
    pagesInput.setAttribute('type', 'number');
    pagesInput.setAttribute('id', 'pages-input');
    pagesInput.setAttribute('class', 'text-input');
    pagesInput.setAttribute('name', 'pages');
    pagesInput.setAttribute('required');
    pagesDiv.appendChild(pagesLabel);
    pagesDiv.appendChild(pagesInput);
    form.appendChild(pagesDiv);
    return pagesInput;
}

function createReadComponent() {
    let readDiv = document.createElement('div');
    readDiv.setAttribute('id', 'read-div');
    readDiv.setAttribute('class', 'input-div');
    let readLabel = document.createElement('label');
    readLabel.textContent("Have You Read It?");
    readLabel.setAttribute('for', 'read');
    readLabel.setAttribute('id', 'read-label');
    readLabel.setAttribute('class', 'input-label');
    let yesDiv = document.createElement('div');
    yesDiv.setAttribute('id', 'yes-div');
    yesDiv.setAttribute('class', 'radio-div');
    let yesRadio = document.createElement('input');
    yesRadio.setAttribute('type', 'radio');
    yesRadio.setAttribute('id', 'yes-radio');
    yesRadio.setAttribute('class', 'radio');
    yesRadio.setAttribute('name', 'read-radio');
    yesRadio.setAttribute('value', 'yes')
    let yesLabel = document.createElement('label');
    yesLabel.setAttribute('for', 'yes');
    yesLabel.textContent = "Yes";
    let noDiv = document.createElement('div');
    noDiv.setAttribute('id', 'no-div');
    noDiv.setAttribute('class', 'radio-div');
    let noRadio = document.createElement('input');
    noRadio.setAttribute('type', 'radio');
    noRadio.setAttribute('id', 'no-radio');
    noRadio.setAttribute('class', 'radio');
    noRadio.setAttribute('name', 'read-radio');
    let noLabel = document.createElement('label');
    noLabel.setAttribute('for', 'no');
    noLabel.textContent = "No";
    readDiv.appendChild(readLabel);
    readDiv.appendChild(yesDiv);
    readDiv.appendChild(noDiv);
    form.appendChild(readDiv);
    let radios = document.getElementsByName('read-radio');
    return radios;
}

function createSubmitComponent() {
    let submitDiv = document.createElement('div');
    submitDiv.setAttribute('id', 'submit-div');
    let submitButton = document.createElement('input');
    submitButton.setAttribute('id', 'submit-button');
    submitButton.setAttribute('type', 'submit')
    submitButton.setAttribute('value', "Add Book");
    submitDiv.appendChild(submitButton);
    form.appendChild(submitDiv);
    return submitButton;
}

function checkRadio(radios) {
    for (let i = 0; i < 2; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
}

function createBookObject() {
    let titleValue = titleInput.textContent;
    let authorValue = authorInput.textContent;
    let pagesValue = pagesInput.textContent;
    let readValue = checkRadio(radios);
    let newBook = new Book(titleValue, authorValue, pagesValue, readValue);
    return newBook;
}

function createBookCard() {
    let bookCard = document.createElement('div');
    bookCard.setAttribute('class', 'book-card');
    let bookHeading = document.createElement('h2');
    bookHeading.setAttribute('class', 'book-heading');
    bookHeading.textContent = newBook.title;
    bookCard.appendChild(bookHeading);
    let bookAuthor = document.createElement('p');
    bookAuthor.setAttribute('class', 'book-author');
    bookAuthor.textContent = `Author: ${newBook.author}`;
    bookCard.appendChild(bookAuthor);
    let bookPages = document.createElement('p');
    bookPages.setAttribute('class', 'book-pages');
    bookPages.textContent = `Page Count: ${newBook.pages}`;
    bookCard.appendChild(bookPages);
    let bookRead = document.createElement('p');
    bookRead.setAttribute('class', 'book-read');
    bookRead.textContent = `Finished: ${newBook.readStatus}`
}

bookButton.addEventListener(function() {
    createOverlay();
    createAddBox();
    let form = document.createElement('form');
    createTitleComponent();
    createAuthorComponent();
    createPagesComponent();
    createReadComponent();
    createSubmitComponent();
    submitButton.addEventListener(function() {
        createBookObject();
        
    })
})

function addBookToLibrary() {

}