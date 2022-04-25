const givenName = document.querySelector('#name');
const givenAuthor = document.querySelector('#author');
const btnClass = document.querySelector('#Button');
const listOfName = document.querySelector('#listOfName');

import BookList from './module/book.js';

/*class BookList {
  constructor(book) {
    this.book = book;
  }

  getStorage() {
    if (localStorage.length === 0) {
      this.updateStorage();
    } else {
      this.book = JSON.parse(localStorage.getItem('books'));
      this.book.forEach((obj) => {
        this.addBook(obj, true);
      });
    }
  }

  updateStorage() {
    localStorage.setItem('books', JSON.stringify(this.book));
  }

  removeBook(id, c = true) {
    if (c === false) {
      return;
    }
    for (let i = 0; i < this.book.length; i += 1) {
      const bookid = i;
      if (this.book[bookid].id === Number(id)) {
        this.book.splice(bookid, 1);
        listOfName.removeChild(listOfName.querySelector(`[id='${id.toString()}']`));
        this.updateStorage();
        return;
      }
    }
  }

  addBook(obj, old = false) {
    let author;
    let name;
    let id;
    if (old === true) {
      author = obj.author;
      name = obj.title;
      id = obj.id;
    } else {
      author = givenAuthor.value;
      name = givenName.value;
      id = obj;
    }
    
   const createAnHTMLList = `<li class="nombre" id="${id}"><span>${name} by ${author} </span><br><button class="btn2"
        onclick="booklist.removeBook('${id}')">Remove</button>`;
    listOfName.innerHTML += createAnHTMLList;
    this.updateStorage();
  }
}*/



const booklist = new BookList([]);
btnClass.addEventListener('click', () => {
  const bookid = new Date().getTime();
  booklist.book.push({ title: givenName.value, author: givenAuthor.value, id: bookid });
  if (givenAuthor.length !== 0 && givenName.length !== 0) {
    booklist.addBook(bookid);
    givenName.value = '';
    givenAuthor.value = '';
  } else {
    givenName.classList.add('red');
    givenAuthor.classList.add('red');
  }
});

window.addEventListener('load', booklist.getStorage());

const list = document.querySelector('.library');
const add = document.querySelector('.add_book');
const contact = document.querySelector('.contact1');
const links = document.querySelector('#Links');
links.addEventListener('click', (element) => {
  element.preventDefault();
  const link = element.target;
  if (link.classList.contains('list')) {
    add.classList.remove('active');
    contact.classList.remove('active');
    list.classList.add('active');
  } else if (link.classList.contains('add')) {
    list.classList.remove('active');
    contact.classList.remove('active');
    add.classList.add('active');
  } else if (link.classList.contains('contact')) {
    list.classList.remove('active');
    add.classList.remove('active');
    contact.classList.add('active');
  }
});
