const bookArray = [];

function construtorBook(title, author, pages, statuss) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.statuss = statuss;
  this.info = `Book: ${title}, Author: ${author}, Pages: ${pages}, Status: ${statuss}`;
}

function addBookToLibrary(title, author, pages, statuss) {
  let book = new construtorBook(title, author, pages, statuss);
  bookArray.push(book);
}

// addBookToLibrary();
// addBookToLibrary();

const wrapperDiv = document.querySelector(".wrapper");

function addToDisplay() {
  bookArray.forEach((book) => {
    if (bookArray.length) {
      const displayBook = document.createElement("div");
      displayBook.setAttribute("id", "displayBook");
      displayBook.innerHTML = `<div id="${title}"><p id="title">Title: ${book.title}</p><p id="author">Author: ${book.author}</p><p id="pages">Pages: ${book.pages}</p><p id="statuss">Status: ${book.statuss}</p><br><button id="${title}">Delete</button></div>`;
      wrapperDiv.appendChild(displayBook);

      const deleteButton = document.getElementById(title);
      deleteButton.addEventListener("click", (book) => {
        console.log(bookArray);
        bookArray.splice(bookArray.indexOf(book), 1);
        console.log(bookArray);
        addToDisplay();
      });
    }
    else return;
  });
}

const dialog = document.querySelector("dialog");
const submitBtn = document.querySelector("#submit-btn");

let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let statuss = document.getElementById("status");

const btn = document.querySelector("#new-book");
btn.addEventListener("click", () => {
  dialog.showModal();
});

submitBtn.addEventListener("click", () => {
  addBookToLibrary(title.value, author.value, pages.value, statuss.value);
  wrapperDiv.innerHTML = "";

  title.value = "";
  author.value = "";
  pages.value = "";
  statuss.value = "";

  addToDisplay();

  dialog.close();
});


