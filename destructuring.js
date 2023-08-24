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



// Using rest parameter syntax
