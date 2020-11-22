// export const toRna = (string) => {

//     let nArray = Array.from(string);
//     let dArray = []
//     nArray.forEach((e,i,a)=>{
//       switch (e){
//         case "G":
//           dArray.push("C");
//           break
//         case "C":
//           dArray.push("G") ;
//           break
//         case "T":
//           dArray.push("A") ;
//           break
//         case "A":
//           dArray.push("U") ;
//           break
//       }  
//     })
//     return dArray.toString().replace(/,/g, "")
//     };
    
const transcription = {
    G : `C`,
    C : `G`,
    T : `A`,
    A : `U`
}

const test = ([...string])=>{
    let nArray = string;

    const dataTransform = nArray.reduce((acc, cur)=>{
       acc.push(transcription[cur])
       return acc;
    })
   console.log(nArray)

}
console.log(test("GCCCTA"))







// // ************* Map with Reduce *************
// const data = [10, 20, 30];
// const tripledWithMap = data.map(item => {
//     return item * 3;
// });
// const tripledWithReduce = data.reduce((acc, value) => {
//   acc.push(value * 3);
//   return acc;
// }, []);console.log(tripledWithMap, tripledWithReduce);