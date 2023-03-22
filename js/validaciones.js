const inputNacimiento = document.querySelector("#birth");

inputNacimiento.addEventListener("blur", (evento) => {
  validarNacimiento(evento.target);
});

function validarNacimiento(input) {
  const fechaCliente = new Date(input.value);
  let mensaje ="";
  if (!mayorDeEdad(fechaCliente)){
    mensaje= "debes tener al menos 18 años de edad";
  }

  input.setCustomValidity(mensaje);
}
function mayorDeEdad(fecha) {
  const fechaActual = new Date();
  const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(),
    fecha.getUTCDate()
  );
  console.log(diferenciaFechas <= fechaActual);
}
