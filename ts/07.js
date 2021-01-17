var dogQuantity = 2;
var dogColor = 'black';
var dogHappiness = true;
console.log("There are " + dogQuantity + " dogs - a type: " + typeof dogQuantity);
console.log("of " + dogColor + " color - a type: " + typeof dogColor);
console.log("that are full of happiness " + dogHappiness + " - a type: " + typeof dogHappiness);
var nothingMuch = null;
var nothing = undefined;
console.log("Result of nothingMuch is:  " + nothingMuch + " - a type: " + typeof nothingMuch);
console.log("Result of nothing is:  " + nothing + " - a type: " + typeof nothing);
var now = new Date();
console.log("Result of now is:  " + now + " - a type: " + typeof now);
var someColors = ['red', 'yellow', 'green'];
var someNumbers = [1, 2, 3];
var someFacts = [true, false, true];
console.log("Result of array someColors is:  " + someColors + " - a type: " + typeof someColors);
console.log("Result of array someNumbers is:  " + someNumbers + " - a type: " + typeof someNumbers);
console.log("Result of array someFacts is:  " + someFacts + " - a type: " + typeof someFacts);
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
console.log("Result of class Car is:  " + car + " - a type: " + typeof car);
var somePoint = {
    x: 2,
    y: 3
};
console.log("Result of somePoint Object literal is: (" + somePoint.x + "; " + somePoint.y + ") - a type: " + typeof somePoint);
var printNumber = function (i) {
    console.log("Result of printNumber function is: " + i);
};
printNumber(20);
console.log("a type of printNumber is: " + typeof printNumber);
