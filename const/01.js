// const - Объявление const задаёт константу, то есть переменную, которую нельзя менять.
// В остальном объявление const полностью аналогично let.
// https://learn.javascript.ru/let-const
// если в константу присвоен объект, то от изменения защищена сама константа, но не свойства внутри неё:

const user = {
    name: 'U1'
}

user.name = 'U2'
console.log(user)

user = 'U3'  // TypeError: Assignment to constant variable.

