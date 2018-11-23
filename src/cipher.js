window.cipher = {
encode:(mensaje,desplazamiento) =>{
  let palabraCifrada="";
    for (let i=0 ; i<mensaje.length ; i++){
  let nLetra=mensaje.charCodeAt(i);
  const formulaC=(nLetra-65+desplazamiento)%26+65;
  palabraCifrada=palabraCifrada+String.fromCharCode(formulaC);
  }
    return palabraCifrada;
  },

  decode:(mensaje,desplazamiento) => {
  let palabraDescifrada="";
    for (let i=0 ; i<mensaje.length ; i++){
  let nuLetra=mensaje.charCodeAt(i);
  const nuevFormula=(26-desplazamiento)%26;
  const formulaD=(nuLetra+65+nuevFormula)%26+65;
  palabraDescifrada=palabraDescifrada+String.fromCharCode(formulaD);
    }
    return palabraDescifrada;
  }
};
