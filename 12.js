/*
    Вычислить факториал
    http://collabedit.com/grpnk
    5! = 5 * 4 * 3 * 2 * 1 = 120
    Iterative
 */

const factorial = (number) => {
    let factorial = 1;

    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }

    return factorial
}

const result1 = factorial(1)
const result2 = factorial(5)
console.log(result1, result2)