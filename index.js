import Storage from './modules/storage.js';
import time from './modules/time.js';
import BookList, {
  givenAuthor,
  givenName,
  listOfName,
} from './modules/book.js';

time();

const btnClass = document.querySelector('#Button');

btnClass.addEventListener('click', () => {
  const booklist = new BookList(givenName.value, givenAuthor.value);
  BookList.addBook(booklist);
});

window.addEventListener('load', BookList.display());

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

listOfName.addEventListener('click', (element) => {
  if (element.target.classList.contains('btn2')) {
    const PARENT = element.target.parentNode;
    const TITLE = PARENT.children[0].children[0].textContent;
    const AUTHOR = PARENT.children[0].children[1].textContent;
    PARENT.remove();
    Storage.removeBook(TITLE, AUTHOR);
  }
});
