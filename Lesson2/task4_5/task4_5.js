'use strict';

/**
Функция выполняет сложение двух чисел
@param {number} a
@param {number} b
@returns {number}
*/
function getSum(a, b) {
    return a + b;
}

/**
Функция выполняет вычитания  двух чисел
@param {number} a
@param {number} b
@returns {number}
*/
function getDifference(a, b) {
    return a - b;
}


/**
Функция выполняет произведение двух чисел
@param {number} a
@param {number} b
@returns {number}
*/
function getProduct(a, b) {
    return a * b;
}

/**
Функция выполняет деление двух чисел
@param {number} a
@param {number} b
@returns {number}
*/
function getQoutient(a, b) {
    return a / b;
}

/**
Функция выполняет арифметическу операцию над двумя числами в зависимости от введенной операции
@param {number} arg1
@param {number} arg2
@param {string} operation
@returns {number}
*/
function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case '+':
            return getSum(arg1, arg2);  // не стала ставить break так как return и так заканчивает функцию и не даст заходить в другие случаи
        case '-':
            return getDifference(arg1, arg2);
        case '*':
            return getProduct(arg1, arg2);
        case '/':
            return getQoutient(arg1, arg2);
    }
}

let number1 = +prompt('Введите первое число');
let number2 = +prompt('Введите второе число');
let operation = prompt('Веедите один из операторов: +, -, *, /: ');

alert(mathOperation(number1, number2, operation));
