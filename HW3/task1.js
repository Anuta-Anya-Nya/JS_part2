const productInput = document.querySelector("#productName");
const productInputReview = document.querySelector("#productReview");
const errorEl = document.querySelector(".error-mes");

document.querySelector(".addReview").addEventListener("click", () => {
  if (productInput.value && productInputReview.value) {
    addReviews(productInput.value, productInputReview.value);
  } else {
    const errorMessage = "Все поля должны быть заполнены!";
    errorEl.innerHTML = errorMessage;
    throw new Error(errorMessage);
  }
  cleanForm();
});

function cleanForm() {
  errorEl.innerHTML = "";
  productInput.value = "";
  productInputReview.value = "";
}
