import Storage from './storage.js';

export const givenName = document.querySelector('#name');
export const givenAuthor = document.querySelector('#author');
export const listOfName = document.querySelector('#listOfName');

export default class BookList {
  title;

  author;

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addBook(obj) {
    const createAnHTMLList = `<li class="nombre"><span><p>${obj.title}</p> by <p>${obj.author}</p></span><br><button class="btn2">Remove</button>`;
    listOfName.innerHTML += createAnHTMLList;
    const BOOKS = Storage.getStorage();
    BOOKS.push(obj);
    localStorage.setItem('books', JSON.stringify(BOOKS));
  }

  static display() {
    const BOOKS = Storage.getStorage();
    BOOKS.forEach((book) => {
      const createAnHTMLList = `<li class="nombre"><span><p>${book.title}</p> by <p>${book.author}</p></span><br><button class="btn2">Remove</button>`;
      listOfName.innerHTML += createAnHTMLList;
    });
  }
}
