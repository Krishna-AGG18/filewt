// 1. Using Object Literal
const personLiteral = {
    name: 'Alice',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

// 2. Creating an Instance Directly
const carInstance = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2021,
    displayInfo: function() {
        console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}`);
    }
};

// 3. Using an Object Constructor
function Animal(type, name) {
    this.type = type;
    this.name = name;
    this.introduce = function() {
        console.log(`I am a ${this.type} named ${this.name}.`);
    };
}

const dog = new Animal('Dog', 'Buddy');

// Using the objects
personLiteral.greet(); // Output: Hello, my name is Alice and I am 30 years old.
carInstance.displayInfo(); // Output: Car: Toyota Camry, Year: 2021
dog.introduce(); // Output: I am a Dog named Buddy.
