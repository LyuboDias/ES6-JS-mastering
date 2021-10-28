//  double equal  ==

// Seemingly different values equate to true when compared with == (loose or abstract equality) because JavaScript (effectively) converts each to a string representation before comparison:

// all true
1 == '1';
1 == [1];
'1' == [1];





// triple equal ===

// A more obvious false result occurs when comparing with === (strict equality) because the type is considered:

// all false
1 === '1';
1 === [1];
'1' === [1];


// Internally, JavaScript sets a value to one of seven primitive data types:

// Undefined (a variable with no defined value)
// Null (a single null value)
// Boolean (a true or false value)
// Number (this includes Infinity and NaN — not a number!)
// BigInt (an integer value larger than 2^53 – 1)
// String (textual data)
// Symbol (a unique and immutable primitive new to ES6/2015)
// Everything else is an Object — including arrays.
// -----------------------------------------------------------------------------
// Truthy and Falsy Values in JavaScript

// As well as a type, each value also has an inherent Boolean value, generally known as either truthy or falsy

// The following values are always falsy:

// false
// 0 (zero)
// -0 (minus zero)
// 0n (BigInt zero)
// '', "", `` (empty string)
// null
// undefined
// NaN

// Everything else is truthy. That includes:

// '0' (a string containing a single zero)
// 'false' (a string containing the text “false”)
// [] (an empty array)
// {} (an empty object)
// function(){} (an “empty” function)

if (value) {
 // value is truthy
}
else {
 // value is falsy
 // it could be false, 0, '', null, undefined or NaN
}

// --------------------------------------------------------------------------

// Loose Equality Comparisons with ==
// Unexpected situations can occur when comparing truthy and falsy values using the == loose equality:

// The rules:

// false, zero and empty strings are all equivalent.
// null and undefined are equivalent to themselves and each other but nothing else.
// NaN is not equivalent to anything — including another NaN!.
// Infinity is truthy — but cannot be compared to true or false!.
// An empty array is truthy — yet comparing with true is false and comparing with false is true?!.

// Examples:

// all true
// false == 0;
// 0 == '';
// null == undefined;
// [] == false;
// !![0] == true;

// all false
// false == null;
// NaN == NaN;
// Infinity == true;
// [] == true;
// [0] == true;
// ---------------------------------------------------------------------------

// Strict Equality Comparisons with ===
// The situation is clearer when using a strict comparison because the value types must match:

// The only exception is NaN, which remains stubbornly inequivalent to everything.
// ------------------------------------------------------------------------------

// Recommendations for Working with Truthy or Falsy Values

// 1. Avoid direct comparisons
// It’s rarely necessary to compare two truthy and falsy values when a single value will always equate to true or false:
// instead of
if (x == false) // ...
// runs if x is false, 0, '', or []

// use
if (!x) // ...
// runs if x is false, 0, '', NaN, null or undefined

// 2. Use === strict equality
// Use a === strict equality (or !== strict inequality) comparisons to compare values and avoid type conversion issues:

// instead of
if (x == y) // ...
// runs if x and y are both truthy or both falsy
// e.g. x = null and y = undefined

// use
if (x === y) // ...
// runs if x and y are identical...
// except when both are NaN

// 3. Convert to real Boolean values where necessary
// You can convert any value to a real Boolean value in JavaScript using either the Boolean constructor, or a double-negative !!. This will allow you to be absolutely certain a false is generated only by false, 0, "", null, undefined and NaN:

// instead of
if (x === y) // ...
// runs if x and y are identical...
// except when both are NaN

// use
if (Boolean(x) === Boolean(y)) // ...
// or
if (!!x === !!y) // ...
// runs if x and y are identical...
// including when either or both are NaN

const truthy_values = [
 false,
 0,
 ``,
 '',
 "",
 null,
 undefined,
 NaN,
 '0',
 'false',
 [],
 {},
 function() {}
].filter(Boolean);

// Filter out falsy values and log remaining truthy values
console.log(truthy_values);
