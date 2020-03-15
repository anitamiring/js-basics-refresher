
const hobbies = ['Sport', 'Cooking', 'Netflix'];

for(let hobby of hobbies)
{
    console.log(hobby);
}


//Objects and array are reference types 
//Thats why we can 'push' to const hobbies since it store the adres to the first element 

hobbies.push("Programming");


console.log(hobbies.map(hobby => "Hobby is: " + hobby));

console.log(hobbies);