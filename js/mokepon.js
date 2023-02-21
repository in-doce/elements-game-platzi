// Variables globales
let ataqueJugador = '';
let ataqueEnemigo = '';
let resultado = '';
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
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
}

// Funciones para la mascota del jugador
function seleccionarMascotaJugador() {
  let inputDragon = document.getElementById('dragon');
  let inputPerro = document.getElementById('perro');
  let inputGato = document.getElementById('gato');
  let spanMascotaJugador = document.getElementById('mascota-jugador');
  if (inputDragon.checked) {
    spanMascotaJugador.innerHTML = 'Dragoncito 🐉'; 
  } else if (inputPerro.checked) { 
    spanMascotaJugador.innerHTML = 'Perrito 🐶';
  } else if (inputGato.checked) { 
    spanMascotaJugador.innerHTML = 'Gatito 🐱';
  } else { 
    alert('Selecciona una mascota');
  }
  seleccionarMascotaEnemigo();
}

function ataqueFuego() {
  ataqueJugador = 'fuego 🔥';
  elementoAtaqueEnemigo();
}
function ataqueAgua() {
  ataqueJugador = 'agua 💧';
  elementoAtaqueEnemigo();
}
function ataqueTierra() {
  ataqueJugador = 'tierra 🌱';
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
    spanMascotaEnemigo.innerHTML = 'Gatito 🐱' ;
  }
}

function elementoAtaqueEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);
  if (ataqueAleatorio == 1) {
    ataqueEnemigo = 'fuego 🔥';
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = 'agua 💧';
  } else {
    ataqueEnemigo = 'tierra 🌱';
  }
  combate();
  crearMensajeCombate();
}

// Combate
function combate() {
  if (ataqueJugador == ataqueEnemigo) {
    resultado = 'Empataste 🫂';
  } else if (ataqueJugador == 'tierra 🌱' && ataqueEnemigo == 'agua 💧' || ataqueJugador == 'agua 💧' && ataqueEnemigo == 'fuego 🔥' || ataqueJugador == 'fuego 🔥' && ataqueEnemigo == 'tierra 🌱') {
    resultado = 'Ganaste 🏆';
    vidasEnemigo--;
  } else {
    resultado = 'Perdiste 😭';
    vidasJugador--;
  }
}

// Mensajes de combate
function crearMensajeCombate() {
  let parrafo = document.createElement('p');
  let texto = document.createTextNode(`Tu mascota ataca con ${ataqueJugador} y el enemigo ataca con ${ataqueEnemigo}, ${resultado}`);
  parrafo.appendChild(texto);
  let mensajes = document.getElementById('mensajes');
  mensajes.appendChild(parrafo);
}

function aleatorio(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min) ;
}
window.addEventListener('load', iniciarJuego);