"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getRole = function () {
    };
    Person.prototype.getInfo = function () {
        return 'My name is ' + this.name + '. I am a ' + this.getRole() + '.';
    };
    return Person;
}());
exports.Person = Person;
var Student = (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.getRole = function () {
        return 'Student';
    };
    Student.prototype.getInfo = function () {
        return 'My name is ' + this.name + '. I am a ' + this.getRole() + '.';
    };
    return Student;
}(Person));
exports.Student = Student;
var Staff = (function (_super) {
    __extends(Staff, _super);
    function Staff() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Staff.prototype.getRole = function () {
        return 'Staff';
    };
    Staff.prototype.getInfo = function () {
        return 'My name is ' + this.name + '. I am a ' + this.getRole() + '.';
    };
    return Staff;
}(Person));
exports.Staff = Staff;
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, subject) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.subject = subject;
        return _this;
    }
    Teacher.prototype.getInfo = function () {
        return 'My name is ' + this.name + '. I am a ' + this.getRole() + '. I teach ' + this.subject + '.';
    };
    return Teacher;
}(Staff));
exports.Teacher = Teacher;
