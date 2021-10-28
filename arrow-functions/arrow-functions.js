// function expression
let add = function (x, y) {
	return x + y;
};

console.log(add(10, 20)); // 30

// arrow function
let add = (x, y) => x + y;

console.log(add(10, 20)); // 30;
// if we use the block syntax, you need to specify the return keyword:
let add = (x, y) => { return x + y; };

// arrow function with multiple params
let numbers = [4,2,6];
numbers.sort((a,b) => b - a);
console.log(numbers); // [6,4,2]

// with single param syntax can be shorten as follow:
// Note that we can omit the parentheses
let lengths = names.map(name => name.length);

// If the arrow function has no parameter, you need to use parentheses, like this:

() => { statements }

// JavaScript DOESN`T allow you to have a line break between the parameter definition and the arrow (=>) in an arrow function.

// JavaScript ALLOWS you to have line breaks between parameters

// If you use an expression in the body of an arrow function, you don’t need to use the curly braces.

let square = x => x * x;

// However, if you use a statement, you must wrap it inside a pair of curly braces as in the following example:

let except = msg => {
 throw msg;
};

// Since both block and object literal use curly brackets, the JavasScript engine cannot distinguish between a block and an object.

// To fix this, you need to wrap the object literal in parentheses as follows:

let setColor = color => ({value: color });


// Arrow function vs. regular function

// 1- First, in the arrow function, the this, arguments, super, new.target are lexical. It means that the arrow function uses these variables (or constructs) from the enclosing lexical scope.
// 2- Second, an arrow function cannot be used as a function constructor. If you use the new keyword to create a new object from an arrow function, you will get an error.

// It is a good practice to use arrow functions for callbacks and closures because the syntax of arrow functions is cleaner.

// An arrow function doesn’t have its binding to this or super.

// An arrow function doesn’t have arguments object, new.target keyword, and prototype property.