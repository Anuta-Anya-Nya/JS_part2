// Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.

// 1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

// 2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.

// 3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

// 4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".

const lessonsData = [
  {
    id: 1,
    title: "Занятие 1",
    time: "10-00",
    maxNumberMembers: 10,
    numberRecordMembers: 1,
  },
  {
    id: 2,
    title: "Занятие 2",
    time: "11-00",
    maxNumberMembers: 10,
    numberRecordMembers: 2,
  },
  {
    id: 3,
    title: "Занятие 3",
    time: "12-00",
    maxNumberMembers: 10,
    numberRecordMembers: 0,
  },
  {
    id: 4,
    title: "Занятие 4",
    time: "13-00",
    maxNumberMembers: 10,
    numberRecordMembers: 10,
  },
];

const lessonsList = document.querySelector("#lessonList");

for (const lesson of lessonsData) {
  const newLesson = `
              <li class="card mb-2" style="width: 20rem;">
                <div class="card-body" data-id="${lesson.id}">
                  <h2>${lesson.title}</h2>
                  <p>Время проведения: ${lesson.time}</p>
                  <p>Максимальное число участников: <span id="maxMemb">${lesson.maxNumberMembers}</span></p>
                  <p>Записалось: <span id="recMemb">${lesson.numberRecordMembers}</span></p>
                  <button class="btn btn-warning" id="recordLesson">Записаться</button>
                </div>
              </li>`;
  lessonsList.insertAdjacentHTML("beforeend", newLesson);
}

lessonsList.addEventListener("click", (ev) => {
  if (ev.target.attributes.id?.value === "recordLesson") {
    const targetLesson = ev.target.closest(".card-body");

    const numberMaxMemb = +targetLesson.querySelector("#maxMemb").innerText;
    const numberRecMemb = +targetLesson.querySelector("#recMemb").innerText;

    if (numberMaxMemb > numberRecMemb) {
      const index = lessonsData.findIndex(
        (el) => el.id === +targetLesson.dataset.id
      );
      targetLesson.querySelector("#recMemb").innerText = ++lessonsData[index].numberRecordMembers;
    } else {
      ev.target.innerText = "Запись невозможна";
    }
  }
});
