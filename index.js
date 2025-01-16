let  myLibrary = [];

function Book(name, author, pages, isRead) {
    this.title = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.status = function (){
    if (this.isRead) return "Read";
        else return "Not Read Yet";
}

function addBookToLibrary(bookObj) {
    myLibrary.push(bookObj);
    // console.log(myLibrary);
}

const TheHobbit = new Book("The Hobbit", "J.R.D Tata", 295, false);
const HarryPotter = new Book("HarryPotter", "J.K. Rowling", 369, true);

addBookToLibrary(TheHobbit);
addBookToLibrary(HarryPotter);

function makeBookCard(bookObj, index) {
    const cards = document.createElement("div");
    cards.classList.add("cards");
    cards.innerHTML = `<h3>${bookObj.title}</h3>
        <p>Author: <span>${bookObj.author}</span></p>
        <p>Pages: <span>${bookObj.pages}</span></p>
        <p>Status: <span>${bookObj.status()}</span></p>
        <button class="toggle-status" data-index=${index}>Toggle Status</button>
        <button class="delete" data-index="${index}">Delete</button>`
        bookObj.index = index;

    return cards;
}

const body = document.querySelector('#body');

function displayLibrary() {
    body.innerHTML = '';
    myLibrary.forEach((book, index) => {
        card = makeBookCard(book, index);
        body.appendChild(card);
    });
    document.querySelectorAll('.delete').forEach(element => {
        element.addEventListener('click', deleteBook);
    });
    document.querySelectorAll('.toggle-status').forEach(element => {
        element.addEventListener('click', toggleStatus);
    })
}

displayLibrary();

const dialog = document.querySelector('dialog');
dialog.close();

function toggleStatus(e){
    bookObj = myLibrary.find(currObj => currObj.index == e.target.dataset.index);

    // if(isRead === true) bookObj.status = 'Not Read Yet';
    // else bookObj.status = 'Read';
    // console.log(bookObj.isRead);
    bookObj.isRead = !bookObj.isRead;
    // console.log(bookObj.isRead);
     
    displayLibrary();
}

function subPreDef(e){
    e.preventDefault();
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const status = document.getElementById('status');
    const isRead = status.value === 'true';
    const book = new Book(title.value, author.value, pages.value, isRead);
    // console.log(book);
    addBookToLibrary(book);
    displayLibrary();
    dialogReset();   
    dialog.close();
}

function dialogReset(){
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const isRead = document.getElementById('status');

    title.value = '';
    author.value = '';
    pages.value = '';
    isRead.value = 'false';
}

function newBook(){
    dialog.showModal();
}
document.querySelector('#button').addEventListener('click', newBook);
document.querySelector('#submit').addEventListener('click', subPreDef, false);
// body.addEventListener('keydown', newBook);

function deleteBook(e){
    // console.log(e.target.dataset.index);
    myLibrary = myLibrary.filter(book => book.index != e.target.dataset.index);
    displayLibrary();
}

