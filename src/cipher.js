window.cipher = {
encode:(desplazamiento, mensaje) => {
  let palabraCifrada="";
    for (let i=0 ; i<mensaje.length ; i++){
  let nLetra=mensaje.charCodeAt(i);
  let formulaC=(nLetra-65+desplazamiento)%26+65;
  palabraCifrada=palabraCifrada+String.fromCharCode(formulaC);
  }
    return palabraCifrada;
  },

decode:(desplazamiento, mensaje) => {
  let palabraDescifrada="";
    for (let i=0 ; i<mensaje.length ; i++){
  let nuLetra=mensaje.charCodeAt(i);
  let nuevFormula=(26-desplazamiento)%26;
  let formulaD=(nuLetra+65+nuevFormula)%26+65;
  palabraDescifrada=palabraDescifrada+String.fromCharCode(formulaD);
  }
    return palabraDescifrada;
  }
};
//module.exports=window.cipher;
