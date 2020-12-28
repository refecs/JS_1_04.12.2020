'use strict'

/* 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
*/

function getNumber(min, max) {
    let number = parseInt(Math.random() * (max - min) + min);
    if (number === -0) number = 0;
    return number;
}
let basket = [
    {
        product: 'pen',
        price: getNumber(35, 112)
    },
    {
        product: 'pencil',
        price: getNumber(20, 88)
    },
    {
        product: 'file',
        price: getNumber(15, 65)
    },
    {
        product: 'paper',
        price: getNumber(10, 50)
    }
];
let basketPrice = 0;
for (let prod of basket){
    basketPrice += prod.price;
    console.log('Товар ' + prod.product + ' стоит: ' + prod.price);
}

console.log('Стоимость корзины: ' + basketPrice + ' руб. ');