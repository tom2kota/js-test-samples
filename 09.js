/*
    Привязка контекста к функции
    При передаче методов объекта в качестве колбэков, например для setTimeout,
    возникает известная проблема – потеря this.
    https://learn.javascript.ru/bind
    undefined произошло потому, что printName получил функцию отдельно от объекта (именно здесь функция и потеряла контекст)
    Решение 1: сделать функцию-обёртку – это обернуть вызов в анонимную функцию, создав замыкание
    Решение 2: привязать контекст с помощью метода bind, который позволяет зафиксировать this
 */

let obj = {
    name: 'Tommy',
    printName() {
        console.log(this.name)
    }
}

let printName = () => obj.printName()

printName()
