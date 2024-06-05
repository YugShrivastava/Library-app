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
const bookArray = [{
    title: "The Shining",
    author: "Stephen King",
    pages: 505,
    read: "Not Read",
}];

function book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read),
    (this.info = function () {
      return `${title} by ${author}, ${pages} pages, ${read}`;
    });
}

// bookArray.push(
//   book("A Brief History Of Time", "Stephen Hawking", 256, "not read")
// );
// bookArray.push(book("The Shining", "Stephen King", 505, "read"));
// bookArray.push(book("Atomic Habits", "James Clear", 320, "reading"));

function addToBookArray(bookArray){
    bookArray.array.forEach(book => {
        const displayDiv = document.createElement("div")
        wrapperDiv.appendChild(displayDiv);
    });
}
addToBookArray(bookArray);
