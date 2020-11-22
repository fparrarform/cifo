//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const roundToTwo = (num)=> {       
  return Number(num.toFixed(2));
}


const spaceAge = [ 
  {Planet: "mercury", orbitalPeriod: 0.2408467},
  {Planet: "venus", orbitalPeriod: 0.61519726},
  {Planet: "earth", orbitalPeriod: 1.0, EarthDays: 365.25, EarthSeconds: 31557600},
  {Planet: "mars", orbitalPeriod: 1.8808158},
  {Planet: "jupiter", orbitalPeriod: 11.862615},
  {Planet: "saturn", orbitalPeriod: 29.447498},
  {Planet: "uranus", orbitalPeriod: 84.016846},
  {Planet: "neptune", orbitalPeriod: 164.79132},
]



export const age = (where, seconds) => {  
  let planet = spaceAge.find(e=>e.Planet === where);  


  return roundToTwo(seconds/(planet.orbitalPeriod*spaceAge[2].EarthSeconds))
}



console.log(age("earth", 1000000000))


