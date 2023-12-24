"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
  #books = [];
  
  constructor(books) {
    let set = new Set(books);
    if (books.length !== set.size)
      throw new Error("предоставленный массив содержит дубликаты!");
    this.#books = books;
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.#books.includes(title))
      throw new Error("Предоставленная книга уже записана в библиотеке");
    this.#books.push(title);
  }

  removeBook(title) {
    const index = this.#books.indexOf(title);
    if (index < 0)
      throw new Error("Предоставленная книга отсутствует в библиотеке");
    this.#books.splice(index, 1);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}

const myLibrary = new Library([
  "Гарри Поттер и тайная комната",
  "Хоббит или туда и обратно",
  "Азбука",
]);

myLibrary.addBook("Дети капитана Гранта");
console.log(myLibrary.allBooks);
myLibrary.removeBook("Азбука");
console.log(myLibrary.hasBook("Азбука"));
console.log(myLibrary.allBooks);
