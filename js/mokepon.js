// clases
class Mascota {
  constructor(name, id, avatar, life) {
    this.name = name;
    this.id = id;
    this.avatar = avatar;
    this.life = life;
    this.ataque = [];
  }
}

// Variables globales
let ataqueJugador = "";
let ataqueEnemigo = "";
let vidasJugador = 3;
let vidasEnemigo = 3;

// Mascotas
let mascotas = [];

let dragon = new Mascota("Dragoncito", "dragon", "🐉", 3);
dragon.ataque.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "💧", id: "boton-agua" }
);

let perro = new Mascota("Perrito", "perro", "🐕", 3);
perro.ataque.push(
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💧", id: "boton-agua" }
);

let pez = new Mascota("Pececito", "pez", "🦈", 3);
pez.ataque.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🌱", id: "boton-tierra"}
);

mascotas.push(dragon, perro, pez);

function iniciarJuego() {
  ocultarElemento("container-juego");
  ocultarElemento("reiniciar");

  mostrarTarjetasMascotas();

  // Selección de mascota del jugador
  evento("boton-mascota", "click", seleccionarMascotaJugador);

  // Reiniciar el juego
  evento("boton-reiniciar", "click", reiniciarJuego);
}

// Funciones para la mascota del jugador
function seleccionarMascotaJugador() {
  modificarMensaje(
    `${obtenerMascotaJugador().avatar} ${obtenerMascotaJugador().name}`,
    "mascota-jugador"
  );

  crearBotonAtaque(obtenerMascotaJugador());

  mostrarElemento("container-juego", "flex");
  ocultarElemento("container-mascota");

  seleccionarMascotaEnemigo();
}

function eventoAtaqueJugador(ataque) {
  ataqueJugador = ataque;
  elementoAtaqueEnemigo();
}

// Funciones para la mascota enemiga
function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(0, mascotas.length - 1);

  modificarMensaje(
    `${mascotas[mascotaAleatoria].avatar} ${mascotas[mascotaAleatoria].name}`,
    "mascota-enemigo"
  );
}

function elementoAtaqueEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);
  switch (ataqueAleatorio) {
    case 1:
      ataqueEnemigo = "🔥";
      break;
    case 2:
      ataqueEnemigo = "💧";
      break;
    default:
      ataqueEnemigo = "🌱";
      break;
  }
  
  combate();
}

// Combate
function combate() {
  crearMensaje(ataqueJugador, "ataque-jugador");
  crearMensaje(ataqueEnemigo, "ataque-enemigo");
  crearMensaje(resultadoRonda(), "resultado-ronda");

  actualizarVidas(vidasJugador, vidasEnemigo);

  if (revisarVidas() !== "") crearMensajeGanador(revisarVidas());
}

// Actualizar vidas
function actualizarVidas(vidasJugador, vidasEnemigo) {
  modificarMensaje(vidasJugador, "vidas-jugador");
  modificarMensaje(vidasEnemigo, "vidas-enemigo");
}
// document.getElementById(id).innerHTML = mensaje;
function crearMensajeGanador(ganador) {
  crearMensaje(`🏆 El ganador es ${ganador} 🏆`, "resultado");

  // Desactivar botones para evitar ataques después de terminado el juego
  desactivarBotones("boton-fuego");
  desactivarBotones("boton-agua");
  desactivarBotones("boton-tierra");

  // Mostrar botón de reinicio
  mostrarElemento("reiniciar", "flex");
}

function revisarVidas() {
  let ganador = "";
  switch (true) {
    case vidasJugador === 0:
      ganador = "🤬 Enemigo";
      break;
    case vidasEnemigo === 0:
      ganador = "😂 Jugador";
      break;
  }

  return ganador;
}

function reiniciarJuego() {
  location.reload();
}

// Funciones generales

function evento(id, evento, funcion) {
  document.getElementById(id).addEventListener(evento, funcion);
}

function ocultarElemento(id) {
  document.getElementById(id).style.display = "none";
}

function mostrarElemento(id, display) {
  document.getElementById(id).style.display = display;
}

function desactivarBotones(id) {
  document.getElementById(id).disabled = true;
}

function obtenerMascotaJugador() {
  let mascotaSeleccionada = document.querySelector(
    'input[name="mascota"]:checked'
  ).id;

  return mascotas.find((mascota) => mascota.id === mascotaSeleccionada);
}

function modificarMensaje(mensaje, id) {
  document.getElementById(id).innerHTML = mensaje;
}

function crearMensaje(mensaje, id) {
  let parrafo = document.createElement("p");

  parrafo.innerHTML = mensaje;
  document.getElementById(id).appendChild(parrafo);

  document.getElementById(id).scrollTop =
    document.getElementById(id).scrollHeight;
}

function mostrarTarjetasMascotas() {
  mascotas.forEach((mascota) => {
    let opcionDeMascota = `
      <label class="tarjeta-mascota ${mascota.id}" for=${mascota.id}>
        ${mascota.avatar}
        <input type="radio" name="mascota" id=${mascota.id} />
      </label>
    `;

    document.getElementById("container-tarjetas-mascota").innerHTML +=
      opcionDeMascota;
  });
}
// obtenerAtaquesJugador - viejo
function crearBotonAtaque(mascota) {
  for (const ataque of mascota.ataque) {
    let botonAtaque = `
      <button id="${ataque.id}" class="boton-ataque" onclick="eventoAtaqueJugador('${ataque.nombre}')">
        ${ataque.nombre}
      </button>
    `;
    document.getElementById("botones-jugador").innerHTML += botonAtaque;
  }
}

function resultadoRonda() {
  let resultado = "";

  switch ((ataqueJugador, ataqueEnemigo)) {
    case (ataqueEnemigo, ataqueJugador):
      resultado = "Empataste";
      break;
    case ("🌱", "💧" || "💧", "🔥" || "🔥", "🌱"):
      resultado = "Ganaste";
      vidasEnemigo--;
      break;
    default:
      resultado = "Perdiste";
      vidasJugador--;
      break;
  }

  return resultado;
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
window.addEventListener("load", iniciarJuego);
