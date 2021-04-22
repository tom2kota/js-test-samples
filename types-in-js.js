/*
    В JavaScript есть 8 основных типов.

    number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
    bigint для целых чисел произвольной длины.
    string для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
    boolean для true/false.
    null для неизвестных значений – отдельный тип, имеющий одно значение null.
    undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
    object для более сложных структур данных.
    symbol для уникальных идентификаторов.
 */

// 1) Boolean
console.log('true: ', typeof true)
console.log('false: ', typeof false)

// 2) Null - false
// Оно является самостоятельным, а не свойством глобального объекта (как undefined).
console.log('null: ', typeof null)
null ? console.log('null: ', true) : console.log('null: ', false)

// 3) Undefined - false
console.log('undefined: ', typeof undefined)
undefined ? console.log('undefined: ', true) : console.log('undefined: ', false)

// 4) Number - true/false
console.log('number 0: ', typeof 0)
console.log('number 1: ', typeof 1)
console.log('number -1.1: ', typeof -1.1)
console.log('number 1/0: ', typeof 1 / 0)
console.log('number 1/-0: ', typeof 1 / -0)
console.log('number 0/1: ', typeof 0 / 1)
console.log('number 0/0: ', typeof 0 / 0)
0 ? console.log('number 0: ', true) : console.log('number 0: ', false)
1 ? console.log('number 1: ', true) : console.log('number 1: ', false)
0 / 1 ? console.log('number 0/1: ', true) : console.log('number 0/1: ', false)


// 5) Symbol - true/false
// это уникальный и неизменяемый тип данных, который может быть использован как идентификатор для свойств объектов
console.log('Symbol(1): ', typeof Symbol(1))
Symbol(1) ? console.log('Symbol(1): ', true) : console.log('Symbol(1): ', false)


// 6) BigInt
// способ представления целых чисел, которые больше 2^53,
// что является наибольшим числом, которое JavaScript может надежно представить с помощью Number примитива.
console.log('BigInt(19241924124n): ', typeof BigInt(19241924124n))
console.log('BigInt(-1n): ', typeof BigInt(-1n))
BigInt(19241924124n) ? console.log('BigInt(19241924124n): ', true) : console.log('BigInt(19241924124n): ', false)


// 7) String
console.log('String : "" ', typeof String(''))
console.log('String : "ax" ', typeof String('ax'))
String('') ? console.log('String : "": ', true) : console.log('String : "": ', false)
String(' ') ? console.log('String : " ": ', true) : console.log('String : " ": ', false)
String('ax') ? console.log('String : "ax": ', true) : console.log('String : "ax": ', false)


// 8) Object
console.log('Object []: ', typeof Object([]))
console.log('Object {}: ', typeof Object({}))

Object([]) ? console.log('Object []: ', true) : console.log('Object []: ', false)
Object({}) ? console.log('Object {}: ', true) : console.log('Object {}: ', false)


