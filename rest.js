
// rest operator ... - bound args into the array 
//doesn't metter how many args we have 

const toArray = (...args) => 
{
    return args;
}

console.log(toArray(1, 2, 3));
console.log(toArray(1, 2, 3, 4));