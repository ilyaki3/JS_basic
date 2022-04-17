/*
2. Продолжить работу с интернет-магазином:
a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
объектами можно заменить их элементы?
b. Реализуйте такие объекты.
c. Перенести функционал подсчета корзины на объектно-ориентированную базу.
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