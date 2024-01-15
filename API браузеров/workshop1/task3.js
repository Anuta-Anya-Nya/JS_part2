// Вы создаете веб-страницу для отображения списка статей. Каждая статья состоит из заголовка и текста. Вам необходимо использовать Bootstrap для стилизации элементов.
// Используйте Bootstrap, чтобы стилизовать элементы:
// Заголовок статьи (<h2>)
// Текст статьи (<p>)
// Кнопки "Добавить статью", "Удалить" и "Редактировать".
// Создайте начальный список статей, который будет загружаться при загрузке страницы. Используйте JSON-данные для определения заголовков и текстов статей.
// Позвольте пользователю добавлять новые статьи. При нажатии на кнопку "Добавить статью" должна появиться новая статья с заголовком "Новая статья" и текстом "Введите содержание статьи...".
// * Реализуйте функциональность удаления статей. При нажатии на кнопку "Удалить" соответствующая статья должна быть удалена из списка.
// * Реализуйте функциональность редактирования статей. При нажатии на кнопку "Редактировать" пользователь должен иметь возможность изменить заголовок и текст статьи. Используйте всплывающее окно или prompt для ввода новых данных.
// * Все изменения (добавление, удаление, редактирование) должны быть сохранены в локальное хранилище браузера, чтобы они сохранялись после перезагрузки страницы.

const articlesData = [
  {
    title: "Заголовок статьи 1",
    content: "Содержание статьи 1",
  },
  {
    title: "Заголовок статьи 2",
    content: "Содержание статьи 2",
  },
];

const articleList = document.querySelector("#articleList");
const btnAdd = document.querySelector("#addArticle");
function saveData(data) {
    
}

// отображение статей из json
for (const article of articlesData) {
  const newArticle = `
            <li class="mb-2">
                <h2>${article.title}</h2>
                <p>${article.content}</p>
                <button class="btn btn-warning" id="editArticle">Редактировать</button>
                <button class="btn btn-danger" id="delArticle">Удалить</button>
            </li>`;
  articleList.insertAdjacentHTML("beforeend", newArticle);
}
const btnDel = document.querySelectorAll("#delArticle");
//добавление статьи
btnAdd.addEventListener("click", () => {
  const title = "Новая статья";
  const content = "Введите содержание статьи";  
  const newArticle = `
            <li class="mb-2">
                <h2>${title}</h2>
                <p>${content}</p>
                <button class="btn btn-warning" id="editArticle">Редактировать</button>
                <button class="btn btn-danger" id="delArticle">Удалить</button>
            </li>`;
  articleList.insertAdjacentHTML("beforeend", newArticle);

  articleList.lastChild.querySelector('h2').innerText = prompt("Введите название статьи", title);
  articleList.lastChild.querySelector('p').innerText = prompt("Введите содержиние статьи", content);
});


document.body.addEventListener('click', (ev)=>{
    if(ev.target.attributes.id.value === 'delArticle'){
        ev.target.closest('li').remove();
    } 
    if(ev.target.attributes.id.value === 'editArticle'){
        const targetArticle = ev.target.closest('li');
        targetArticle.querySelector('h2').innerText = prompt("Измените название статьи", targetArticle.querySelector('h2').innerText);
        targetArticle.querySelector('p').innerText = prompt("Измените название статьи", targetArticle.querySelector('p').innerText);
    }   
})

// Добавление новой статьи
// addArticleButton.addEventListener('click', () => {
//   const newArticle = {
//   title: 'Новая статья',
//   content: 'Введите содержание статьи...'
//   };
//   const articleItem = createArticleElement(newArticle.title, newArticle.content);
//   articleList.appendChild(articleItem);
//   });

// 

