let number = 5;
let fruits = ['apple', 'banana', 'cherry'];
let person = { name: 'Alice', age: 25 };

// Using if, else if, and else
if (number > 10) {
    console.log('Number is greater than 10');
} else if (number === 10) {
    console.log('Number is equal to 10');
} else {
    console.log('Number is less than 10');
}

// Using switch
let fruit = 'banana';
switch (fruit) {
    case 'apple':
        console.log('This is an apple');
        break;
    case 'banana':
        console.log('This is a banana');
        break;
    case 'cherry':
        console.log('This is a cherry');
        break;
    default:
        console.log('Unknown fruit');
}

// Using while
let count = 0;
while (count < 3) {
    console.log("Count is :",count);
    count++;
}

// Using do while
let index = 0;
do {
    console.log("Index is :",index);
    index++;
} while (index < 3);

// Using for
for (let i = 0; i < 3; i++) {
    console.log("i is :",i);
}

// Using for...in
for (let key in person) {
    console.log(key,person[key]);
}

// Using for...of
for (let fruit of fruits) {
    console.log(fruit);
}
