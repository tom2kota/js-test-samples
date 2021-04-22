"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/2';
axios_1.default.get(url).then(function (r) {
    var todo = r.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) { return console.log("\n            TODO list contains:\n            - ID: " + id + ",\n            - Title: " + title + ",\n            - Completed: " + completed + ".\n    "); };
