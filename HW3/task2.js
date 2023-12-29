const productsBox = document.querySelector(".products-box");
const productsList = getProducts();

class Review {
  constructor(text) {
    this.text = text;
  }
  printReview() {
    return `
      <li class="review">${this.text}<button class="del-button">Удалить</button></li>
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
        const review = new Review(rev);
        return review.printReview();
      })
      .join("");
    return revList;
  }

  printProduct() {
    return `
      <div class="product">
      <div class="product-title">${this.product}</div>
      <ul class="reviews-list" style="display: none">
      ${this.printReviews()}
      </ul>      
      <button class="view-button">Показать</button>      
      </div>
      `;
  }
}

class ProductList {
  #products;
  productsBox;

  constructor(productsList, box) {
    this.#products = productsList;
    this.productsBox = box;
  }

  get allItems() {
    return this.#products;
  }

  delReview(indexProd, indexReview) {
    this.#products[indexProd].reviews.splice(indexReview, 1);
    if (this.#products[indexProd].reviews.length === 0) {
      this.#products.splice(indexProd, 1);
    }
  }

  render() {
    const prodList = this.#products
      .map((item) => {
        const prodItem = new Product(item.product, item.reviews);
        return prodItem.printProduct();
      })
      .join("");
    productsBox.innerHTML = prodList;
  }
}

const prodList = new ProductList(productsList, productsBox);
prodList.render();

productsBox.addEventListener("click", (event) => {
  if (!event.target.classList.contains("view-button")) return;

  const targetProduct = event.target.closest(".product");
  const productsList = targetProduct.querySelector(".reviews-list");
  const viewReviewsBtn = targetProduct.querySelector(".view-button");

  if (viewReviewsBtn.innerHTML === "Показать") {
    productsList.style.display = "block";
    viewReviewsBtn.innerHTML = "Скрыть отзывы";
  } else {
    productsList.style.display = "none";
    viewReviewsBtn.innerHTML = "Показать";
  }
});

productsBox.addEventListener("click", (event) => {
  if (!event.target.classList.contains("del-button")) return;

  const targetProduct = event.target.closest(".product");
  const productTitle = targetProduct.querySelector(".product-title");
  const indexProd = prodList.allItems.findIndex((el) => {
    return el.product === productTitle.textContent;
  });
  const indexReview = prodList.allItems[indexProd].reviews.findIndex((el) => {
    return el === event.target.parentElement.innerText.slice(0, -7);
  });

  prodList.delReview(indexProd, indexReview);
  saveProducts(prodList.allItems);
  prodList.render();
});
