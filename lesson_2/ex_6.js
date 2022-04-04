/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 — значения аргументов, operation — строка с названием операции. В
зависимости от переданного значения выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (применить switch).
*/

import {my_sum, my_dec, my_div, my_multiplication} from './ex_5.js';


function mathOperation(arg1, arg2, operation){
    switch(operation){
        case '+':
            return my_sum(arg1, arg2);
        case '-':
            return my_dec(arg1, arg2);
        case '/':
            return my_div(arg1, arg2);
        case '*':
            return my_multiplication(arg1, arg2);
    }
}

console.log(mathOperation(10, 5, '/'));