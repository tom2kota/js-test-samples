var addNumbers = function (a, b) { return a + b; };
var addNumbersResult = addNumbers(2, 10);
console.log("Result of addNumbersResult(2,10): " + addNumbersResult);
var addNumbersClosure = function (a) { return function (b) {
    var z = a + b;
    console.log(a + '+' + b + '=' + z);
    return z;
}; };
var addNumbersClosureResult = addNumbersClosure(10)(10);
console.log("Result of addNumbersClosure(10)(10): " + addNumbersClosureResult);
var addNumbersRecursiveClosure = function (a) { return function (b) {
    var z = a + b;
    console.log(a + '+' + b + '=' + z);
    return addNumbersRecursiveClosure(z);
}; };
var addNumbersRecursiveClosureResult = addNumbersRecursiveClosure(10)(10)(10)(10);
console.log("Result of addNumbersRecursiveClosure(10)(10)(10)(10): " + addNumbersRecursiveClosureResult);
var logger = function (message) { return console.log(message); };
logger('Hi there from logger()');
var throwError = function (error) {
    if (!error)
        throw new Error(error);
    return error;
};
throwError('Hi there from throwError()');
