"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/2';
axios_1.default.get(url).then(function (r) { return console.log(r.data); });
