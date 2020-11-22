export const reverseString = ([...string]) => {  
return string.map((e, i, a)=>a[(a.length-1)-i]).join("")
};
