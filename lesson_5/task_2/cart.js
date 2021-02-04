'use strict'

// 2.	Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть
// только div, в который будет вставляться корзина, сгенерированная на базе JS:
// a.	Пустая корзина должна выводить строку «Корзина пуста»;
// b.	Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    }
}


let cart = {
    cartListBlock: null,
    cartButton: null,
    cartItem,
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
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));


        this.render();
    },
    render() {
        if (this.products.length) {
            this.products.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.products.length} позиций(а) стоимостью ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.products.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },
    clearCart() {
        this.products = [];
        this.render();
    },
};

cart.init();