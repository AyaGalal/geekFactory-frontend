"use strict";
var task_1 = require("./task");
exports.create = function () {
    var tasks = [];
    //var onChangeCall;
    function create(category, title, priority, estimate) {
        var task = new task_1.Task(category, title, priority, estimate);
        tasks.push(task);
        // onChangeCall && onChangeCall(tasks);
        return task;
    }
    function get(index) {
        return tasks[index];
    }
    function getAll(active) {
        return filter(function (task) {
            return !active || !task.done();
        });
    }
    function find(added) {
        added && added.toLowerCase && (added = added.toLowerCase());
        return filter(function (t) {
            return t.title.toLowerCase().indexOf(added) > -1 || t.category.toLowerCase().indexOf(added) > -1;
        });
    }
    function remove(index) {
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i] === index) {
                index = i;
                break;
            }
        }
        if (index >= 0 && index < tasks.length) {
            tasks.splice(index, 1);
        }
    }
    function filter(predicte) {
        var matched = [];
        tasks.forEach(function (task) {
            predicte(task) && matched.push(task);
        });
        return matched;
    }
    return {
        create: create,
        get: get,
        getAll: getAll,
        find: find,
        remove: remove
    };
};
