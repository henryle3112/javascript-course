var Student = /** @class */ (function () {
    function Student(name, age, university) {
        this.name = name;
        this.age = age;
        this.university = university;
    }
    Student.prototype.getPersonalInfo = function () {
        return this.name + " - " + this.age + " - " + this.university;
    };
    return Student;
}());
var student1 = new Student('Nguyen Van A', 18, 'ABC');
var student2 = new Student('Nguyen Van B', 19, 'ABC');
var student3 = new Student('Nguyen Van C', 20, 'ABC');
// gia su sinh vien dau tien co tuoi lon nhat
var selectedStudent = student1;
if (student2.age > selectedStudent.age) {
    selectedStudent = student2;
}
if (student3.age > selectedStudent.age) {
    selectedStudent = student3;
}
console.log(selectedStudent.getPersonalInfo());
