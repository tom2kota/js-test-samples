const addNumbers = (a: number, b: number): number => a + b
let addNumbersResult = addNumbers(2, 10)
console.log(`Result of addNumbersResult(2,10): ${addNumbersResult}`)


const addNumbersClosure = (a: number) => (b: number) => {
    const z = a + b;
    console.log(a + '+' + b + '=' + z);
    return z;
}
let addNumbersClosureResult = addNumbersClosure(10)(10)
console.log(`Result of addNumbersClosure(10)(10): ${addNumbersClosureResult}`)


const addNumbersRecursiveClosure = (a: number) => (b: number) => {
    const z = a + b;
    console.log(a + '+' + b + '=' + z);
    return addNumbersRecursiveClosure(z)
}
let addNumbersRecursiveClosureResult = addNumbersRecursiveClosure(10)(10)(10)(10)
console.log(`Result of addNumbersRecursiveClosure(10)(10)(10)(10): ${addNumbersRecursiveClosureResult}`)


const logger = (message: string): void => console.log(message)
logger('Hi there from logger()')

const throwError = (error: string): string => {
    if (!error) throw new Error(error)
    return error
}
throwError('Hi there from throwError()')
