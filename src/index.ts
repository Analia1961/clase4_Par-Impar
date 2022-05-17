// CLASE 4 - Viernes 29 de abril 2022
// Estructura de Control - Selección
// Ejercicio – Par/Impar
/*
•Desarrollar un algoritmo que dado un número, ingresado por el usuario 
determine si el número es par o impar y le informe al usuario
• En el caso de ser 0 (cero) el algoritmo deberá informarlo
• Tenga en cuenta que en JS hay un operador denominado módulo (%)
que devuelve el resto de una división
*/
let elRotulo = document.getElementById("rotulo");
elRotulo.innerHTML = "Ingrese el número:";

let dato = document.getElementById("dato");

let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let num: number = dato.value;
  if (num === 0) {
    console.log("El " + num + " no es par ni impar");
  } else if (num % 2 === 0) {
    console.log("El " + num + " es par");
  } else {
    console.log("El " + num + " es impar");
  }
});
