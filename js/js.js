$(document).ready(() => {

    (function () {
        'use strict'

        $('#submit').click(function () {
            $('.error-input').hide();                       //Скрытие ошибки

            let name = $('#name1')
            var adrress = $('#adrress1')
            let phone = $('#phone1')
            name.css('border-color', '#b99150');
            adrress.css('border-color', '#b99150');
            phone.css('border-color', '#b99150');

            if (!name.val()) {                              //Если нет значения
                name.siblings('.error-input').show();    //Ближайший блок отобразить
                name.css('border-color', 'red');
                // return;
            }
            if (!adrress.val()) {
                adrress.siblings('.error-input').show();
                adrress.css('border-color', 'red')
                // return;
            }
            if (!phone.val()) {
                phone.siblings('.error-input').show();
                phone.css('border-color', 'red')
                return;
            }

            var loader = $('#loader');
            var form = $('#order-form');
            var ok = $('#ok');
            ok.hide();
            loader.css('display', 'flex');

            $.ajax({
                method: "POST",
                url: "https://itlogia.ru/test/checkout",
                data: {name: name.val(), adrress: adrress.val(), phone: phone.val()} //Передача данных при GET можно не передавать и удалить строку
            })
                .done(function (msg) {
                    loader.hide();
                    console.log(msg);
                    if (msg.success) {
                        form.css('display', 'none');
                        ok.show();
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                    }

                });

        });


    }());
});

