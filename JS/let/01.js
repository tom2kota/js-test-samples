// Область видимости переменной let – блок, в котором она объявлена
// https://learn.javascript.ru/let-const

let x = 1

if (true) {
    let x = 2
    console.log(`Local if(true) block variable: ${x}`)
}

console.log(`Global variable: ${x}`)
