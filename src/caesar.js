// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    let inputLow = input.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = ''; 
    if(!shift || shift<-25 || shift>25){
      return false;
    }
    for (let i=0; i<inputLow.length; i++){
      let inputs = inputLow[i];
      //console.log(inputs);
      if(inputs === ' ' || !(alphabet.includes(inputs))) {
        result+=inputs;
        continue;
      }

      for (let j in alphabet){
        //console.log(alphabet[j])
        
        if (inputs === alphabet[j]){
          let cShift
          if (encode){
            cShift = Number(j) + Number(shift);
          }
          else{
            cShift = Number(j) - Number(shift);
          }
          
          if(cShift>25) cShift = cShift -26;
          if(cShift<0) cShift = cShift + 26;
          result+= alphabet[cShift];  
        }
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
