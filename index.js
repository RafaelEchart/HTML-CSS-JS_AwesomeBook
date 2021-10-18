/* eslint-disable no-unused-vars */
let books = [];
const title = document.querySelector('.boot-title');
const author = document.querySelector('.author');
const btn = document.querySelector('.btn');
const bookHolder = document.querySelector('#bookList');

function addBook() {
  const id = Math.random();

  books.push({ id, title: title.value, author: author.value });
  bookHolder.innerHTML += ` <span>${title.value}</span><br/>
  <span>${author.value}</span><br/>
  <button onclick="removeBook(${id})">Remove</button>
  <hr>`;

  title.value = '';
  author.value = '';
  // books = JSON.parse(localStorage.books)
  localStorage.setItem('data', JSON.stringify(books));
}

btn.addEventListener('click', addBook);

const removeBook = (id) => {
  bookHolder.innerHTML = '';
  books = books.filter((book) => book.id !== id);

  for (let x = 0; x < books.length; x += 1) {
    bookHolder.innerHTML += ` <span>${books[x].title}</span><br/>
  <span>${books[x].author}</span><br/>
  <button onclick="removeBook(${books[x].id})">Remove</button>
  <hr>`;
  }
  localStorage.setItem('data', JSON.stringify(books));
};
window.onload = function onload() {
  books = JSON.parse(localStorage.getItem('data'));

  for (let x = 0; x < books.length; x += 1) {
    bookHolder.innerHTML += ` <span>${books[x].title}</span><br/>
  <span>${books[x].author}</span><br/>
  <button onclick="removeBook(${books[x].id})">Remove</button>
  <hr>`;
  }
};
