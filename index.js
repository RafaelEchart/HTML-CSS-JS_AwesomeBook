/* eslint-disable rule-you-want-to-disable */
const title = document.querySelector(".boot-title");
const author = document.querySelector(".author");
const btn = document.querySelector(".btn");
const bookHolder = document.querySelector("#bookList");

let books = [];
const addBook = function () {
  let generated_ID = Math.random();

  books.push({ id: generated_ID, title: title.value, author: author.value });
  console.log(books);
  bookHolder.innerHTML += ` <span>${title.value}</span><br/>
  <span>${author.value}</span><br/>
  <button onclick="removeBook(${generated_ID})">Remove</button>
  <hr>`;

  title.value = ""
  author.value = ""
  // books = JSON.parse(localStorage.books)
  localStorage.setItem('data',JSON.stringify(books))
};


btn.addEventListener("click", addBook);

const removeBook = (id) => {
  bookHolder.innerHTML = "";
  books = books.filter((book) => book.id !== id);
  console.log(books);

  for (let x in books) {
    bookHolder.innerHTML += ` <span>${books[x].title}</span><br/>
  <span>${books[x].author}</span><br/>
  <button onclick="removeBook(${books[x].id})">Remove</button>
  <hr>`;
  }
  localStorage.setItem('data',JSON.stringify(books))
};
window.onload = function (){
  books = JSON.parse(localStorage.getItem('data'))
  
  for (let x in books) {
    bookHolder.innerHTML += ` <span>${books[x].title}</span><br/>
  <span>${books[x].author}</span><br/>
  <button onclick="removeBook(${books[x].id})">Remove</button>
  <hr>`;
  }
}
