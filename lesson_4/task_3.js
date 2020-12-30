'use strict'

/*
3 Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины,
но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта,
 но в разных местах давал возможность вызывать разные методы.
.*/

let products = [
        {
            name: 'Часы INSTINCT Solar Sunburst',
            price: '36100',
            quantity: 4,
        },
        {
            name: 'Ноутбук Apple MacBook Pro 16" 6 Core i7 2,6 ГГц, 16 ГБ, 512 ГБ SSD',
            price: '234990',
            quantity: 1,
        },
        {
             name: 'Монитор DELL P2720D 27',
             price: '26490',
             quantity: 5,
        },
        {
             name: 'Сетевое хранилище Synology DS918+',
             price: '39890',
             quantity: 2,
        }
];

let basket = {
    products,
    totalPrice() {
        return this.products.reduce((sum, good) => {
            return sum + good.price * good.quantity;
        }, 0);
    },

    goodsCount() {
        return this.products.length;
    },
}
console.log(basket.totalPrice());
console.log(basket.goodsCount());

/*Объект "products" нужно сделать независимым от других объектов, он тогда будет актуален и для "basket" и для каталога.
А если оставить так как я реализовал во втором задании, "products" является свойством обьектом "basket", и для будущего
обьекта "каталог" он недоступен, правильно я понял задание?
*/