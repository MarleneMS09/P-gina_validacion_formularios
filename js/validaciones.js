export function valida(input){
  const tipoDeInput = input.dataset.tipo;
  if(validadores[tipoDeInput]){
    validadores[tipoDeInput](input)
  } console.log(input.parentElement);
  if(input.validity.valid){
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = ""
  } else {
    input.parentElement.classList.add('input-container--invalid');
    input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipodeInput, input)
  }
};
const tipodeErrores = [
  "valueMissing", 
  "typeMismatch",
  "patternMismatch",
  "customError",
]





const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío"
  }, email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido"
  },
  password: {valueMissing: "El campo contraseña no puede estar vacío",
  patternMismatch: "Al menos 6 carácteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener carácteres especiales"
}, 
 nacimiento: {
  valueMissing: "El campo nacimiento no puede estar vacío",
  customError: "debes tener al menos 18 años de edad",
 },
};


const validadores = {
    nacimiento: (input) => validarNacimiento(input),
};
function mostrarMensajeDeError (tipoDeInput, input){
  let mensaje = "";
  tipodeErrores.forEach(error => {
   if(input.validity(error)){
    console.log(tipoDeInput, error);
    console.log(input.validity[error]);
    console.log(mensajesDeError(tipoDeInput)[error]);
    mensaje = mensajesDeError[tipoDeInput][error];
   }

  })
  return mensaje;
};

function validarNacimiento(input) {
  const fechaCliente = new Date(input.value);
  let mensaje = "";
  if (!mayorDeEdad(fechaCliente)){
    mensaje= "debes tener al menos 18 años de edad";
  }

  input.setCustomValidity(mensaje);
};
function mayorDeEdad(fecha) {
  const fechaActual = new Date();
  const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(),
    fecha.getUTCDate()
  );
  return diferenciaFechas <= fechaActual;
};
/*const inputNacimiento = document.querySelector("#birth");
inputNacimiento.addEventListener("blur", (evento) => {
  validarNacimiento(evento.target);
}); estaba al inicio pero se eliminó*/