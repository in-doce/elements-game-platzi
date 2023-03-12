// Variables globales
let ataqueJugador = '';
let ataqueEnemigo = '';
let resultado = '';
let vidasJugador = 3;
let vidasEnemigo = 3;


function iniciarJuego() {
  ocultarElemento('container-juego');
  ocultarElemento('reiniciar');
  
  // Selección de mascota del jugador	
  let botonMascotaJugador = document.getElementById('boton-mascota');
  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

  // Elemento de ataque del jugador
  let botonFuego = document.getElementById('boton-fuego');
  botonFuego.addEventListener('click', ataqueFuego);
  let botonAgua = document.getElementById('boton-agua');
  botonAgua.addEventListener('click', ataqueAgua);
  let botonTierra = document.getElementById('boton-tierra');
  botonTierra.addEventListener('click', ataqueTierra);

  // Reiniciar el juego
  let botonReinicio = document.getElementById('boton-reiniciar');
  botonReinicio.addEventListener('click', reiniciarJuego);
}

// Funciones para la mascota del jugador
function seleccionarMascotaJugador() {
  let inputDragon = document.getElementById('dragon');
  let inputPerro = document.getElementById('perro');
  let inputPez = document.getElementById('pez');
  let spanMascotaJugador = document.getElementById('mascota-jugador');

  switch (true) {
    case inputDragon.checked:
      spanMascotaJugador.innerHTML = '🐉 Dragoncito';
      break;
    case inputPerro.checked:
      spanMascotaJugador.innerHTML = '🐕 Perrito';
      break;
    case inputPez.checked:
      spanMascotaJugador.innerHTML = '🦈 Pececito';
      break;
    default:
      alert('selecciona una mascota');
  }

  mostrarElemento('container-juego', 'flex');
  ocultarElemento('container-mascota');

  seleccionarMascotaEnemigo();
}

function ataqueFuego() {
  ataqueJugador = '🔥';
  elementoAtaqueEnemigo();
}
function ataqueAgua() {
  ataqueJugador = '💧';
  elementoAtaqueEnemigo();
}
function ataqueTierra() {
  ataqueJugador = '🌱';
  elementoAtaqueEnemigo()
}

// Funciones para la mascota enemiga
function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById('mascota-enemigo');

  switch (mascotaAleatoria) {
    case 1:
      spanMascotaEnemigo.innerHTML = '🐉 Dragoncito';
      break;
    case 2:
      spanMascotaEnemigo.innerHTML = '🐕 Perrito';
      break;
    default:
      spanMascotaEnemigo.innerHTML = '🦈 Pececito';
      break;
  }
}

function elementoAtaqueEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  switch (ataqueAleatorio) {
    case 1:
      ataqueEnemigo = '🔥';
      break;
    case 2:
      ataqueEnemigo = '💧';
      break;
    default:
      ataqueEnemigo = '🌱';
      break;
  }
  
  combate();
}

// Combate
function combate() {
  switch (ataqueJugador, ataqueEnemigo) {
    case ataqueEnemigo, ataqueJugador:
      resultado = 'Empataste';
      break;
    case '🌱', '💧' || '💧', '🔥' || '🔥', '🌱':
      resultado = 'Ganaste';
      vidasEnemigo--;
      break;
    default:
      resultado = 'Perdiste';
      vidasJugador--;
      break;
  }

  actualizarVidas(vidasJugador, vidasEnemigo);

  crearMensaje(ataqueJugador, 'ataque-jugador');
  crearMensaje(ataqueEnemigo, 'ataque-enemigo');
  crearMensaje(resultado, 'resultado-ronda');

  if (revisarVidas() !== '') crearMensajeGanador(revisarVidas());
}

// Actualizar vidas
function actualizarVidas(vidasJugador, vidasEnemigo) {
  modificarMensaje(vidasJugador, 'vidas-jugador');
  modificarMensaje(vidasEnemigo, 'vidas-enemigo');
}

// document.getElementById(id).innerHTML = mensaje;
function crearMensajeGanador(ganador) {
  crearMensaje(`🏆 El ganador es ${ganador} 🏆`, 'resultado');

  // Desactivar botones para evitar ataques después de terminado el juego
  desactivarBotones('boton-fuego');
  desactivarBotones('boton-agua');
  desactivarBotones('boton-tierra');

  // Mostrar botón de reinicio
  mostrarElemento('reiniciar', 'flex');
}

function desactivarBotones(id) {
  document.getElementById(id).disabled = true;
}

function revisarVidas() {
  let ganador = '';
  switch (true) {
    case vidasJugador === 0:
      ganador = '🤬 Enemigo';
      break;
    case vidasEnemigo === 0:
      ganador = '😂 Jugador';
      break;
  }
  return ganador;
}

function reiniciarJuego() {
  location.reload();
}

// Funciones auxiliares
function ocultarElemento(id) {
  document.getElementById(id).style.display = 'none';
}

function mostrarElemento(id, display) {
  document.getElementById(id).style.display = display;
}

function crearMensaje(mensaje, id) {
  let parrafo = document.createElement('p');
  parrafo.innerHTML = mensaje;
  document.getElementById(id).appendChild(parrafo);
  document.getElementById(id).scrollTop = document.getElementById(id).scrollHeight;
}

function modificarMensaje(mensaje, id) {
  document.getElementById(id).innerHTML = mensaje;
}

function aleatorio(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min) ;
}
window.addEventListener('load', iniciarJuego);