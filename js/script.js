    'use strict';

    let start,
        enteredValue,
        n = randomNumber();

    console.log(n);

    function isNumbers(n) { 
        return !isNaN(parseFloat(n)) && isFinite(n);   // isFinite булиевый оператор проверять счисло бесконечное или нет
    }

    function randomNumber() {
        return Math.round(Math.random()*100);
    }

    function enteringNumber(text, randomNom){
        let answer = prompt(text),
            thoughtNumber = randomNom;

        if (answer == null) {
            return 'Игра окончена';    
        }

        if (!isNumbers(answer)) enteringNumber('Введи число!');

        function collation(a) {

            if (a < 0 || a > 100) return enteringNumber('введите новый вариант от 0 до 100', thoughtNumber);
             
            if (a > thoughtNumber ) {alert('Загаданное число меньше');
               return enteringNumber('введите новый вариант', thoughtNumber);
            }

            if (a < thoughtNumber) {alert('Загаданное число больше');
               return enteringNumber('введите новый вариант', thoughtNumber);
            }

            if (a == thoughtNumber) return 'Поздравляю, Вы угадали!!!';
        }

        return collation(answer);
    }

    start = confirm('Игра угадай число от 0 до 100. Готов играть?');

    

    if (start) {
        
        enteredValue =  enteringNumber('Введи число от 0 до 100', n);

        console.log('enteredValue: ', enteredValue);
        
        alert(enteredValue);
        
    } else {
        alert('Очень жаль игра закончилась не начавшись. Удачи!!!');
    }