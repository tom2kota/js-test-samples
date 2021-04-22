const someObject = {
    first: 10,
    second: 'title',
    third: true
}
console.log(`someObject: ${JSON.stringify(someObject, null, '\t')}`)
console.log(`someObject: ${JSON.stringify(someObject, ['first', 'third'], ' ')}`)

const someTuple = [10, 'title', true]
console.log(`someTuple: ${someTuple}`)

type TypeAlias = [number, string, boolean]

const someRecord: TypeAlias = [10, 'title', true]
const anotherRecord: TypeAlias = [2, 'subtitles', false]

console.log(`some record: ${someRecord}`)
console.log(`anotherRecord: ${anotherRecord}`)
