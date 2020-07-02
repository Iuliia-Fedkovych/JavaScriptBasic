'use strict';

let number_object = {
    units: null,
    tens: null,
    hundreds: null,
};

function number_transformation (num){
    let transformed_number = Object.create(number_object);
    if (Number.isNaN(num)) {
        console.log("введённое значение не является числом");
        console.log(transformed_number);
    }else if (!Number.isInteger(num)) {
        console.log("введённое число не целое");
        console.log(transformed_number);
    }else if ((num < 0) || (num > 999)) {
        console.log("введённое значение вне диапазона 0-999");
        console.log(transformed_number);
    }else {
        transformed_number.units = num % 10;
        transformed_number.tens = ((num - transformed_number.units) % 100)/10;
        transformed_number.hundreds= (num - transformed_number.units - transformed_number.tens * 10)/100;
        console.log(transformed_number);
    }
}

let num = +prompt('Введите число: ');

number_transformation(num);
