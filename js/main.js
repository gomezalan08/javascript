// constantes y variables
const INTERES = 0.25; // 25% de interés fijo
let nombreUsuario;
let monto;
let cuotas;


// Datos de usuario 
function pedirDatos() {
  nombreUsuario = prompt("¡Bienvenido! Ingresa tu nombre:");
  monto = parseFloat(prompt("¿Cuánto dinero querés pedir?"));
  cuotas = parseInt(prompt("¿En cuántas cuotas querés pagarlo?"));
}


// Calculo 
function calcularTotal(monto, cuotas) {
  let interesTotal = monto * INTERES;
  let total = monto + interesTotal;
  let valorCuota = total / cuotas;
  return { total, valorCuota };
}


// Resultado
function mostrarResultado(nombre, total, valorCuota, cuotas) {
  console.log("---- RESUMEN DEL PRÉSTAMO ----");
  console.log("Cliente: " + nombre);
  console.log("Total a pagar: $" + total.toFixed(2));
  console.log("Cantidad de cuotas: " + cuotas);
  console.log("Valor de cada cuota: $" + valorCuota.toFixed(2));
  alert(
    "Hola " + nombre +
    "\nTotal a pagar: $" + total.toFixed(2) +
    "\nEn " + cuotas + " cuotas de $" + valorCuota.toFixed(2)
  );
}



// Ciclo para repetir 
function iniciarSimulador() {
  let continuar = true;

  while (continuar) {
    pedirDatos();
    let resultado = calcularTotal(monto, cuotas);
    mostrarResultado(nombreUsuario, resultado.total, resultado.valorCuota, cuotas);
    continuar = confirm("¿Querés hacer otra simulación?");
  }

  alert("Gracias por usar el simulador, ¡hasta luego!");
}


// Iniciar simulador
iniciarSimulador();
