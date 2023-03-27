What is TRUTHY and what is FALSY:

truthy --> 1, 'something', true

falsy --> 0, '', undefined, null, false

---

Examples:

```
const { secondsInDay } = require("date-fns")

if (1 && undefined) {
 
}
```

Only checks the first expression if false, if first expression is truthy it then checks the second expression. 
If the second expression is falsy it return the falsy expression and never run the if




```
if (1 || 1) {

}
```

Checks both expressions to see if both are falsy

if first expression is truthy never reads the second expression, and run the code

if first expression is falsy checks the second expression to see if it is falsy or truthy:

- if second expression is falsy: doesn't run the code and return falsy expression
- if second expression is truthy it does run the code because it has returned the truthy expression
