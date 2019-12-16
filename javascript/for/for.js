// let numb = 28;
// // check number is a perfect number, or not.
// let sum = 0;

// for (let i = 1; i < numb; i++) {
//     if (numb % i == 0) {
//         sum += i;
//     }
// }

// if (sum == numb) {
//     console.log(`${numb} is a perfect number`);
// // }

// let numb = 0;
// let numbSqrt = Math.sqrt(numb);
// let isPrimeNumber = true;

// for (let i = 2; i <= numbSqrt; i++) {
//     if (numb % i == 0) {
//         isPrimeNumber = false;
//         break;
//     }
// }

// if (numb > 1 && isPrimeNumber) {
//     console.log(`${numb} is a prime number`);
// } else {
//     console.log(`${numb} is not a prime number`);
// }

const fruits = ['Apple', 'Banana', 'Orange'];

// for in, for of

// for (index in fruits) {
//     console.log(index);
//     console.log(fruits[index]);
// }

// for (eachFruit of fruits) {
//     console.log(eachFruit);
// }

const person = {
    name: 'David',
    age: 18
};

for (key in person) {
    console.log(key);
    // console.log(person.key);
    console.log(person[key]);
}

for (element of person) {
    console.log(element);
}
