person = {
    name: 'Anita',
    age: 25,
    hobby: true,
    greet() 
    {
        console.log('Hi I am ' + this.name);
    }
}

const printName = (personData) =>
{
    console.log(personData.name);
}

//destructuring - using exact property of the object we pass
//object destructuring
const printNameDestructuring = ({ name }) =>
{
    console.log(name);
}

const { name, age } = person;
console.log(name, age);

printName(person);

printNameDestructuring(person);

//array destructuring 
const hobbies = ['Programming', 'Cooking'];

const [hobbies1, hobbies2] = hobbies;
console.log(hobbies1, hobbies2);

