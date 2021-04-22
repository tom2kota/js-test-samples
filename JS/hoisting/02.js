// Функциональные выражения не поднимаются.
let catName
catName('Tom')  // TypeError: catName is not a function

catName = (name) => console.log(`My name is ${name}`)

