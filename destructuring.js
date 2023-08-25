/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */
// ES6 provides a more elegant way to assign variables, called destructuring

// assignement without destructuring the array

let ages = [30, 26, 27, 43];// this method doesn't use destructuring
let bobby = ages[0];
let john = ages[1];
let mary = ages[2];
let joe = ages[3];
console.log(bobby, john, mary, joe);

// Destructuring arrays
let ages1 = [30, 26, 27, 43];

let [bob, johnny, maria, josephine] = ages1;

console.log(bobby, john, mary, joe);

// Destructuring objects
let jobs = {
  mike: 'designer',
  jill: 'developer',
  alicia: 'accountant'
};
let {mike, jill, alicia} = jobs;
console.log(jobs);
console.log(mike, jill, alicia);
/*by putting the square brackets or curly braces on 
the left side of the expression,  
ES6 understands that you are trying to create  
three separate variables using destructuring. 
*/

// Destructuring subsets
let languages = ['english', 'french', 'spanish', 'german', 'japanese'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary); /*here the first 2 values of the array
 are assigned to the two new variables johnNative and johnSeconday*/

/* you can also skip values by leaving a comma (,)
in place of the values you want to skip*/
// let's assign spanih and german to mary
let [, , maryNative, marySecondary] = languages; 
// the 2 commas in the square brackets skip the 2 first values in the array
console.log(maryNative, marySecondary);

  // when working with objects, destructuring subsets is even easier. see the example

let languages2 = {
  firstLanguage: 'english',
  secondLanguage: 'french',
  thirdLanguage: 'german',
  fourthLanguage: 'japanese'
};
    /*Since the values in an object are represented by their property names,
     I can destructure only the things I need, see below */
let {firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];
let [favorite, secondFavorite, ...otherFruit] = fruits;
console.log(favorite, secondFavorite, ...otherFruit);
console.log(favorite);
console.log(secondFavorite);
console.log(otherFruit);

    // same but with people 

let people = {
  brian: 'pizza of all kind',
  anna: 'italian food',
  sarah: 'asian food',
  andrea: 'steak'
};
let {brian, anna, ...foodRest} = people;
console.log(brian);
console.log(anna);
console.log(foodRest);
console.log(brian, anna, foodRest);

// challenge on destructuring
let students = [
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 80, art: 95},
  },
  {
      name: 'John',
      subjects: ['art', 'cad', 'english', 'maths', 'science'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, maths: 77, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];

const makeList = (arr, student) => {
  for (let item of arr) {
      if (item.name === student) {
          return item.subjects
      }
  }
};
  /* -Declare a variable named: makeList using the keyword const
-The variable makeList should be assigned an arrow function
-The arrow function should take two parameters named: arr, student
-The arrow function should use a return statement
-The function should return an array of the subjects for the student
 whose name is passed into the function when called.
-Using destructuring on the return value from calling the function
 and passing in the students array,  and the string John, 
 create 3 variables named: first, second, rest using the keyword let
log out the values  first, second, and rest to view their values*/
let [first, second, ...rest] = makeList(students, 'John');
console.log(first);
console.log(second);
console.log(rest);
