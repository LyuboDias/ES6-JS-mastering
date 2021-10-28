// object literal with two properties
let person = {
 firstName: 'John',
 lastName: 'Doe'
};

// destructuring 
let { firstName, lastName } = person;

console.log(firstName); // 'John'
console.log(lastName); // 'Doe'

// Setting default values
let person = {
 firstName: 'John',
 lastName: 'Doe',
 currentAge: 28
};

let { firstName, lastName, middleName = '', currentAge: age = 18 } = person;

console.log(middleName); // ''
console.log(age); // 28

// Destructuring a null object
function getPerson() {
 return null;
}

// to avoid error use  OR operator (||) to fallback the null object to an empty object:
let { firstName, lastName } = getPerson() || {};
// Now, no error will occur. And the firstName and lastName will be undefined.

// Nested object destructuring
let employee = {
 id: 1001,
 name: {
     firstName: 'John',
     lastName: 'Doe'
 }
};

// The following statement destructures the properties of the nested name object into individual variables:
let {
 name: {
     firstName,
     lastName
 }
} = employee;

console.log(firstName); // John
console.log(lastName); // Doe

// It’s possible to do multiple assignement of a property to multiple variables:
let employee = {
 id: 1001,
 name: {
     firstName: 'John',
     lastName: 'Doe'
 }
};

let {
 name: {
     firstName,
     lastName
 },
 name
} = employee;

console.log(firstName); // John
console.log(lastName); // Doe
console.log(name); // { firstName: 'John', lastName: 'Doe' }

// Destructuring function arguments
// function that displays the person object:
let display = (person) => console.log(`${person.firstName} ${person.lastName}`);

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

display(person);

// It’s possible to destructure the object argument passed into the function like this:
let display = ({firstName, lastName}) => console.log(`${firstName} ${lastName}`);

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

display(person);