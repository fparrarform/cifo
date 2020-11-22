


export const isPangram = (string) => {
const abc = "abcdefghijklmnopqrstuvwxyz"; //Declaring const to check.

if (string.length<1)return false; //if parameter is empty, return false
return [...abc].every(e=>string.toLowerCase().includes(e)) //.every() is an array method to check, in this case, if the desestructured abc in an array, includes each input string letters (lowercase) 
};

