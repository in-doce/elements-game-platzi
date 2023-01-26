// Genera un numero aleatorio para el CPU
function numAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Muestra la eleccion del jugador objetivo
function mostrarEleccion (objetivo) {
  let eleccion = "";
  switch (objetivo) {
    case 1:
      eleccion = " eligió ✊";
      break;
    case 2:
      eleccion = " eligió ✋";
      break;
    case 3:
      eleccion = " eligió ✌️";
      break;
    default:
      eleccion = " no ingresó un número entre 1 y 3. 😢";
      break;
  }
  return eleccion;
}

// Funcion para iniciar el combate
function combate (jugador1, jugador2) {
  if (jugador1 == jugador2) {
    alert("¡Tenemos un empate!");
    empates += 1;
  } else if ((jugador1 == 1 && jugador2 == 3) || (jugador1 == 2 && jugador2 == 1) || (jugador1 == 3 && jugador2 == 2)) {
    alert("¡Has ganado!");
    triunfos += 1;
  } else {
    alert("¡Has perdido!");
    perdidas += 1;
  }
}

// Funcion que muesta los resultados
function resultado (triunfo, empate, perdido) {
  alert("Has ganado un total de " + triunfo + " veces.");
  alert("Has perdido un total de " + perdido + " veces.");
  alert("Has empatado un total de " + empate + " veces.");
}

let triunfos = 0;
let empates = 0;
let jugador = 0;
let cpu = 0;
let perdidas = 0;

// Ciclo de combate
while (triunfos < 3 && perdidas < 3) {
  // Obteniendo y mostrando datos del jugador
  jugador =  1 * prompt("Elige tu arma: 1 = ✊, 2 = ✋, 3 = ✌️");
  alert(`El jugador${mostrarEleccion(jugador)}`);
  
  // Obteniendo y mostrando datos de CPU
  cpu = numAleatorio(1, 3);
  alert(`CPU${mostrarEleccion(cpu)}`);
  
  //Combate
  combate(jugador, cpu);
}

resultado(triunfos, perdidas, empates);