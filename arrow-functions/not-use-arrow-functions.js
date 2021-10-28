// An arrow function doesn’t have its own this value and the arguments object. Therefore, you should not use it as an event handler, a method of an object literal, a prototype method, or when you have a function that uses the arguments object.

// Event handlers

// In an input, once users type their usernames, you capture the current value of the input and update it to the <div> element:

const greeting = document.querySelector('#greeting');
const username = document.querySelector('#username');
username.addEventListener('keyup', () => {
  greeting.textContent = 'Hello ' + this.value;
});
// However, when you execute the code, you will get the following message regardless of whatever you type:

Hello undefined

// To fix this issue, you need to use a regular function instead. The this value will be bound to the <input> element that triggers the event.

username.addEventListener('keyup', function () {
    input.textContent = 'Hello ' + this.value;
});

// ----------------------------------------------------------------------------------------

// Object methods
const counter = {
 count: 0,
 next: () => ++this.count,
 current: () => this.count
};

console.log(counter.next());
// it returns NaN.

// The reason is that when you use the arrow function inside the object, it inherits the this value from the enclosing lexical scope which is the global scope in this example.

// The this.count inside the next() method is equivalent to the window.count (in the web browser).

// The window.count is undefined by default because the window object doesn’t have the count property. The next() method adds one to undefined that results in NaN.

// To fix this, you use regular functions as the method of a object literal as follows:
const counter = {
 count: 0,
 next() {
     return ++this.count;
 },
 current() {
     return this.count;
 }
};
// --------------------------------------------------------------------------------------

// Prototype methods
// See the following Counter object that uses the prototype pattern:
function Counter() {
 this.count = 0;
}

Counter.prototype.next = () => {
 return this.count;
};

Counter.prototype.current = () => {
 return ++this.next;
}

// The this value in these next() and current() methods reference the global object.
// Fix:
function Counter() {
 this.count = 0;
}

Counter.prototype.next = function () {
 return this.count;
};

Counter.prototype.current = function () {
 return ++this.next;
}
// -------------------------------------------------------------------------------------------

// Functions that use the arguments object
// Arrow functions don’t have the arguments object. Therefore, if you have a function that use arguments object, you cannot use the arrow function.

// For example, the following concat() function won’t work:

const concat = (separator) => {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
}

// Instead, you use a regular function like this:

function concat(separator) {
 let args = Array.prototype.slice.call(arguments, 1);
 return args.join(separator);
}

// Summary
// An arrow function doesn’t have its own this value. Instead, it uses the this value of the enclosing lexical scope. An arrow function also doesn’t have the arguments object.
// Avoid using the arrow function for event handlers, object methods, prototype methods, and functions that use the arguments object.