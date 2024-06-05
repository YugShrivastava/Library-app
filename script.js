// function books(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function () {
//       return `${title} by ${author}, ${pages} pages, ${read}`;
//     };
//   }
//   const harryPotter = new books(
//     "Harry Potter",
//     "J. K. Rowling",
//     256,
//     "not read yet"
//   );
//   console.log(harryPotter.info());
const wrapperDiv = document.querySelector(".wrapper");
const bookArray = [];

function book(title, author, pages, read, thiss) {
  (thiss.title = title),
    (thiss.author = author),
    (thiss.pages = pages),
    (thiss.read = read),
    (thiss.info = function () {
      return `${title} by ${author}, ${pages} pages, ${read}`;
    });
}

// bookArray.push(
//   book("A Brief History Of Time", "Stephen Hawking", 256, "not read")
// );
// bookArray.push(book("The Shining", "Stephen King", 505, "read"));
// bookArray.push(book("Atomic Habits", "James Clear", 320, "reading"));

function addBookToLibrary() {
  let title = prompt("Title of the book: ");
  let author = prompt(`Author of ${title}: `);
  let pages = prompt(`Number of pages in ${title}: `);
  let read = prompt(`Have you read ${title} yet: `);

  let currBook = new book(title, author, pages, read, this);

  bookArray.push(currBook);
}

function addToDisplay(arr) {
  arr.forEach((book) => {
    const divDisplay = document.createElement("div");
    divDisplay.setAttribute("id", "bookDivs");
    divDisplay.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Status: ${book.read}`;
    wrapperDiv.appendChild(divDisplay);
  });
}

addBookToLibrary();
console.log(bookArray);
addToDisplay(bookArray);