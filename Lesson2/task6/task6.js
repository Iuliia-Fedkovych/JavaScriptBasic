'use strict';

/**
Функция выводит сообщение о зачислении денег
@returns {string}
*/
function showBankOperationAlert(){
    let money = +prompt('Введите сумму для зачисления: ');
    let last_digit = money % 10;
    let digit_before_last = ((money - last_digit) / 10) % 10;
    if (digit_before_last == 1) {
        return `Ваша сумма в ${money} рублей успешно зачислена.`;
    }else{
        switch(last_digit){
            case 1:
                return `Ваша сумма в ${money} рубль успешно зачислена.`;
            case 2:
            case 3:
            case 4:
                return `Ваша сумма в ${money} рубля успешно зачислена.`;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                return `Ваша сумма в ${money} рублей успешно зачислена.`;
        }
    }
}

alert(showBankOperationAlert());