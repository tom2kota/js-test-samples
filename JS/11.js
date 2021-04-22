/*
    Сумма с помощью замыканий
    Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
 */

const sum = (a) => (b) => a + b

const result = sum(2)(3)

console.log(result);