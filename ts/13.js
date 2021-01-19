var someObject = {
    first: 10,
    second: 'title',
    third: true
};
console.log("someObject: " + JSON.stringify(someObject, null, '\t'));
console.log("someObject: " + JSON.stringify(someObject, ['first', 'third'], ' '));
var someTuple = [10, 'title', true];
console.log("someTuple: " + someTuple);
var someRecord = [10, 'title', true];
var anotherRecord = [2, 'subtitles', false];
console.log("some record: " + someRecord);
console.log("anotherRecord: " + anotherRecord);
