"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв должен иметь уникальное id, для упрощения, используем `Date.now()`.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: Date.now(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: Date.now(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: Date.now(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: Date.now(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

class Review {
  constructor(id, text) {
    this.id = id;
    this.text = text;
  }
  printReview() {
    return `
    <li class="review">${this.text}</li>
    `;
  }
}

class Product {
  constructor(product, reviews) {
    this.product = product;
    this.reviews = reviews;
  }

  printReviews() {
    const revList = this.reviews
      .map((rev) => {
        const review = new Review(rev.id, rev.text);
        return review.printReview();
      })
      .join("");
    return revList;
  }

  printProduct() {
    return `
    <div class="product">
    <div class="product-title">${this.product}</div>
    <ul class="reviews-list">
    ${this.printReviews()}
    </ul>
    <input type="text" class="review-input" />
    <button class="add-button">Добавить</button>
    <div class="error-message"></div>
    </div>
    `;
  }
}

class ProductList {
  #products;

  constructor(productsList) {
    this.#products = productsList;
  }

  get allItems() {
    return this.#products;
  }

  addReview(index, review) {
    this.#products[index].reviews.push(review);
  }

  render() {
    const prodList = this.#products
      .map((item) => {
        const prodItem = new Product(item.product, item.reviews);
        return prodItem.printProduct();
      })
      .join("");
    document.querySelector(".product-list").innerHTML = prodList;
  }
}

const prodList = new ProductList(initialData);
prodList.render();

document.querySelector(".product-list").addEventListener("click", (event) => {
  if (!event.target.classList.contains("add-button")) return;

  const targetProduct = event.target.closest(".product");
  const productTitle = targetProduct.querySelector(".product-title");
  const reviewInput = targetProduct.querySelector(".review-input");

  const index = prodList.allItems.findIndex((el) => {
    return el.product === productTitle.textContent;
  });

  try {
    if (reviewInput.value.length < 50 || reviewInput.value.length > 500)
      throw new Error("Длина отзыва должна быть от 50 до 500 символов");
    prodList.addReview(index, { id: Date.now(), text: reviewInput.value });
    prodList.render();
  } catch (er) {
    targetProduct.querySelector(".error-message").textContent = er.message;
  }
});
