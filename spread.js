
//Spread operator ... copy all elements from object or array and put it wher we call it 

//copy array
const hobbies = ['Programming', 'Cooking', 'Netflix'];

const copyHobbies = [...hobbies];

console.log(hobbies);
console.log(copyHobbies);

//copy object 
const person = 
{
    name: 'Anita',
    age: 25,
    greet() { console.log( 'Hi this is: ' + name )}
};

const copyPerson = {...person};

console.log(copyPerson);
console.log(person);