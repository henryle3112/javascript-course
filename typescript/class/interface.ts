interface Animal {
    move(): void;
}

class Elephant implements Animal {
    move() {
        console.log(`Elephant move!`);
    }
}

const elephant = new Elephant();
elephant.move();