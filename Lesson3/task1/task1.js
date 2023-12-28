/*
Задание 1: 
Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" 
во внутреннем массиве (имитируя базу данных). Когда пользователь нажимает на 
кнопку "Загрузить новости", ваш код должен имитировать задержку, словно 
происходит реальная загрузка данных из внешнего источника, а после этой 
задержки — отображать новости на странице.
 
1. Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером 
для их отображения.
2. Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна 
имитировать задержку в 2 секунды перед успешным возвращением данных из 
"виртуальной" базы данных. Для добавления интереса: с вероятностью 10% она 
должна возвращать ошибку вместо данных.
3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), 
обрабатывая успешное выполнение и ошибки с использованием then() и catch().
При успешной загрузке отобразите статьи на странице. При ошибке покажите 
сообщение об ошибке.
4. Добавьте функционал, который отключает кнопку загрузки на время "загрузки" 
новостей и активирует её снова после завершения операции (будь то успешная 
загрузка или ошибка).
*/

const newsLIst = [
  { title: "news1", content: "content1" },
  { title: "news2", content: "content2" },
  { title: "news3", content: "content3" },
];

const fetchNews = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject("error");
      } else {
        resolve(newsLIst);
      }
    }, 2000);
  });
};

document.querySelector(".button-news").addEventListener("click", () => {
  fetchNews()
    .then((result) => {
      const contentHtml = result
        .map((el) => {
          return `<article><h1>${el.title}</h1><p>${el.content}</p></article>`;
        })
        .join(" ");
      document.querySelector(".news").innerHTML = contentHtml;
    })
    .catch((err) => {
      document.querySelector(".news").innerHTML = "Произошла ошибка";
    });
});

// function click() {
//     fetchNews()
//       .then((result) => {
//         const contentHtml = result
//           .map(
//             (el) => ` <article>
//                           <h1>${el.title}</h1>
//                           <p>${el.content}</p>
//                       </article>`
//           )
//           .join(" ");
//         divEl.innerHTML = contentHtml;
//       })
//       .catch((err) => {
//         divEl.innerHTML = "Произошла ошибка";
//       });
//   }
  
//   btn.addEventListener("click", click);

