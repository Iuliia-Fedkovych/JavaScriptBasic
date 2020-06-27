'use strict';

/**
Функция выполняет операции над двумя числами в зависимости от их знака
@param {number} a
@param {number} b
@returns {number}
*/
function twoNumberOperation(a, b){
    if ((a >= 0) && (b >= 0)) {
        alert(a - b;
    }else if ((a < 0) && (b < 0)){
        alert(a * b);
    }else{
        alert(a + b);
    }
}

let a = +prompt('Введите a: ');
let b = +prompt('Введите b: ');
two_number_operation(a, b);