"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = require("node-fetch");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
node_fetch_1.default(url)
    .then(function (response) { return response.json(); })
    .then(function (data) { return console.log(data); });
