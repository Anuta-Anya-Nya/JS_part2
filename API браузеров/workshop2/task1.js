// Вам необходимо создать навигационное меню для веб-сайта, в котором меняется активный пункт при клике без фактического перехода на другие страницы.
// Меню должно обладать следующими характеристиками:
// Подсветка активного пункта: При клике на пункт меню он должен становиться активным,
// и для активного пункта должен применяться определенный стиль (например, изменение цвета фона).
// Если выбрать другой пункт, предыдущий должен перестать быть активным.

const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach((element) => {
  element.addEventListener("click", (ev) => {
    ev.preventDefault();
    document.querySelectorAll(".menu__link.active").forEach((element) => {
      element.classList.remove("active");
    });
    // menuLinks.forEach((el) => {
    //   el.className.remove = "active";
    // });
    // ev.target.className = "menu__link active";
    ev.target.classList.toggle("active")
  });
});

// document
//   .querySelectorAll(".menu__link.active")
//   .forEach((item) => item.classList.remove("active"));
