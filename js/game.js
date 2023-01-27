function iniciarJuego() {
  let eleccionGenero = document.getElementById("confirmar-avatar");
  eleccionGenero.addEventListener("click", confirmarAvatar);
}

function confirmarAvatar() {
  // Confirmacion del nombre
  const inputNombreJugador = document.getElementById("name").value;

  // Confirmacion del genero
  const inputAvatarDragon = document.getElementById("dragon");
  const inputAvatarFantasma = document.getElementById("fantasma");
  const inputAvatarCabra = document.getElementById("cabra");
  let mensajeAvatar = "";

  if (inputAvatarDragon.checked) {
    mensajeAvatar = "🐉";
  } else if (inputAvatarFantasma.checked) {
    mensajeAvatar = "👻";
  } else if (inputAvatarCabra.checked) {
    mensajeAvatar = "🐐";
  } else {
    mensajeAvatar = "Tienes que seleccionar una mascota";
  }

  // mensaje de confirmación
  let mensajeConfirmacion = document.getElementById("nombre-jugador");
  mensajeConfirmacion.innerHTML = `${mensajeAvatar} ${inputNombreJugador}`;
}


// Permite que cargue todo el HTML para luego iniciar los scripts
window.addEventListener("load", iniciarJuego);
