# Baics Concept

## Why Use TypeScript

### Problems in untyped/dynamically typed languages

A function that displays a user's data

```javascript
function displayUserInformation(user){
  return `${user.name} - ${user.email}`;
}
export default displayUserInformation;
```

Suppose, after 3 months that this function is not used, a new developer will perform maintenance:  
_Include the user's city and state information_

But...

- What is expected to return from the user object?
- Already has email in the object by default?
- Is ```javascript user.city``` or ```javascript user.address.city```?
- Are City and State mandatory?
- Otherwise I have to treat the erros.
- Do I need to ```javascript console.log``` the function?
- But, wherever this function is called, does it return the same data?

### Pros

- Great IntelliSense
Auto completing your objects methods and attributes

### Myths and Truths

- TypeScript decreases productivity
__True__ if the developer is not used to code with typed languages, such as JavaScript and PHP
__False__ if the developer is used to code in typed language, such as Java and C#

- TypeScript transform JavaScript in C# or Java
__False__, JavaScript still the same JavaScript, but with _'super powers'_

- TypeScript replaces JavaScript
__False__, TypeScript is based on JavaScript, if JS has some big updates it affects TS
