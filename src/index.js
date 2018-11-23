// llamando al boton cifrar
const botonContinuar=document.getElementById("boton");
//llamando al desplazamiento
const clave=document.getElementById("desplazamiento");
//llamando al mensaje
const mensajeSecreto=document.getElementById("mensaje");
// llamando al boton descifrar
const botonCifrar=document.getElementById("boton2");

const respuesta=document.getElementById("respuestas");

//llamando al boton para cifrar la palabra ingresada
const botonDescifrar=document.getElementById("boton3");
//llamando al boton seguirnavegando
const botonNavegar=document.getElementById("boton4");

//funcion continuar
function continuar(){
  document.getElementById("screen1").style="display:none";
  document.getElementById("screen2").style="display:block";
}
//funciones cifrar
function cifrar(){
const clav=document.getElementById("desplazamiento").value;
document.getElementById("claves").innerHTML=clav;
respuesta.value=cipher.encode(mensajeSecreto.value,parseInt(clave.value));
document.getElementById("screen2").style="display:none";
document.getElementById("screen3").style="display:block";
}

//funcion descifrar
function descifrar(){
  document.getElementById("screen2").style="display:none";
  document.getElementById("screen3").style="display:block";
  const clav=document.getElementById("desplazamiento").value;
  document.getElementById("claves").innerHTML=clav;
  respuesta.value=cipher.decode(mensajeSecreto.value,parseInt(clave.value));
}
//funion navegar y que vuelva la inicio
function regresar(){
document.getElementById("screen3").style="display:none";
document.getElementById("screen2").style="display:block";
clave.value="";
mensajeSecreto.value="";
}
//evento del boton continuar

botonContinuar.addEventListener('click',continuar);
//evento del boton cifrar y descifrar
botonCifrar.addEventListener("click",cifrar);
botonDescifrar.addEventListener("click",descifrar);
//evento del boton navegar
botonNavegar.addEventListener("click",regresar);
