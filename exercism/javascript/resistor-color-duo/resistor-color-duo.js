import { colorCode } from '../resistor-color/resistor-color'



export const value = ([value1, value2]) => {

  value1 = colorCode(value1)
  value2 = colorCode(value2)    
  

return parseInt(value1.toString() + value2.toString());
};




