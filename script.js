//https://rfod.github.io/Library/

const libraryArray = [];
const wrapperDiv = document.querySelector(".wrapperDiv");
let deleteIndex;
let indexOfBook = 1;

function libraryConstructor() {
  this.title = "";
  this.author = "";
  this.pages = "";
  this.status = "";
  this.index = "";
}

function addBookToLibrary() {
  const book = new libraryConstructor();
  book.title = prompt("Title: ");
  book.author = prompt("Author: ");
  book.pages = prompt("Pages: ");
  book.status = prompt("Status: ");
  book.index = indexOfBook;
  indexOfBook++;

  appendToLibrary(book);
}

function appendToLibrary(object) {
  libraryArray.push(object);

  addToDisplay(
    object.title,
    object.author,
    object.pages,
    object.status,
    object.index
  );
}

function addToDisplay(title, author, pages, status, index) {
  const bookDiv = document.createElement("div");
  bookDiv.setAttribute("id", index);
  bookDiv.setAttribute("class", "book");
  bookDiv.innerHTML = `
     <p id="title"><pre>Title:  ${title}</pre></p>
     <p id="author"><pre>Author: ${author}</pre></p>
     <p id="pages"><pre>Pages:  ${pages}</pre></p>
     <p id="status"><pre>Status: ${status}</pre></p>
     <button id="${index}">Delete</button>`;

  wrapperDiv.appendChild(bookDiv);
  deleteButton = document.getElementById(index);
  deleteButton.addEventListener("click", () => removeObject(index));
}

// addBookToLibrary();
const newBookBtn = document.querySelector("#new-book");
newBookBtn.addEventListener("click", () => addBookToLibrary());

function removeObject(id) {
  // console.log("id = ", id);

  libraryArray.forEach((obj) => {
    if (obj.index == id) libraryArray.splice(libraryArray.indexOf(obj), 1);
    // console.log(obj.index, id)
    // console.log(libraryArray);
    wrapperDiv.innerHTML = "";
    addAllBooksToDisplay();
  });
}

function addAllBooksToDisplay() {
  libraryArray.forEach((book) => {
    addToDisplay(book.title, book.author, book.pages, book.status, book.index);
    // console.log(book.index);
  });
}
