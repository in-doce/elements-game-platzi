// Variables globales
let ataqueJugador = '';
let ataqueEnemigo = '';
let resultado = '';
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  let sectionReiniciar = document.getElementById('reiniciar');
  sectionReiniciar.style.display = 'none';

  let sectionSeleccionarAtaque = document.getElementById('container-juego');
  sectionSeleccionarAtaque.style.display = 'none';

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
  let sectionSeleccionarMascota = document.getElementById('container-mascota');
  sectionSeleccionarMascota.style.display = 'none';

  let sectionSeleccionarAtaque = document.getElementById('container-juego');
  sectionSeleccionarAtaque.style.display = 'flex';

  let inputDragon = document.getElementById('dragon');
  let inputPerro = document.getElementById('perro');
  let inputPez = document.getElementById('pez');
  let spanMascotaJugador = document.getElementById('mascota-jugador');
  if (inputDragon.checked) {
    spanMascotaJugador.innerHTML = 'Dragoncito 🐉'; 
  } else if (inputPerro.checked) { 
    spanMascotaJugador.innerHTML = 'Perrito 🐶';
  } else if (inputPez.checked) { 
    spanMascotaJugador.innerHTML = 'Pececito 🦈';
  } else { 
    alert('Selecciona una mascota');
  }
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
  if (mascotaAleatoria == 1) {
    spanMascotaEnemigo.innerHTML = 'Dragoncito 🐉'; 
  } else if (mascotaAleatoria == 2) {
    spanMascotaEnemigo.innerHTML = 'Perrito 🐶' ;
  } else {
    spanMascotaEnemigo.innerHTML = 'Pececito 🦈' ;
  }
}

function elementoAtaqueEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);
  if (ataqueAleatorio == 1) {
    ataqueEnemigo = '🔥';
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = '💧';
  } else {
    ataqueEnemigo = '🌱';
  }
  combate();
}

// Combate
function combate() {
  if (ataqueJugador == ataqueEnemigo) {
    resultado = 'Empataste';
  } else if (ataqueJugador == '🌱' && ataqueEnemigo == '💧' || ataqueJugador == '💧' && ataqueEnemigo == '🔥' || ataqueJugador == '🔥' && ataqueEnemigo == '🌱') {
    resultado = 'Ganaste';
    vidasEnemigo--;
  } else {
    resultado = 'Perdiste';
    vidasJugador--;
  }
  actualizarVidas(vidasJugador, vidasEnemigo);
  crearMensajeCombate();
  revisarVidas();
}

// Actualizar vidas
function actualizarVidas(vidasJugador, vidasEnemigo) {
  let spanVidasJugador = document.getElementById('vidas-jugador');
  let spanVidasEnemigo = document.getElementById('vidas-enemigo');
  spanVidasJugador.innerHTML = vidasJugador;
  spanVidasEnemigo.innerHTML = vidasEnemigo;
}

// Mensajes de combate
function crearMensajeCombate() {
  let parrafo = document.createElement('p');
  let texto = document.createTextNode(`Tu mascota ataca con ${ataqueJugador} y el enemigo ataca con ${ataqueEnemigo}, ${resultado}`);
  parrafo.appendChild(texto);
  let mensajes = document.getElementById('mensajes');
  mensajes.appendChild(parrafo);
  mensajes.scrollTop = mensajes.scrollHeight;
}

function crearMensajeGanador(resultado) {
  let parrafo = document.createElement('p');
  let texto = document.createTextNode(resultado);
  parrafo.appendChild(texto);
  let mensajes = document.getElementById('mensajes');
  mensajes.appendChild(parrafo);
  mensajes.scrollTop = mensajes.scrollHeight;

  let botonFuego = document.getElementById('boton-fuego');
  botonFuego.disabled = true;
  let botonAgua = document.getElementById('boton-agua');
  botonAgua.disabled = true;
  let botonTierra = document.getElementById('boton-tierra');
  botonTierra.disabled = true;

  let sectionReiniciar = document.getElementById('reiniciar');
  sectionReiniciar.style.display = 'flex';
}

function revisarVidas() {
  let ganador = '';
  if (vidasJugador == 0) {
    ganador = 'Enemigo';
    crearMensajeGanador('El enemigo ah ganado, mejor suerte la proxima.');
  } else if (vidasEnemigo == 0) {
    ganador = 'Jugador';
    crearMensajeGanador('¡Felicidades, le ganaste al enemigo! 🏆');
  }
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min) ;
}
window.addEventListener('load', iniciarJuego);