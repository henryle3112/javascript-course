class Animal {
    constructor(name) {
        this.name = name;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Animal2 {

}

class Cat extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    showCatInfo() {
        console.log(`${this.name} - ${this.age}`);
    }
}

const cat = new Cat('Cat', 1);
cat.showCatInfo();