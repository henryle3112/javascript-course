const printFullName = (firstName, lastName) => {
    console.log(`${firstName} - ${lastName}`);
}

printFullName('ABC', 'DEF');

const sum = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
}

const sum2 = (firstNumber, secondNumber) => firstNumber + secondNumber;
console.log(sum2(2, 3));

const greeting = name => console.log(`Hello ${name}`);
greeting('David');

const isPrimeNumber = (number) => {
    if (number < 2) return false;
    let numberSqrt = Math.sqrt(number);
    for (let i = 2; i <= numberSqrt; i++)
        if (number % i == 0) return false;
    return true;
};

const n = 100;
for (let i = 1 ; i <= n ; i++)
    if (isPrimeNumber(i)) console.log(`i is a prime number`);

if (isPrimeNumber(6)) console.log(`6 is a prime number`);
