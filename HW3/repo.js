const productsKey = "productsReviews";

function addReviews(product, review) {
  if (!localStorage.getItem(productsKey)) {
    const reviewForProduct = [
      {
        product: product.toLowerCase(),
        reviews: [review],
      },
    ];
    localStorage.setItem(productsKey, JSON.stringify(reviewForProduct));
  } else {
    const productIndex = findIndexByProduct(product.toLowerCase());
    const productsLocalSt = JSON.parse(localStorage.getItem(productsKey));
    if (productIndex < 0) {
      productsLocalSt.push({
        product: product.toLowerCase(),
        reviews: [review],
      });
    } else {
      productsLocalSt[productIndex].reviews.push(review);
    }
    localStorage.setItem(productsKey, JSON.stringify(productsLocalSt));
  }
}

function findIndexByProduct(product) {
  const reviewsList = JSON.parse(localStorage.getItem(productsKey));
  return reviewsList.findIndex((el) => {
    return el.product === product;
  });
}

function saveProducts(data) {
  localStorage.setItem(productsKey, JSON.stringify(data));
}

function getProducts() {
  return JSON.parse(localStorage.getItem(productsKey));
}
