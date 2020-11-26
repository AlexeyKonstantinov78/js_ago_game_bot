'use strict';

let start,
    answer,
    thoughtNumber = 55,
    enteredValue;

    function isNumbers(n) { 
        return !isNaN(parseFloat(n)) && isFinite(n);   // isFinite булиевый оператор проверять счисло бесконечное или нет
    }

    function enteringNumber(text){
        do{
            answer = prompt(text);
            if (answer === null) {
                alert('Игра окончена');
                break;
            }
        }
        while (!isNumbers(answer));

        return answer;
    }

start = confirm('Игра угадай число от 0 до 100. Готов играть?');

if (start) {
    
    enteredValue =  enteringNumber('Введи число от 0 до 100');
    
    for ( ; ; ) {
        if (enteredValue > thoughtNumber) {alert('Загаданное число меньше');
        enteredValue = enteringNumber('введите новый вариант');
        }

        if (enteredValue < thoughtNumber) {alert('Загаданное число больше');
        enteredValue = enteringNumber('введите новый вариант');
        }

        if (enteredValue == thoughtNumber) {alert('Поздравляю, Вы угадали!!!');
            break;
            }
         console.log(typeof enteredValue, enteredValue);
         console.log(typeof thoughtNumber, thoughtNumber);
    }

} else {
    alert('Очень жаль игра закончилась не начавшись. Удачи!!!');
}