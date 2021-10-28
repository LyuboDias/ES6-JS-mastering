// Process of constantly defining what things are. This is referred to as declarative programming.
// Combined with good variable names, it can be a powerful tool.
// So instead of giving the computer step by step instructions, we declare what it is we want and we assign this to the result of some process.

const passwords = [
 "123456",
 "password",
 "admin",
 "freecodecamp",
 "mypassword123",
];

// Imperatively, we would write:
let longPasswords = [];
for (let i = 0; i < passwords.length; i++) {
   const password = passwords[i];
   if (password.length >= 9) {
      longPasswords.push(password);
   }
}

console.log(longPasswords); // logs ["freecodecamp", "mypassword123"];


const getTotalFortuneOfTenRichest = (richPeople) => {
 richPeople.sort(
(first, second) => first.money - second.money
 );

 let sum = 0;

 for (let i = 0; i < richPeople.length; i++) {
     sum += richPeople[i].money;

     if (i >= 10) {
         return sum;
     }
 }
};

// Declaratave
const longPasswords = passwords.filter(password => password.length >= 9);

console.log(longPasswords); // logs ["freecodecamp", "mypassword123"]; 


const getTotalFortuneOfTenRichest = (richPeople) => (
 [...richPeople]
     .sort((first, second) => first.money - second.money)
     .slice(0, 10)
     .reduce((total, person) => total + person.money, 0)
);

// The functional programming methods in JavaScript enable us to cleanly declare things.

// This is a list of passwords.
// This is a list of only long passwords. (After running filter.)
// This is a list of passwords with ids. (After running map.)
// This is a single password. (After running find.)

// One of declarative programming’s strengths is that it forces us to ask what we want first. It is in the naming of these new things that our code becomes expressive and explicit.
// ------------------------------------------------------------------------------------

// CONST VARIABLES

// Since ECMAScript2015 you can use const and let to declare your variables. Using const when declaring your variable, you can prevent them from reassigning. For example, declaring sum as const sum would throw a TypeError telling us that we are trying to assign a value to a constant variable. Once you get used to writing pure functions, you will notice that there is no need to use let or var declarations. Instead, use constant variables everywhere as a standard to declare your variables.

// AVOID USAGE OF LOOPS

// JavaScript provides ways to get rid of loops. Declaring the flow of the application using loops means the code is imperative. If we want to write functional code:

// USE INSTEAD!

// MAP

// The map function is useful for transforming elements of our array to the desired shape. Most probably, if you have ever stored people data in database, you have saved their birth date instead of their age. If you want to display their age, you can use the map function to do so.
const convertBirthdateToAge = ({ birthdate, ...person }) => (
 { ...person, age: getAgeFromBirthdate(birthdate) }
);

people.map(convertBirthdateToAge);

// This executes provided function for every element in our array and returns a new array. The new array will contain the outputs of the convertBirthdateToAge function applied to the elements in the people array. The Map function takes a callback function which is applied for every element in an array and the result of that the callback function is appended to the result array. The callback function takes the currently processed element as the first argument and index of that element as the second argument. The index argument of callback can be used, for example, to add some identifier to the result array:

const addId = (element, index) => ({ ...element, id: index });

people
.map(convertToAge)
.map(addId);

// The map function is also useful for executing many asynchronous operations at once without waiting for the result each time.
const peopleSavers = people.map(saveToDatabase)
await Promise.all(peopleSavers)

// FILTER

// The Filter function is useful for filtering an array in a declarative way. The signature of filter function is almost the same as of the map function. The only difference is that it takes a callback whose output indicates whether the value should be included in the result array or not. If the return value of callback is a falsy value, the currently processed element will not be present in the output array. As a result, we get an array of values fulfilling condition checked by a callback function.
// As the output of both map function and filter function is array we can chain the calls and filter our array of people from previous example to contain only people that are at least 30 years old.
const isOlderThan30 = ({ age }) => age >= 30;

people
.map(convertToAge)
.filter(isOlderThan30);

// REDUCE

// Reduce is another function that might look complicated at first glance but it is really useful for writing functional code. Reduce operates on array and executes the callback function for each element accumulating the value. In the end, the accumulated values are returned as a result. We have an array of working hours which looks like this:
const workingHours = [
 {day: "MONDAY", startTime: 10, endTime: 15},
 {day: "TUESDAY", startTime: 10, endTime: 12},
 {day: "FRIDAY", startTime: 15, endTime: 21},
]
// To convert the array into an object which contains days as keys, we can use the reduce function. In reduce, the first parameter is the callback function, and the second parameter is the initial value. The first parameter to the callback function is the accumulator – a value returned from the callback on the previous element. The second parameter is the currently processed element.
workingHours.reduce((
 (previousValue, {day, ...hours}) => ({
     ...previousValue,
     [day]: hours
 })
), {})
// The output should look like that:

{
  MONDAY: { startTime: 10, endTime: 15 },
  TUESDAY: { startTime: 10, endTime: 12 },
  FRIDAY: { startTime: 15, endTime: 21 }
}

// CURRYING IN FUNCTIONS

// Currying is an important part of functional programming. It allows to call functions without specifying all the required parameters. This means you will not get the result, but another function letting us pass the missing parameters. The result of the function is returned when all of the arguments are passed. Currying is essential for building reusable functions. For example, we can implement it in this way:
const getContentTemplate = content => (
 user => (
   `Hello ${user}
   ${content}`
 )
);

const contentTemplate = getContentTemplate(`For your birthday we have gifted you 100 free points!`);
// We can now reuse the function for different users. For a template filled with user greeting we have to execute:

const templateForMark = contentTemplate(‘Mark’);
// Of course, we could also get the result instantly by calling:

getContentTemplate(template, user);

// Passing the template to the getContentTemplate function will only return another function that requires us to pass the user argument. Just after passing user string to the partial result, we will receive the final output like this:

// Hello Mark
// For your birthday we have gifted you 100 free points!


// HIGHER ORDER FUNCTIONS

// In JavaScript, functions are first class values, which means you can pass them as arguments, return them, and operate on them like any other variables. You know how to pass them as callbacks in functional array methods. You can return functions (or objects with functions as values) as shown in the section about currying. This gives a lot of possibilities with combination of JavaScript closures. In the example below findInDatabase is a function that is passed to the repositoryFor function.
const repositoryFor = (entity, findInDatabase) => {
 const MAX_RECORDS_LIMIT = 100;
 return {
     findAll: (filter) => (
findInDatabase(
entity, 
{ ...filter, limit: MAX_RECORDS_LIMIT }
)
),
 };
};

// The object returned from the repositoryFor method has access to its closure and since it is enclosed in the repositoryFor method, it has access to the MAXRECORDSLIMIT variable.

// With this knowledge, you can try to implement simple caching (known also as memoization) mechanism on your own. The cache could be stored in the repositoryFor method and all the methods could first check the cache, and return the cached value if found. Try to make use of functions as first class values and avoid duplication using function composition. Cached function could be decorated as cached(findInDatabase).
