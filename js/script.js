    'use strict';

    let start,
        enteredValue;

    function isNumbers(n) { 
        return !isNaN(parseFloat(n)) && isFinite(n);   // isFinite булиевый оператор проверять счисло бесконечное или нет
    }

    function randomNumber() {
        let x = Math.round(Math.random()*100);

        console.log(x);

        return x;
    }

    function enteringNumber(text, kol, randomNom) {
        let answer = prompt(text),
            thoughtNumber = randomNom;
                        
        if (answer == null) {
            return 'Игра окончена';    
        }

        if (!isNumbers(answer)) enteringNumber('Введи число!');

        kol--;

        function collation(a) {
            
            if (kol <= 0)  {
                let start2 =  confirm('Попытки закончились, хотите сыграть еще?');
                if (start2) {
                    enteringNumber('Введи число от 0 до 100', 10, randomNumber());
                }  else {
                    return 'Удачи!!!';
                }
            }

            if (a > thoughtNumber ) {alert('Загаданное число меньше, осталось попыток...' + kol);
                return enteringNumber('введите новый вариант', kol, thoughtNumber);
                }

            if (a < thoughtNumber) {alert('Загаданное число больше, осталось попыток...' + kol);
                return enteringNumber('введите новый вариант', kol, thoughtNumber);
                }

            if (a == thoughtNumber) {
                let start3 =  confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
                
                if (start3) {
                    return enteringNumber('Введи число от 0 до 100', 10, randomNumber());
                } else {return 'Удачи!!!';}
            }
            
        }    

        return collation(answer);
    }

    start = confirm('Игра угадай число от 0 до 100. Готов играть?');

    if (start) {

        enteredValue =  enteringNumber('Введи число от 0 до 100', 10, randomNumber());
        
        alert(enteredValue);
        
    } else {
        alert('Очень жаль игра закончилась не начавшись. Удачи!!!');
    }