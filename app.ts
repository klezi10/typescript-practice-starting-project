//unknown type - we don't know what it will be
//can't store any value that won't be getting errors - different than any
//same as if we said let userInput;
let userInput: unknown;

userInput = 5;
userInput = 'Judy'

console.log(userInput)

//will run into issues if we use that var like:
let userName: string;

// userName = userInput;

//to be able to use it, need an extra check like:
if (typeof userInput === 'string') {
    userName = userInput;
}