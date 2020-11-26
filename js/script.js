    'use strict';

    let start,
        enteredValue;

    function isNumbers(n) { 
        return !isNaN(parseFloat(n)) && isFinite(n);   // isFinite булиевый оператор проверять счисло бесконечное или нет
    }

    function enteringNumber(text){
        let answer = prompt(text),
        thoughtNumber = 55;

        if (answer == null) {
            return 'Игра окончена';    
        }

        if (!isNumbers(answer)) enteringNumber('Введи число!');

        function collation(a) {
            if (a > thoughtNumber ) {alert('Загаданное число меньше');
                enteredValue = enteringNumber('введите новый вариант');
                }

            if (a < thoughtNumber) {alert('Загаданное число больше');
                enteredValue = enteringNumber('введите новый вариант');
                }

            if (a == thoughtNumber) {return 'Поздравляю, Вы угадали!!!';
                }
        }

        return collation(answer);
    }

    start = confirm('Игра угадай число от 0 до 100. Готов играть?');

    if (start) {

    
        enteredValue =  enteringNumber('Введи число от 0 до 100');
        
        alert(enteredValue);
        
    } else {
        alert('Очень жаль игра закончилась не начавшись. Удачи!!!');
    }