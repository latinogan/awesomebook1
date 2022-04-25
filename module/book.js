export default class BookList {
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
}


  