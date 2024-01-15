// Определение текущего размера окна браузера:
// Напишите функцию, которая будет выводить текущую ширину и высоту окна браузера при его изменении.

window.addEventListener(
  "resize", //в момент загрузки - load
  () => {
    console.log(
      `высота окна: ${window.innerHeight}, ширина окна: ${window.innerWidth}`
    );
  },
  true
);

// Подтверждение закрытия страницы:
// Создайте всплывающее окно или диалоговое окно, которое появляется при попытке закрыть вкладку браузера и спрашивает пользователя, уверен ли он в своем решении закрыть страницу.

window.addEventListener('beforeunload',(event)=>{
    //отмена события по умолчанию
    event.preventDefault();
    //хром требует установки возвратного значения
    event.returnValue = "";
})

// Управление историей переходов:
// Используйте объект history для управления историей переходов на веб-странице. Создайте кнопки "Назад" и "Вперед" для перемещения по истории.

document.body.querySelector('.btn-back').addEventListener('click', ()=>{
    window.history.back();
})

document.body.querySelector('.btn-forward').addEventListener('click', ()=>{
    window.history.forward();
})