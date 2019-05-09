// Balanced parentheses (20 mins)

// CHALLENGE

// Write a function called `balanced` that accepts
// 1 string with only 6 valid cahracters ({}[]()). The function
// should return true or false if the string has blanaced characters
// e.g. `balanced('((({}[])))') ===> true`
// Consider all brackets, parenthesis and curly braces should be i order
// For example '(}{)' This should return false but '({})' should return true

// EXAMPLES

// balanced('()') => true
// balanced('()(') => false
// balanced('()()') => true
// balanced('({})') => true
// balanced('(([{}]{}))) => true
// balanced('{}[](}{})') => false

// TESTING YOUR SOLUTION

// To test your solution, run 'npm install' in the root directory
// and then run 'npm test' to run the automated tests.

// SUBMITTING YOUR SOLUTION

// When done, make sure you're working on a forked repo, push your
// changes to your forked repo and submit a pull request.

const balanced = str => {
  // your code here. Enjoy the music.
  let bracketsOpened = 0;
  let bracesOpened = 0;
  let arrayBrackets = 0;

  bracketsOrBraces = str.match(/[\[(){}\]]/g);
  for (i =0 ; i<bracketsOrBraces.length; i++){
      
      if (bracketsOrBraces[i]==='(' ){
      if (bracketsOpened>=0) {
      bracketsOpened++;}
      } 
      else if (bracketsOrBraces[i]==='{') {
      if (bracesOpened>=0) {
        bracesOpened++;}
      }
      else if (bracketsOrBraces[i]==='['){
      if (arrayBrackets>=0) {
        arrayBrackets++;
      }  
      }
      else if (bracketsOrBraces[i]==='}') {
        bracesOpened--;
        }
      else if (bracketsOrBraces[i]===']'){
        arrayBrackets--;
      }
      else if (bracketsOrBraces[i]===')'){

        bracketsOpened--;
      }

    
  }
  
console.log(bracketsOpened, 'brackets');
console.log(bracesOpened, 'braces');
console.log(arrayBrackets, 'array');

if (bracketsOpened !== 0 |bracesOpened !==0 | arrayBrackets!==0) return false;
return true;

  
  
};

module.exports = balanced;
