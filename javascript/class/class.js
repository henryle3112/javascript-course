class Student {
    constructor(name, age, university) {
        this.name = name;
        this.age = age;
        this.university = university;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setAge(age) {
        this.age = age;
    }

    getAge() {
        return this.age;
    }

    setUniversity(university) {
        this.university = university;
    }

    getUniversity() {
        return this.university;
    }

    showPersonalInfo() {
        console.log(`${this.name} - ${this.age} - ${this.university}`);
    }

}

const student = new Student('Nguyen Van A', 18, 'DH Thuy Loi');
console.log(student.getUniversity());
student.showPersonalInfo();