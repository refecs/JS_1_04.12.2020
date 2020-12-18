'use strict'

// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let i = 0;
do {
    if (i === 0) {
        console.log(`${i} - это ноль`);

    } else if (i % 2 === 0){
        console.log(`${i} - это четное число`);
    } else {
        console.log(`${i} - это нечетное число`);
    }
    i++;
    } while (i < 101);

