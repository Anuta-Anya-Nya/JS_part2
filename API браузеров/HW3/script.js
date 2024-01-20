// Цель: Разработать веб-приложение, которое каждый день будет отображать новое случайное изображение из коллекции Unsplash, давая пользователю возможность узнать больше о фотографе и сделать "лайк" изображению.

// Регистрация на Unsplash:

// • Перейдите на веб-сайт Unsplash (https://unsplash.com/).
// • Зарегистрируйтесь или войдите в свой аккаунт. (если у вас не было регистрации до этого, новый аккаунт создавать не нужно).

// Создание приложения:

// • Перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
// • Нажмите "New Application".
// • Заполните необходимую информацию о приложении (можете использовать http://localhost для тестирования).
// • Получите свой API-ключ после создания приложения.

// Разработка веб-приложения:

// • Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
// • Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу.
// • Отобразите информацию о фотографе под изображением.

// * Дополнительные задачи (по желанию):

// • Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу.
// • Добавьте функцию сохранения количества лайков в локальное хранилище, чтобы при новой загрузке страницы счетчик не сбрасывался.
// • Реализуйте возможность просмотра предыдущих "фото дня" с сохранением их в истории просмотров.

const image = document.querySelector("#image");
const author = document.querySelector(".image__author");
const counterLikes = document.querySelector(".image__counterLikes");

//для записи лайков в localStorage
const likesKey = "imageLikes";
function getLikesFromLocalStorage() {
  if (!localStorage.getItem(likesKey)) {
    return 0;
  } else {
    return JSON.parse(localStorage.getItem(likesKey));
  }
}
function saveLikes(data) {
  localStorage.setItem(likesKey, JSON.stringify(data));
}

//для сохранения и отображения истории просмотров
const historyKey = "historyViewedImages";
function getHistoryFromLocalStorage() {
  if (!localStorage.getItem(historyKey)) {
    return [];
  } else {
    const countItemsHistory = 5;
    const history = JSON.parse(localStorage.getItem(historyKey));
    return history.slice(history.length - 5, history.length);
  }
}
function saveItemHistory(idImage, description) {
  const item = {
    date: new Date(),
    imageId: idImage,
    imageDesc: description,
  };
  history.push(item);
  localStorage.setItem(historyKey, JSON.stringify(history));
}

const history = getHistoryFromLocalStorage();

history.forEach((image) => {
  const item = `
              <li class="viewed-image"> ${image.date.slice(0, 10)} - ${
    image.imageDesc
  }  
              <img src="" id="pastImage" alt="past image" style="display:none">              
              </li>`;
  document
    .querySelector(".history__list")
    .insertAdjacentHTML("afterBegin", item);

  //при клике на пункт списка отображается картинка
  document.querySelector(".viewed-image").addEventListener("click", (ev) => {
    fetch(
      `https://api.unsplash.com/photos/${image.imageId}?client_id=AvTQUKGZ3FSrW7JKE0mqtUqYMzxJvqGzXpjw2umMO9s`
    )
      .then((res) => res.json())
      .then((data) => {
        const selectedImage = ev.target.querySelector("img");
        selectedImage.attributes.src.value = data.urls.small;
        selectedImage.style = "display: block";
      })
      .catch((error) => console.error(error.message));
  });
});

//загрузка картинки, автора, лайков и сохранение просмотренной картинки в историю
window.addEventListener("load", () => {
  fetch(
    "https://api.unsplash.com/photos/random?client_id=AvTQUKGZ3FSrW7JKE0mqtUqYMzxJvqGzXpjw2umMO9s"
  )
    .then((res) => res.json())
    .then((data) => {
      image.attributes.src.value = data.urls.small;
      author.innerText = data.user.name;
      counterLikes.innerText = getLikesFromLocalStorage();
      saveItemHistory(data.id, data.alt_description);
    })
    .catch((error) => console.error(error.message));
});

// увеличение лайков при клике
document.querySelector(".image__likes").addEventListener("click", () => {
  counterLikes.innerText = +counterLikes.innerText + 1;
  saveLikes(+counterLikes.innerText);
});
