const bookArray = [];

function construtorBook(title, author, pages, statuss){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.statuss = statuss;
  this.info = `Book: ${title}, Author: ${author}, Pages: ${pages}, Status: ${statuss}`;
}

function addBookToLibrary(title, author, pages, statuss){

let book = new construtorBook(title, author, pages, statuss);

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


const dialog = document.querySelector("dialog");
const submitBtn = document.querySelector("#submit-btn");

const btn = document.querySelector("#new-book")
btn.addEventListener("click", () =>{
  dialog.showModal();
})
submitBtn.addEventListener("click", (book) => {
  let title = document.querySelector("#title");
  let auhtor = document.querySelector("#author");
  let pages = document.querySelector("#pages");
  let status = document.querySelector("#status");

  console.log(title.value, auhtor.value, pages.value, status.value);
  addBookToLibrary(title.value, auhtor.value, pages.value, status.value);
  wrapperDiv.innerHTML = "";
  addToDisplay();
  title.value = "";
  auhtor.value = "";
  pages.value = "";
  status.value = "";
  dialog.close();
})