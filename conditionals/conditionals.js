// TRUE (true):
// This function takes two arguments and will always return the first argument. In comparison, the FALSE function does the same, but always returns the second argument. These functions are also known as selectFirst and selectSecond in other languages.
const TRUE = (x, y) => x

TRUE('foo', 'bar') // => 'foo'
TRUE(10, 5) // => 10

// FALSE (false):
// Almost identical to the TRUE function, but returns the second argument rather than the first.
const FALSE = (x, y) => y

FALSE('foo', 'bar') // => 'bar'
FALSE(10, 5) // => 5

// --------------------------------------------------------------------------------------------------
// Conditional (cond):

// Conditional Statement
// Expression when true
// Expression when false

// To mimic this, we will create a function that takes 3 arguments and returns the conditional function with both expressions applied. If you notice, we place the conditional last rather than first. This is a functional programming convention that helps when creating partially applied functions.

const cond = (isTrue, isFalse) => (conditional) =>
  conditional(isTrue, isFalse)

// use partial application to store the first two arguments and return a function ready to accept the last
const trueOrFalse = cond('This is true.', 'This is false.')
trueOrFalse(TRUE) // => 'This is true.'
trueOrFalse(FALSE) // => 'This is false.'

// The follow will not work, we must use the defined TRUE and FALSE functions
trueOrFalse(true) // => TypeError: conditional is not a function
trueOrFalse(false) // => TypeError: conditional is not a function
// --------------------------------------------------------------------------------------

// Not (!)
// This is the first logical operator we will define. It takes a single argument: x. If x is TRUE it returns FALSE, if x is FALSE it returns TRUE. We make use of the previously defined cond function to handle the conditional logic. Within the conditional: if x is TRUE we return FALSE otherwise we return TRUE .
const not = (x) => cond(FALSE, TRUE, x)

not(FALSE) // => TRUE
not(TRUE) // => FALSE
cond('Foo', 'Bar', not(TRUE)) // => 'Bar'
// --------------------------------------------------------------------------------------------

// Or (||)
// This is the first logical operator we will define. It takes 2 arguments: x and y. If either x or y is TRUE, we will return TRUE, otherwise we return FALSE. Again, we use the cond function to handle this. Within the conditional: if x is TRUE we return TRUE otherwise we return y .
const or = (x, y) => cond(TRUE, y, x)

or(TRUE, FALSE) // => TRUE
or(FALSE, FALSE) // => FALSE
or(FALSE, TRUE) // => TRUE
or(TRUE, TRUE) // => TRUE
// ---------------------------------------------------------------------------------------------

// And (&&)
// This function takes 2 arguments: x and y. Both x and y must be TRUE for this to return TRUE, otherwise it will return FALSE. We make use of the cond function again, not much is different. Within the conditional: if x is TRUE we return y otherwise we return FALSE.
const and = (x, y) => cond(y, FALSE, x)

and(TRUE, FALSE) // => FALSE
and(FALSE, TRUE) // => FALSE
and(FALSE, FALSE) // => FALSE
and(TRUE, TRUE) // => TRUE
// -----------------------------------------------------------------------------------------

// Equal (==)
// This function takes 2 arguments: x and y. Both x and y must be the same value for this to return TRUE otherwise it returns FALSE. We need to use the cond function and the not function to handle this one! Within the conditional: if x is TRUE we return y otherwise we return not(y)to only return TRUE when y is also FALSE.

const equal = (x, y) => cond(y, not(y), x)

equal(TRUE, FALSE) // => FALSE
equal(FALSE, TRUE) // => FALSE
equal(FALSE, FALSE) // => TRUE
equal(TRUE, TRUE) // => TRUE
// ---------------------------------------------------------------------------------------

// Not Equal (!=)
// This function takes 2 arguments: x and y. x and y must not be the same value for this to return TRUE, otherwise FALSE is returned.
const notEqual = (x, y) => cond(not(y), y, x)

notEqual(TRUE, FALSE) // => TRUE
notEqual(FALSE, TRUE) // => TRUE
notEqual(FALSE, FALSE) // => FALSE
notEqual(TRUE, TRUE) // => FALSE