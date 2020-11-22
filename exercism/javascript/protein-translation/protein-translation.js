export const translate = (codons) => {

let arrayCodons = [];
//cutting Codons
if(codons!=undefined){
    for(let i=0;i<codons.length;i+=3){       
    arrayCodons.push(codons.substr(i, 3)) 
};
}

//finding index of STOPPING CODONS
const index = arrayCodons.findIndex(codon => codon === "UAA" || codon === "UAG" || codon === "UGA");

//cut array till STOPPING CODONS

if(index!=-1){
  arrayCodons.splice(index)
};

//translation

arrayCodons.forEach((codon, index) => { 
  if(codon === "AUG" ){
    arrayCodons[index] = "Methionine";
  }
  if (codon === "UUU" || codon === "UUC"){
    arrayCodons[index] = "Phenylalanine";
  }
  if (codon === "UUA" || codon === "UUG"){
    arrayCodons[index] = "Leucine";
  }
  if (codon === "UCU" || codon === "UCC" || codon === "UCA" || codon === "UCG"){
    arrayCodons[index] = "Serine";
  }
  if (codon === "UAU" || codon === "UAC"){
    arrayCodons[index] = "Tyrosine";
  }
  if (codon === "UGU" || codon === "UGC"){
    arrayCodons[index] = "Cysteine";
  }
  if (codon === "UGG"){
    arrayCodons[index] = "Tryptophan";
  } 
})
return arrayCodons;
}

console.log(translate("UAUUGGUGUUGUUGU"))
