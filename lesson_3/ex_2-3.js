/*
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть
сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в
зависимости от находящихся в ней товаров.

3. Товары в корзине хранятся в массиве. Задачи:
a. Организовать такой массив для хранения товаров в корзине;
b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/


let basket = [
    {
        product: 'chair',
        price: 100
    },
    {
        product: 'table',
        price: 200
    },
    {
        product: 'sofa',
        price: 300
    },
    {
        product: 'lamp',
        price: 50
    }
]

function countBasketPrice(basket){
    let basketPrice = 0 
    for (prod of basket){
        basketPrice += prod.price
    }
    return basketPrice
}

console.log('basket price = ' + countBasketPrice(basket))

