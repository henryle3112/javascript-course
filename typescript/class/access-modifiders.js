var ToshibaStudent = /** @class */ (function () {
    function ToshibaStudent(name, age) {
        this.name = name;
        this.age = age;
    }
    ToshibaStudent.prototype.setName = function (name) {
        this.name = name;
    };
    ToshibaStudent.prototype.getName = function () {
        return this.name;
    };
    ToshibaStudent.prototype.setAge = function (age) {
        this.age = age;
    };
    ToshibaStudent.prototype.getAge = function () {
        return this.age;
    };
    return ToshibaStudent;
}());
var student = new ToshibaStudent('Nguyen Van A', 18);
console.log(student.getName());
