// Создать модальное окно, которое появляется и исчезает при нажатии на кнопку "открыть" и "закрыть".
// появляется плавно
const modalWindow = document.querySelector(".modal");
console.log("modal", "");

document.querySelector(".open-modal-btn").addEventListener("click", () => {
//   modalWindow.style = "display: block";
  modalWindow.style.opacity = "1";
});

document.querySelector(".close-modal-btn").addEventListener("click", () => {
//   modalWindow.style = "display: none";
  modalWindow.style.opacity = "0";
});

// .fadein,
// .open,
// .fadeout {
// display: block;
// }

// .fadein,
// .fadeout {
// animation: 0.5s ease forwards fade;
// }

// .fadeout {
// animation-direction: reverse;
// }

// @keyframes fade {
// 0% {
// opacity: 0;
// }
// 100% {
// opacity: 1;
// }
// }
// Юрий Матвеев const openBtn = document.querySelector(".open-modal-btn");
// const closeBtn = document.querySelector(".close-modal-btn");
// const modal = document.querySelector(".modal");

// openBtn.addEventListener("click", () => {
// modal.classList.add("fadein");

// setTimeout(() => {
// modal.classList.remove("fadein");
// modal.classList.add("open");
// }, 500);
// });

// closeBtn.addEventListener("click", () => {
// modal.classList.remove("open");
// modal.classList.add("fadeout");

// setTimeout(() => {
// modal.classList.remove("fadeout");
// }, 500);
// });