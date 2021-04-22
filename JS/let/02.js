// Переменная let видна только после объявления
// https://learn.javascript.ru/let-const

let x
x = 1

console.log(x)

y = 2  // ReferenceError: Cannot access 'y' before initialization
let y

console.log(y)
