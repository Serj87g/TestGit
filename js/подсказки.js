
// 33:15 валидация форм и данных пользователя на правильность заполнения полей

// 36:00 создание собственной валидации

// 43:30 отправка данных

// 45:56 при валидности выводим сообщение "Все хорошо"

// 29:00 лоадер
// 'loader css' в google
// let loader = $('#loader');
// loader.css('display', 'flex'); //отображать
// loader.hide(); //скрыть лоадер в .done
// name.css('border-color', 'red');            //Рамка красная при ошибке
//
// #id {
//     display: none;
//     position: fixed;
//     background: ;
//     top: ;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     }

// $('#name').siblings('.error-input'); //ближайший блок к блоку с id='name'
// .show(); //отобразить
// .hide(); //скрыть
// .find('input' || '.class' || '#id'); //обращение к дочернему элементу 'name'
// .addClass('hide'); возврат класса // .removeClass //удаление класса
// .css('border-color', 'red'); //задание стиля
// 'use strict' //строгий что-то)))
// let url = 'https://itlogia.ru/test/promo-code?name=' + promocode; //пример

// 26:00 проверка запроса фоновым режимом через JQuery AJAX
// Результат выполнения запроса находится 'msg' можно изменить на любое
// $.ajax({
//     method: "POST",
//     url: "some.php",
//     data: { name: "John", location: "Boston" } //Передача данных при GET можно не передавать и удалить строку
// })
//     .done(function( msg ) {
//         alert( "Data Saved: " + msg );
//     });