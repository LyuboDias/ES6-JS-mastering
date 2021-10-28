function getValues() {
 return [1, 2];
}

let [x, y, z] = getValues();

console.log(x); // 1
console.log(y); // 2
console.log(z); // undefined

// The variables x, y and z will take the values of the first, second, and third elements of the returned array.

// Note that the square brackets [] look like the array syntax but they are not.

// If the getValues() function returns an array of two elements, the third variable will be undefined, like this:

// In case the getValues() function returns an array that has more than three elements, the remaining elements are discarded. For example:

//----------------------------------------------------------------------------------------------------
// we can take all remaining elements of an array and put them in a new array by using the rest syntax (...):

let [x, y ,...args] = getValues();
console.log(x); // 1
console.log(y); // 2
console.log(args); // [3, 4]

//-----------------------------------------------------------------------------------
// we can set default values like so: 
let anotherValue = value[2] != undefined ? value[2] : 0;

console.log(anotherValue); // 0
// we check if the third element exists in the array. If not, assign the value 0 to the anotherValue variable

// we can do the destructuring assignment with a default value:
let [, , anotherValue = 0] = getValues();

console.log(anotherValue); // 0

// If the value taken from the array is undefined, we can assign the variable a default value, like this:
let a, b;
[a = 1, b = 2] = [10];
console.log(a); // 10
console.log(b); // 2

// If the getValues() function doesn’t return an array and you expect an array, we can solve this with fallback the returned value of the getValues() function to an empty array like this:
function getValues() {
 return null;
}

let [a = 10, b = 20] = getValues() || [];

console.log(a); // 10
console.log(b); // 20

//----------------------------------------------------------------------------------------
//  nested array destructuring syntax:
function getProfile() {
 return [
     'John',
     'Doe',
     ['Red', 'Green', 'Blue']
 ];
}

let [
 firstName,
 lastName,
 [
     color1,
     color2,
     color3
 ]
] = getProfile();

console.log(color1, color2, color3); // Red Green Blue

//--------------------------------------------------------------------------------------------

// Swapping variables, array destructuring makes it easy to swap values of variables without using a temporary variable:

let a = 10, 
    b = 20;

[a, b] = [b, a];

console.log(a); // 20
console.log(b); // 10

// Functions that return multiple values
function stat(a, b) {
 return [
     a + b,
     (a + b) / 2,
     a - b
 ]
}

// Use array destructuring assignment syntax to destructure the elements of the return array into variables:
let [sum, average, difference] = stat(20, 10);
console.log(sum, average, difference); // 30, 15, 10