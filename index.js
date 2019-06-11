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
  let curly = 0;
  let bracket = 0;
  let paran = 0;
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') curly++;
    if (str[i] === '}') curly--;
    if (str[i] === '[') bracket++;
    if (str[i] === ']') bracket--;
    if (str[i] === '(') paran++;
    if (str[i] === ')') paran--;
    if (curly < 0 || bracket < 0 || paran < 0) return false;
  }
  if (curly === 0 && bracket === 0 && paran === 0)  return true;
  else return false;
};

module.exports = balanced;
