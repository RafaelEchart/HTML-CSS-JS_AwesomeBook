/* eslint-disable no-unused-vars */

const inputTitle = document.querySelector('.boot-title');
const inputAuthor = document.querySelector('.author');
const btn = document.querySelector('.btn');
const bookHolder = document.querySelector('#bookList');
const add = document.getElementById('add')
const list = document.getElementById('list')
const listSection = document.getElementById('listSection')
const newBookSection = document.getElementById('newBookSection')



list.addEventListener('click', () =>{
  listSection.style.display = "block"
newBookSection.style.display = "none"

})
add.addEventListener('click', () =>{
 
  newBookSection.style.display="block"
  listSection.style.display = "none"
  
})

let books = [];
class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  addBookMethod() {
    books.push({ id: this.id, title: this.title, author: this.author });

    const newBookHTML = `<div id="${this.id}" class="singleBook"><span><strong>${this.title}</strong> by ${this.author} </span>
    
    <button id="${this.id}" class="buttonShadow">Remove</button>
    </div>`;

    bookHolder.insertAdjacentHTML('beforeend', newBookHTML);

    if (books.length % 2 === 0) {
      document.getElementById(this.id).classList.add('whiteBackground');
    } else {
      document.getElementById(this.id).classList.add('blackBackground');
    }

    localStorage.setItem('data', JSON.stringify(books));
  }

  removeBookMethod() {
    books = books.filter((book) => book.id.toString() !== this.id);

    const bookToDelete = document.getElementById(this.id);
    bookToDelete.remove();
    localStorage.setItem('data', JSON.stringify(books));
  }
}

function addBook() {
  const id = Math.random();
  const title = inputTitle.value;
  const author = inputAuthor.value;

  const newBook = new Book(id, title, author);
  newBook.addBookMethod();

  const removeButton = document.getElementById(id);
  removeButton.addEventListener('click', newBook.removeBookMethod);

  inputTitle.value = '';
  inputAuthor.value = '';
}
btn.addEventListener('click', addBook);

const onLoadBooks = (id, title, author) => {
  const newBook = new Book(id, title, author);
  newBook.addBookMethod();

  const removeButton = document.getElementById(id);
  removeButton.addEventListener('click', newBook.removeBookMethod);
};

window.onload = function onload() {
  const tempBooks = JSON.parse(localStorage.getItem('data'));

  if (tempBooks && tempBooks.length) {
    for (let i = 0; i < tempBooks.length; i += 1) {
      onLoadBooks(tempBooks[i].id, tempBooks[i].title, tempBooks[i].author);
    }
  }
};
