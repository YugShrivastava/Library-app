
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

const bookArray = [];

function book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function () {return `${title} by ${author}, ${pages} pages, ${read}`};
}

function addBookToLibrary(){
    let title = prompt("Title of the book: ");
    let author = prompt(`Author of ${title}: `);
    let pages = prompt(`Number of pages in ${title}: `);
    let read = prompt(`Have you read ${title} yet: `);

    let currBook = new book(title, author, pages, read);

    bookArray.push(currBook);
}
