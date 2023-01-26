function numAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function mostrarEleccion (jugador) {
  let eleccion = "";
  switch (jugador) {
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

// Obteniendo y mostrando datos del jugador
let jugador1 =  1 * prompt("Elige tu arma: 1 = ✊, 2 = ✋, 3 = ✌️");
alert(`El jugador${mostrarEleccion(jugador1)}`);

// Obteniendo y mostrando datos de CPU
let cpu = numAleatorio(1, 2);
alert(`CPU${mostrarEleccion(cpu)}`);

// Combate
if (jugador1 == cpu) {
  alert("¡Tenemos un empate!");
} else if ((jugador1 == 1 && cpu == 3) || (jugador1 == 2 && cpu == 1) || (jugador1 == 3 && cpu == 2)) {
  alert("¡Has ganado!");
} else {
  alert("¡Has perdido!");
}