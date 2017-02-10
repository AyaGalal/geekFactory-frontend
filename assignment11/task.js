Task = function( category ,title , priority , estimate){
    this.title = title;
    this.category = category;
    this.priority = priority;
    this.estimate = estimate;
    this.spent = 0;
    this.remaining = 1.5;
}
Task.prototype.track = function(trackNo){
    if(trackNo>0){
        this.spent += trackNo;
        this.remaining -= trackNo;
    }
}
Task.prototype.done = function(){
    Task.prototype.track(1.5);
    if(this.remaining == 0){
        return true;
    }else{
        return false;
    }
}
Task.prototype.complete = function(){
    this.remaining = 0;
}
var task = new Task();
task.category = 'work';
task.title = 'code review ahmed\'s pull-request';
task.priority = 1;
task.estimate = 1.5;
task.spent = 0;
task.remaining = 1.5;


module.exports = Task;
