/*Este código es para el primer formulario para diseñar tu rutina*/
let formOne = document.getElementById("formOne");

function redireccionar(event) {
  event.preventDefault();

  let inputObjetivos = document.getElementById("objetivos").value;
  let inputFrecuencia = document.getElementById("frecuencia").value;

  // Construir URL parametros
  var urlParams = new URLSearchParams();
  urlParams.append("objetivos", inputObjetivos);
  urlParams.append("frecuencia", inputFrecuencia);
  // Redirect to the result page with URL parameters
  window.location.href = "ejercicios.html?" + urlParams.toString();
}
formOne.addEventListener("submit", redireccionar);
