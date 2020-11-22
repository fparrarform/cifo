// FIRST WAY NOT PAST THE TEST BECAUSE THE TIME-ZONES CHANGES I SUPOSSE:

// export const gigasecond = (receivedTime) => {
  
//   receivedTime.setSeconds(1000000000);
//   return receivedTime;
  
// };

export const gigasecond = (receivedTime) => {
  
  let epochTime = receivedTime.getTime();
  let gigasecondAfter = epochTime + 1000000000000;
  
  return new Date(gigasecondAfter)
  
};




