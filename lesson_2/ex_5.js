// 5. Реализовать четыре основные арифметические операции в виде функций с двумя
// параметрами. Обязательно использовать оператор return.


let a = 2, b = 5

function my_sum(a, b){
    return a + b;
}

function my_dec(a, b){
    return a - b;
}

var my_multiplication = (a, b) => a * b;

var my_div = (a, b) => a / b;



console.log(my_sum(a, b));
console.log(my_dec(a, b));
console.log(my_multiplication(a, b));
console.log(my_div(a, b));
