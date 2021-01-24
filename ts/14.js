var firstCar = {
    name: 'Car #1',
    year: new Date(1995, 11, 17, 3, 24, 0),
    broken: true,
    summary: function () {
        return "Name: " + this.name;
    }
};
var secondCar = {
    name: 'Car #2',
    year: new Date(2020, 5),
    broken: true,
    summary: function () {
        return "Name: " + this.name;
    }
};
var printCar = function (x) {
    console.log("printCar function without interface result: ");
    console.log("Car name: " + x.name);
    console.log("Car year: " + x.year);
    console.log("Car broken: " + x.broken);
    console.log("Summary: " + x.summary());
};
var printSummary = function (x) {
    // console.log(`Car name: ${x.name}`)
    // console.log(`Car year: ${x.year}`)
    // console.log(`Car broken: ${x.broken}`)
    console.log("Summary: " + x.summary());
};
printCar(firstCar);
console.log('---------------');
printSummary(firstCar);
console.log('---------------');
printSummary(secondCar);
