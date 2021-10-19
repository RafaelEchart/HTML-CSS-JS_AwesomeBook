/* eslint-disable no-unused-vars */
let books = [];
const inputTitle = document.querySelector(".boot-title");
const inputAuthor = document.querySelector(".author");
const btn = document.querySelector(".btn");
btn.addEventListener("click", addBook);
const bookHolder = document.querySelector("#bookList");

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  addBookMethod() {
    books.push({ id: this.id, title: this.title, author: this.author });

    let newBookHTML = `<div id="${this.id}"><span>${this.title}</span><br/>
    <span>${this.author}</span><br/>
    <button id="${this.id}">Remove</button>
   <hr></div>`;

    bookHolder.insertAdjacentHTML("beforeend", newBookHTML);

    localStorage.setItem("data", JSON.stringify(books));
  }

  removeBookMethod() {
    console.log("hereRemove", this.id);
    // bookHolder.innerHTML = "";
    books = books.filter((book) => book.id.toString() !== this.id);

    let bookToDelete = document.getElementById(this.id);
    bookToDelete.remove();
    localStorage.setItem("data", JSON.stringify(books));
  }

  cleanInputs() {
    inputTitle.value = "";
    inputAuthor.value = "";
  }
}

function addBook() {
  const id = Math.random();
  const title = inputTitle.value;
  const author = inputAuthor.value;

  let newBook = new Book(id, title, author);
  newBook.addBookMethod();
  newBook.cleanInputs();

  let removeButton = document.getElementById(id);
  removeButton.addEventListener("click", newBook.removeBookMethod);
}

window.onload = function onload() {
  const tempBooks = JSON.parse(localStorage.getItem("data"));
  

  if (tempBooks && tempBooks.length) {
    for (let i = 0; i < tempBooks.length; i += 1) {
      onLoadBooks(tempBooks[i].id, tempBooks[i].title, tempBooks[i].author);
    }
  }
};

const onLoadBooks = (id, title, author) => {

  let newBook = new Book(id, title, author);
  newBook.addBookMethod();

  let removeButton = document.getElementById(id);
  removeButton.addEventListener("click", newBook.removeBookMethod);
};
