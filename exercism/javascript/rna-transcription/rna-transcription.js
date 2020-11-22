export const transcription = {
  G : `C`,
  C : `G`,
  T : `A`,
  A : `U`
}

export const toRna = ([...string])=>{

  return string.map((e)=>{
     return transcription[e]
  }).join("")
  
}

