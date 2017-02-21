import { Task } from "./task";
export var create = function() {
    var tasks = [];
    function create(category: string,title: string,priority: number,estimate: number){
        var task = new Task(category, title, priority, estimate);
        tasks.push(task);
         return task;
     }

    function get(index: number){
        return tasks[index];
    }

    function getAll(active: boolean){
        return filter(function (task){
            return !active || !task.done();
        });
    }

    function find(added){
        added && added.toLowerCase &&(added = added.toLowerCase());
         return filter(function (t){
            return t.title.toLowerCase().indexOf(added) > -1 || t.category.toLowerCase().indexOf(added) > -1;
        });
    }

    function remove(index: number){
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
        let matched = [];
        tasks.forEach(function (task) {
            predicte(task) && matched.push(task);
        });
        return matched;
    }

    return{
        create : create,
        get:get,
        getAll:getAll,
        find:find,
        remove: remove,
        
    }   ;
}
