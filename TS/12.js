var arrayString = ['first', 'second', 'third'];
console.log(arrayString + " - arrayString with type inference");
arrayString.map(function (x) { return console.log("map of arrayString result: " + x.toUpperCase()); });
var anotherStingArray = [];
console.log(anotherStingArray + " - anotherStingArray with type annotation");
var arrayDates = [new Date(), new Date()];
console.log(arrayDates + " - arrayDates");
var twoDimensionalArray = [
    ['first'],
    ['second'],
    ['third']
];
console.log(twoDimensionalArray + " - twoDimensionalArray");
var anotherTwoDimensionalArray = [];
console.log(anotherTwoDimensionalArray + " - anotherTwoDimensionalArray");
var arrayWithFlexibleTypes = [new Date(), 'today'];
console.log(arrayWithFlexibleTypes + " - arrayWithFlexibleTypes");
