Employee = function(name,department){
    this.name = name;
    this.department = department;
    this.role = "employee";
}
Employee.prototype.getInfo = function(){
    return "My name is "+this.name+". I am "+this.role+" in the "+this.department+" department.";
}
var employee = new Employee();
employee.name = "Ahmed";
employee.department = "IT";
employee.role = "employee";

Manager = function(name,department,reports){
    this.name = name;
    this.department = department;
    this.reports = reports;
    this.role = "manager";
}
Manager.prototype.getInfo = function(){
    return "My name is "+this.name+". I am "+this.role+" in the "+this.department+" department. I manage "+this.reports+" employees.";
}
Manager.prototype.__proto__ = Employee.prototype;

var manager = new Manager();
manager.name = "Khaled";
manager.department = "IT";
manager.reports = 10;
manager.role = "Manager";

exports.Employee = Employee;
exports.Manager = Manager;