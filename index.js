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
    const numbers = document.querySelector('.numbers');
    let titleDate = document.querySelector('#title-date');


    let timerId = null;

    //Функция добавления класса
    function addClassHide(variable) {
        return variable.classList.add('hide');
    }

    //Функция удаления класса
    function removeClassHide(variable) {
        return variable.classList.remove('hide');
    }
    //Старт отсчета
    function startAction() {
        h1.textContent = `Привет таймер ${titleDate.value} пошел`;

        addClassHide(btnStart);
        removeClassHide(btnReset);
        addClassHide(input);
        removeClassHide(output);

        deadLine = moment(deadLine.value);
        titleDate = titleDate.value;
        console.log(deadLine)

        if (!deadLine) {
            h1.textContent = 'Введите корректную дату!';
            addClassHide(output);
            return
        }

        // Функция обратного отчета
        function CountdownTimer() {
            const now = moment();

            if (deadLine.diff(now) <= 0) {
                addClassHide(output);
                removeClassHide(complete);
                h1.textContent = ''
                complete.textContent = `${titleDate} Завершился ${deadLine.format('DD.MM.YYYY')}`
                clearInterval(timerId);
                return;
            }

            const days = deadLine.diff(now, 'days');
            const hours = deadLine.diff(now, 'hours') % 24;
            const minutes = deadLine.diff(now, 'minutes') % 60;
            const seconds = deadLine.diff(now, 'seconds') % 60;

            numbers.textContent = `
             ${days < 10 ? '0' + days : days}:
             ${hours < 10 ? '0' + hours : hours}:
             ${minutes < 10 ? '0' + minutes : minutes}:
             ${seconds < 10 ? '0' + seconds : seconds}`;


        }

        timerId = setInterval(CountdownTimer, 1000);
        CountdownTimer(timerId);

    }

    btnStart.addEventListener('click', startAction);

});