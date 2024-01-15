// На странице должны быть кнопки "Добавить элемент", "Удалить элемент" и "Клонировать элемент".
// При нажатии на кнопку "Добавить элемент" на страницу добавляется новый квадратный элемент (<div>) с размерами 100x100 пикселей. Этот элемент должен иметь класс .box и содержать текст, указывающий порядковый номер элемента (1, 2, 3 и так далее).
// При нажатии на кнопку "Удалить элемент" удаляется последний добавленный элемент, если таковой имеется.
// При нажатии на кнопку "Клонировать элемент" создается копия последнего добавленного элемента и добавляется на страницу.
// Все элементы имеют класс .box и стилизованы с помощью CSS .
// Элементы могут быть добавлены, удалены и клонированы в любом порядке и в любом количестве.

const addBtn = document.querySelector("#addButton");
const remBtn = document.querySelector("#removeButton");
const cloneBtn = document.querySelector("#cloneButton");
const container = document.querySelector("#container");

addBtn.addEventListener("click", () => {
  const newEL = document.createElement("div");
  newEL.className = "box";
  newEL.innerText = +container.lastElementChild.innerHTML + 1;
  container.append(newEL);
});

remBtn.addEventListener("click", () => {
  if (container.children.length > 3) {
    container.lastElementChild.remove();
  }
});

cloneBtn.addEventListener("click", () => {
  const clone = container.lastElementChild.cloneNode(true);
  container.appendChild(clone);
});
