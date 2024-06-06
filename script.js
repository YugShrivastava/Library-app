const bookArray = [];

function construtorBook(title, author, pages, statuss){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.statuss = statuss;
  this.info = `Book: ${title}, Author: ${author}, Pages: ${pages}, Status: ${statuss}`;
}

function addBookToLibrary(){
 let title = prompt("Enter the title of the book: ");
 let author = prompt(`Who is the author of ${title}?`);
 let pages = prompt(`How many pages are there in ${title}?`);
 let status = prompt(`Have you read ${title}?`)

let book = new construtorBook(title, author, pages, status);

bookArray.push(book);
}

// addBookToLibrary();
// addBookToLibrary();

const wrapperDiv = document.querySelector(".wrapper");

function addToDisplay(){
  bookArray.forEach((book) => {
    const displayBook = document.createElement("div");
    displayBook.setAttribute("id", "displayBook");
    displayBook.innerHTML = `<p id="title">Title: ${book.title}</p><p id="author">Author: ${book.author}</p><p id="pages">Pages: ${book.pages}</p><p id="statuss">Status: ${book.statuss}</p>`;
    wrapperDiv.appendChild(displayBook);
  })
}

const btn = document.querySelector("#new-book")
btn.addEventListener("click", () =>{
  addBookToLibrary();
  wrapperDiv.innerHTML = "";
  addToDisplay();
})
