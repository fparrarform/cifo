// Exercicis bucles i condicions


// Fes un llistat de nombres de l'1 al 30


for (var i=1; i<=30; i++){
    console.log(i);  
  }

    
// Imprimeix el 10 i el 20 amb caràcters ('deu' i 'vint')

for (var i=1; i<=30; i++){
  if(i==10)
  {
    console.log("deu");
  }
  else if (i==20)
  {
    console.log("vint");
  }
  else {
    console.log(i);
  }
}
// Imprimeix els parells agrupats en primer lloc i desprès els senars.

let pares=[]
let impares=[]

for (var i=1; i<=30; i++){
  if (i%2==0){
    pares.push(i);
  }
  else{
    impares.push(i);
  }    
}
console.log(pares);
console.log(impares);

// Imprimeix al costat de cada nombre els literals 'parell'|'senar' segons correspongui

for (var i=1; i<=30; i++){
  if (i%2==0){
    pares.push(i);
  }
  else{
    impares.push(i);
  }    
}

for (x=1; x<=pares.length; x++){
  console.log(pares[x]+" par");
}
for (x=1; x<=impares.length; x++){
  console.log(impares[x]+" impar");
}

pares[31];

//opción sencilla

for (var i=1; i<=30; i++){
  if (i%2==0){
    pares.push(i);
  }
  else{
    impares.push(i);
  }    
}
console.log(pares);
console.log(impares);

for (var i=1; i<=30; i++){
  if(i%2==0)
  {
    console.log(i+" par");
  }
  else {
    console.log(i+" impar");
  }
}

// Imprime cada una de las letras de tu nombre en mayúsculas por la consola.

let nombre = "elena";
for (i=0; i<=nombre.length;i++){
  let letra = nombre.charAt(i);
  letra = letra.toUpperCase();
  console.log(letra);
}