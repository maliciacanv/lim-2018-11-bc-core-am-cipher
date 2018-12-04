//ocultando pantalla 2
document.getElementById("screen2").style="display:none";
//llamando pantalla 3
document.getElementById("screen3").style="display:none";

// llamando al boton cifrar
const botonContinuar=document.getElementById("boton");
//llamando al desplazamiento
const clave=document.getElementById("desplazamiento");
//llamando al mensaje
const mensajeSecreto=document.getElementById("mensaje");
// llamando al boton descifrar
const botonCifrar=document.getElementById("boton2");
//llamando a la caja de respuestas
const respuesta=document.getElementById("respuestas");
//llamando al boton para cifrar la palabra ingresada
const botonDescifrar=document.getElementById("boton3");
//llamando al boton regresar
const botonNavegar=document.getElementById("boton4");

//funcion continuar
 function continuar(){
  document.getElementById("screen1").style="display:none";
  document.getElementById("screen2").style="display:block";
}
//funcion cifrar
function cifrar() {
  document.getElementById("screen2").style="display:none";
  document.getElementById("screen3").style="display:block";
  const clav=document.getElementById("desplazamiento").value;
  document.getElementById("claves").innerHTML=clav;
  respuesta.value=cipher.encode(parseInt(clave.value),mensajeSecreto.value);
}

//funcion descifrar
function descifrar() {
  document.getElementById("screen2").style="display:none";
  document.getElementById("screen3").style="display:block";
  const clav=document.getElementById("desplazamiento").value;
  document.getElementById("claves").innerHTML=clav;
  respuesta.value=cipher.decode(parseInt(clave.value),mensajeSecreto.value);

}

//funion regresar
function regresar(){
  document.getElementById("screen3").style="display:none";
  document.getElementById("screen2").style="display:block";
  clave.value="";
  mensajeSecreto.value="";
}
//evento del boton continuar
botonContinuar.addEventListener("click",continuar);
//evento del boton cifrar y descifrar
botonCifrar.addEventListener("click",cifrar);
//evento del boton descifrar
botonDescifrar.addEventListener("click",descifrar);
//evento del boton regresar
botonNavegar.addEventListener("click",regresar);
