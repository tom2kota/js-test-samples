// @ts-ignore
var fetch = require("node-fetch");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(url)
    .then(function (response) { return response.json(); })
    .then(function (data) { return console.log(data); });
