class Student {
    name: string;
    age: number;
    university: string;

    constructor(name: string, age: number, university: string) {
        this.name = name;
        this.age = age;
        this.university = university;
    }

    getPersonalInfo() {
        return `${this.name} - ${this.age} - ${this.university}`;
    }
}
const student1 = new Student('Nguyen Van A', 18, 'ABC');
const student2 = new Student('Nguyen Van B', 19, 'ABC');
const student3 = new Student('Nguyen Van C', 20, 'ABC');

// gia su sinh vien dau tien co tuoi lon nhat
let selectedStudent = student1;

if (student2.age > selectedStudent.age) {
    selectedStudent = student2;
}
if (student3.age > selectedStudent.age) {
    selectedStudent = student3;
}
console.log(selectedStudent.getPersonalInfo());