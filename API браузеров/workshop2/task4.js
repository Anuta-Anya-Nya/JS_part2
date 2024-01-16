// Вам предоставляется задача создать простой онлайн опросник, который позволяет пользователям отвечать на вопросы с вариантами ответов. Ваша задача - разработать интерфейс и функциональность для этого опросника, используя HTML, CSS и JavaScript.
// Создайте интерфейс с несколькими вопросами и вариантами ответов. Каждый вопрос должен иметь несколько вариантов ответов.
// Реализуйте обработку событий, чтобы пользователи могли выбирать варианты ответов.
// Добавьте кнопку "Завершить опрос", которая будет показывать результаты опроса.
// При нажатии на кнопку "Завершить опрос", вы должны проверить, что пользователь ответил на все вопросы, и отобразить выбранные им варианты ответов.
// Если пользователь не ответил на все вопросы, покажите ему сообщение о необходимости ответить на все вопросы перед завершением опроса.

document.querySelector("#submit").addEventListener("click", () => {
  //берем все окошки для вывода значений и id для инпутов
  const resultItems = document.querySelectorAll(".result-item");

  //массив id не заполенных инпутов
  const notChecked = [];

  //для каждого вопроса
  resultItems.forEach((element) => {
    //находим номер вопроса
    const question = element.attributes.id.value.slice(7);

    // методом find находим выбранные ответы
    const answers = Array.from(
      document.querySelectorAll(`input[name="${question}"]`)
    );
    const checkAnsw = answers.find((el) => {
      return el.checked;
    });

    // если ответ не выбран, то он пушится в список незополненный для дальнейшего выделения
    if (!checkAnsw) {
      notChecked.push(question);
    } else {
      element.children[0].innerText = checkAnsw.attributes.value.value;
    }
  });

  //   если есть невыбранные ответы, выводится сообщение, если все хаполнено, выводтся результат
  if (notChecked.length) {
    document.querySelector(".error-message").style = "display: block";
    notChecked.forEach((el) => {
      document.querySelector(`.${el}`).style = "border: 1px solid red";
    });
  } else {
    document.querySelector(".result").style = "display: block";
  }
});




/* <script>
const submitButton = document.getElementById('submit');
const resultContainer = document.querySelector('.result');
const resultQ1 = document.getElementById('result-q1').querySelector('span');
const resultQ2 = document.getElementById('result-q2').querySelector('span');

submitButton.addEventListener('click', function () {
// Собираем ответы
const q1Answer = document.querySelector('input[name="q1"]:checked');
const q2Answer = document.querySelector('input[name="q2"]:checked');

if (q1Answer && q2Answer) {
// Отображаем результаты
resultQ1.textContent = q1Answer.value;
resultQ2.textContent = q2Answer.value;
resultContainer.style.display = 'block';

// Дополнительные действия, например, отправка результатов на сервер
} else {
alert('Пожалуйста, ответьте на все вопросы.');
}
});
</script> */