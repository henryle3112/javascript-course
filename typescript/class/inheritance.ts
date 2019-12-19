class Animal {
    move(): void {
        console.log('Move! Move! Move!');
    }
}

class Cat extends Animal {
    eat() {
        console.log('Eat! Eat! Eat!');
    }
}

const cat = new Cat();
cat.move();
cat.eat();