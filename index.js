const title = document.querySelector('.boot-title')
const author = document.querySelector('.author')
const btn = document.querySelector('.btn')
const bookHolder = document.querySelector('#bookList')

let books = [];
const addBook = function () {
  books.push({title: title.value,author:author.value})
  console.log(books);
  bookHolder.innerHTML += ` <span>${title.value}</span><br/>
  <span>${author.value}</span><br/>
  <button>Remove</button>
  <hr>`
}

btn.addEventListener('click', addBook)
