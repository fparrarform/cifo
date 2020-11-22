let promesaShortCut = Promise.resolve("Promesa resuelta");
  
promesaShortCut
.then((p)=>console.log("console.log de then "+p))
.catch((p)=>console.log("console.log de catch "+p))


