const name = 'Anita';
let age = 25;
const hobbies = true;

age = 26;

//basic way to defining function
function summarizeUser(userName, userAge, userHobbies)
{
    return (
            'User name is: ' + 
            userName + 
            ', user age is: ' + 
            userAge + 
            ', and user has hobbies: ' + 
            userHobbies
        );
}

//define function as anonymous on the right, and implicitly assign it a name 
const summarizeUser1 = function (userName, userAge, userHobbies)
{
    return (
            'User name is: ' + 
            userName + 
            ', user age is: ' + 
            userAge + 
            ', and user has hobbies: ' + 
            userHobbies
        );
}

//define function as arrow function 
const summarizeUser2 = (userName, userAge, userHobbies) =>
{
    return (
            'User name is: ' + 
            userName + 
            ', user age is: ' + 
            userAge + 
            ', and user has hobbies: ' + 
            userHobbies
        );
}

//arrow function with only return - other syntax
const add = (a, b) => a + b;

//arrow function one parameter 
const addOne = a => a + 1;

//arrow function no parameters
const addRandom = () => 1 + 2;

console.log(summarizeUser(name, age, hobbies));
console.log(summarizeUser1(name, age, hobbies));
console.log(summarizeUser2(name, age, hobbies));

console.log(add(1, 2));
console.log(addOne(1));
console.log(addRandom());