export const validate = (number) => {
    let array = Array.from(""+ number); /* creating array */
    let arrayPow = [];
    array.forEach((element, index) => { /* raised to length of array and pushed to a new one */
        arrayPow.push(Math.pow(element,array.length))   
        });
    let totalSum = arrayPow.reduce((accumulator, currentValue) => accumulator + currentValue) /* sumatory of raised nums */
    if(totalSum === number){
        return true;
    }
    else return false;
}

// export const validate = (num) => {
//     return num === [...num.toString()].reduce((acc, cur, idx, ary) =>
//       acc + Math.pow(cur, ary.length), 0)
//   }


//   export const validate = (n) =>
// 	n == [...`${n}`]
// 		.map(Number)
// 		.map((x, _, ar) => Math.pow(x, ar.length))
// 		.reduce((acc, x) => acc+x);