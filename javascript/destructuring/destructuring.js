const fruits = ['Apple', 'Orange', 'Banana'];
let [fruit1, fruit2, fruit3, fruit4] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
console.log(fruit4);

const person = {
    name: 'David',
    age: 18
};

let { name, age, address = 'ABC' } = person;

console.log(name);
console.log(age);
console.log(address);