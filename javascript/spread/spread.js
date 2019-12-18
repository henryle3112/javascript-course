const fullName = ['ABC', 'DEF'];

function printFullName(firstName, lastName, middleName) {
    console.log(`${firstName} ${middleName} ${lastName}`);
}

// printFullName('A', 'B');

printFullName(...fullName);

const fruits1 = ['Apple', 'Orange'];

const fruits2 = ['Banana'];

const allFruits = [...fruits1, ...fruits2];

console.log(allFruits);
