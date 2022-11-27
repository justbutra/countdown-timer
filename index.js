// 1. Создаем переменные для элементов из HTML
// 2. Обработка клика по кнопке “Начать” 
// 3. По клику на кнопку меняем значение заголовка h1, дату отсчета пока только запоминаем в переменную
// 4. Проверка значения даты, была ли выбрана любая дата (не пустое ли значение)
// 5. Скрываем кнопку “Начать”, отображаем кнопку “Сбросить”. Скрываем блок с инпутами, отображаем блок с классом `output`
// 6. Залить изменения на GIT

//Задание 10.2

// 1. На основе изученного материала создаем функцию с обратным отсчетом до выбранной даты. Находим разницу между текущим моментом и датой
// 2. Проверяем выбранную дату на корректность, дата должна быть не позднее текущего момента (не из прошлого)
// 3. Находим целое количество дней, часов, минут и секунд в разнице между датами
// 4. Выводим на страницу полученные значения в блок .numbers в формате 0:0:0:0
// 5. Загружаем изменения на GIT, создаем pull request

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const btnStart = document.querySelector('.btn');
    const h1 = document.querySelector('h1');
    let deadLine = document.querySelector('#date');
    const btnReset = document.querySelector('#btn-reset');
    const input = document.querySelector('.input');
    const output = document.querySelector('.output');
    const complete = document.querySelector('.complete');


    let timerId = null;

    function startAction() {
        h1.textContent = 'Привет таймер пошел';

        btnStart.classList.add('hide');
        btnReset.classList.remove('hide');
        input.classList.add('hide');
        output.classList.remove('hide');
        if (!deadLine) {
            return
        } else {
            deadLine = moment(deadLine.value);

            function CountdownTimer() {
                const now = moment();

                if (deadLine.diff(now) <= 0) {
                    clearInterval(timerId);
                    return;
                }

                const days = deadLine.diff(now, 'days');
                const hours = deadLine.diff(now, 'hours') % 24;
                const minutes = deadLine.diff(now, 'minutes') % 60;
                const seconds = deadLine.diff(now, 'seconds') % 60;
                console.log(days, hours, minutes, seconds);

                if (deadLine.value < now) {

                }
            }
        }


        // Функция обратного отчета



        // timerId = setInterval(CountdownTimer, 1000);

    }



    btnStart.addEventListener('click', startAction);



});