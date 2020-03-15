//crating object key-value pairs
const person = 
{
    name: 'Anita',
    age: 25,
    greet()  
    { 
        console.log("Hi I am " + this.name);
    }
}

console.log(person);
person.greet();