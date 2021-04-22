const someObject = {
    'boolean': true,
    'symbol': Symbol('id'),
    'undefined': null,
    'date': Date(),
    'string': 'Some text',
    'number': 10,
    'array': [1, 2, 3],
    'object': {
        'key': 1,
        'title': 'Object title'
    }
}

// console.log(`console.log someObject: ${someObject}`)
// console.log(`console.log JSON.stringify(someObject, null, '\t'): ${JSON.stringify(someObject, null, '\t')}`)
console.log('console.log(someObject):')
console.log(someObject)
console.dir(`console.dir(someObject):`)
console.dir(someObject)
console.table('console.table(someObject):')
console.table(someObject)
console.log('----------------------')
Object.entries(someObject).forEach((x, i) => console.log(` ${i} `, ...x))
console.log('----------------------')
for (const [key, value] of Object.entries(someObject)) {
    console.dir(` ${key}: ${value} `)
}
