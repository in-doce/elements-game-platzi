// Obteniendo datos del jugador
let cpu = 2;
let jugador = 0;
jugador = prompt("Elije tu arma: 1 = ✊, 2 = ✋, 3 = ✌️");

// Mostrando elección del jugador
switch (jugador) {
  case "1":
    alert("Elejiste ✊");
    break;
  case "2":
    alert("Elejiste ✋");
    break;
  case "3":
    alert("Elejiste ✌️")
    break;
  default:
    alert("No ingresaste un número entre 1 y 3. 😢")
    break;
}

// Mostrando elección CPU
switch (cpu) {
  case 1:
    alert("CPU elijió ✊");
    break;
  case 2:
    alert("CPU elijió ✋");
    break;
  default:
    alert("CPU elijió ✌️")
    break;
}

// Combate
if (jugador == cpu) {
  alert("¡Tenemos un empate!");
} else if (jugador == 1 && cpu == 3) {
  alert("¡Has ganado!");
} else if (jugador == 2 && cpu == 1) {
  alert("¡Has ganado!");
} else if (jugador == 3 && cpu == 2) {
  alert("¡Has ganado!");
} else {
  alert("¡Has perdido!");
}