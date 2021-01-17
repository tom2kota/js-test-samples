var stringJson = '{"x": 10, "y": 20}';
var parsedJsonAny = JSON.parse(stringJson);
var parsedJsonAnnotation = JSON.parse(stringJson);
console.log(stringJson);
console.log("Type of stringJson is: " + typeof stringJson);
console.log(parsedJsonAny);
console.log("Type of parsedJsonAny is: " + typeof parsedJsonAny);
console.log(parsedJsonAnnotation);
console.log("Type of parsedJsonAnnotation is: " + typeof parsedJsonAnnotation);
