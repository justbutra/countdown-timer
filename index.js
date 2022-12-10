
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
    let countdownDate = '';

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

        addClassHide(btnStart);
        removeClassHide(btnReset);
        addClassHide(input);
        removeClassHide(output);

        countdownDate = deadLine.value;
        titleDate = titleDate.value;

        localStorage.setItem('title', JSON.stringify(titleDate));
        localStorage.setItem('deadLine', JSON.stringify(countdownDate));
        h1.textContent = `Привет таймер ${titleDate} пошел` || '';

        if (!countdownDate) {
            h1.textContent = 'Введите корректную дату!';
            addClassHide(output);
            return
        }

        timerId = setInterval(countdownTimer, 1000);
        countdownTimer(timerId);
    }

    // Функция обратного отчета
    function countdownTimer() {
        const now = moment();

        if (moment(countdownDate).diff(now) <= 0) {
            addClassHide(output);
            removeClassHide(complete);
            h1.textContent = ''
            complete.textContent = `${titleDate} Завершился ${countdownDate.format('DD.MM.YYYY')}`
            clearInterval(timerId);
            return;
        }

        const days = moment(countdownDate).diff(now, 'days');
        const hours = moment(countdownDate).diff(now, 'hours') % 24;
        const minutes = moment(countdownDate).diff(now, 'minutes') % 60;
        const seconds = moment(countdownDate).diff(now, 'seconds') % 60;

        numbers.textContent = `
             ${days < 10 ? '0' + days : days}:
             ${hours < 10 ? '0' + hours : hours}:
             ${minutes < 10 ? '0' + minutes : minutes}:
             ${seconds < 10 ? '0' + seconds : seconds}`;

        btnReset.addEventListener('click', () => {
            h1.textContent = 'Создать новый таймер обратного отсчета';
            document.querySelector('.input input').value = '';
            document.querySelector('#date').value = '';
            clearInterval(timerId);
            addClassHide(btnReset);
            addClassHide(output);
            removeClassHide(btnStart);
            removeClassHide(input);
            localStorage.clear();

        })

    }

    function isEmptyLocalStorage() {
        const localTitle = JSON.parse(localStorage.getItem('title'));
        const localDate = JSON.parse(localStorage.getItem('deadLine'));

        if (localDate && localTitle) {

            addClassHide(btnStart);
            addClassHide(input);
            removeClassHide(btnReset);
            removeClassHide(output);

            h1.textContent = `Привет таймер ${titleDate} пошел` || '';
            countdownDate = localDate;

            timerId = setInterval(countdownTimer, 1000);
            countdownTimer(timerId);

        }
    }





    btnStart.addEventListener('click', startAction);
    btnStart.addEventListener('click', countdownTimer);

    isEmptyLocalStorage();

});