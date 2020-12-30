'use strict'

/*
2. Продолжить работу с интернет-магазином:
a) В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
b) Реализуйте такие объекты.
c) Перенести функционал подсчета корзины на объектно-ориентированную базу
.*/

let basket = {
    products: [
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
    ],
        totalPrice() {
        return this.products.reduce((sum, good) => {
            return sum + good.price* good.quantity;
        }, 0);
    },

    goodsCount() {
        return this.products.length;
    },
}
console.log(basket.totalPrice());
console.log(basket.goodsCount());
