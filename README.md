# Algo Rithms Challenge // Absolute value difference

- [Algo Rithms Challenge // Absolute value difference](#algo-rithms-challenge--absolute-value-difference)
  - [1. Getting started](#1-getting-started)
  - [2. Challenge](#2-challenge)
    - [2.1. Examples](#21-examples)
    - [2.2. Testing your solution](#22-testing-your-solution)
    - [2.3. Submitting your solution](#23-submitting-your-solution)

## 1. Getting started
  `/github.com/dario-valles/algo-balanced-brackets-.git`

Fork this repo and then `git clone` your forked repo to your computer.
Once you're happy with your solution, `git push` and submit a pull request at
`https://github.com/dario-valles/algo-balanced-brackets`.

## 2. Challenge
Write a function called `balanced` that accepts 1 string content on string will only contain the following char acters **'{}[]()'**.  The function should return true or false if the string has blanaced characters

e.g. `balanced('((({}[])))') ===> true`

Consider all brackets, parenthesis and curly braces should be i order for example '(}{)' should return false but '({})' should return true


### 2.1. Examples

```js
Input               =>                  Output
---------------------------------------------------------------
balanced('()')                        === true
balanced('()(')                       === false
balanced('()()')                      === true 
balanced('({})')                      === true
balanced('(([{}]{}))')                === true
balanced('{}[](}{})')                 === false
```

### 2.2. Testing your solution
To test your solution, run `npm i` in the root directory
and then run `npm t` to run the automated tests.

### 2.3. Submitting your solution

To submit your solution:

1. If you're working on a forked repo, push your changes to your forked repo and submit a pull request to this repo.
