export default class Storage {
  static getStorage() {
    if (!localStorage.getItem('books')) {
      this.book = [];
    } else {
      this.book = JSON.parse(localStorage.getItem('books'));
    }
    return this.book;
  }

  static removeBook(title, author) {
    const BOOKS = Storage.getStorage();
    BOOKS.forEach((book) => {
      if (book.title === title && book.author === author) {
        BOOKS.splice(BOOKS.indexOf(book), 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(BOOKS));
  }
}