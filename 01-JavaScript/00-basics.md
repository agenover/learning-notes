## 1. const vs let, var

 - They all help define how variables will work in JS;
 - var is the older version of them, and let and const are newer and the ones preferred to be used to create variables;

 - Differences:
   - var declaration --> can be re-declared and updated
   - let declaration --> can be updated but not re-declared
   - const declaration --> cannot be updated or re-declared
   - 
 - SCOPE: global, function, block-scope
   - It refers to where the variable is avaible once is declared
   - Global: if the variable is declared as var and is outside the function it will be available from anywhere
   - Function: if the variable is declared as var and is inside a function it will only be available from inside that function 
   - Block-scope: if the variable is declared with the let or const keyword have block scope. In JavaScript, block scope variables will be available inside subsections of code marked by curly braces. That means not just inside functions but also within if or switch conditions, as well as for and while loops
  
 - Lexical scope = means that a variable declared in a parent, like a global variable is also accessible inside the children scopes
 
 - Hoisting:There's an extra step that happens when the browser loads your code. Before it runs, JavaScript analyzes and prepares your code for running. Think of it like a nurse preparing and reorganizing things before an operation. One thing that happens during this phase is called hoisting. Variables and function declarations are moved to the top of their scope. If they're not initialized, variables using a var declaration will be given a value of undefined.

---
***

2. void, null, empty
3. Truthiness
4. Ternary Operator
5. Modulus
6. Nullish Coalescing Oparetor
7. try... catch
8. Transpiling
9.  Spread Syntax
10. Promises
11. Async/Await