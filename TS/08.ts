const stringJson = '{"x": 10, "y": 20}'
const parsedJsonAny = JSON.parse(stringJson)
const parsedJsonAnnotation: { x: number; y: number } = JSON.parse(stringJson)

console.log(stringJson)
console.log(`Type of stringJson is: ${typeof stringJson}`)

console.log(parsedJsonAny)
console.log(`Type of parsedJsonAny is: ${typeof parsedJsonAny}`)

console.log(parsedJsonAnnotation)
console.log(`Type of parsedJsonAnnotation is: ${typeof parsedJsonAnnotation}`)
