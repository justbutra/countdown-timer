'use strict';

// 1. Создаем переменные для элементов из HTML
// 2. Обработка клика по кнопке “Начать” 
// 3. По клику на кнопку меняем значение заголовка h1, дату отсчета пока только запоминаем в переменную
// 4. Проверка значения даты, была ли выбрана любая дата (не пустое ли значение)
// 5. Скрываем кнопку “Начать”, отображаем кнопку “Сбросить”. Скрываем блок с инпутами, отображаем блок с классом `output`
// 6. Залить изменения на GIT
document.addEventListener('DOMContentLoaded', () => {

    const btnStart = document.querySelector('.btn');
    let h1 = document.querySelector('h1');
    let inputDate = document.querySelector('#date'),
        btnReset = document.querySelector('#btn-reset'),
        input = document.querySelector('.input'),
        output = document.querySelector('.output');
    function startAction() {
        h1.textContent = 'Привет таймер пошел';

        console.log(inputDate);
        console.log('start');
        btnStart.classList.add('hide');
        btnReset.classList.remove('hide');
        input.classList.add('hide');
        output.classList.remove('hide');
        if (!inputDate) {
            return
        } else {
            inputDate = inputDate.value;

            console.log('ok');
            console.log(inputDate);
        }

    }

    btnStart.addEventListener('click', startAction);



});