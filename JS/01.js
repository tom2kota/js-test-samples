// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const arr = [1, 2, 3, 0, 10, 9]

arr.sort(
    (a, b) => a - b
)

console.log(arr);