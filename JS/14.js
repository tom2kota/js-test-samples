/*
    Вычислить факториал
    5! = 5 * 4 * 3 * 2 * 1 = 120
    Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
    Recursive
 */

const factorial = number => number ? number * factorial(number - 1) : 1

const result1 = factorial(1)
const result2 = factorial(5)
console.log(result1, result2)