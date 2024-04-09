let formTwo = document.getElementById("formTwo");

function redireccionarAgain(event) {
  event.preventDefault();

  let inputObjetivos = document.getElementById("objetivos").value;
  let inputFrecuencia = document.getElementById("frecuencia").value;
  let inputNombre = document.getElementById("nombre").value;
  let inputEdad = document.getElementById("edad").value;

  // Construir URL parametros
  var urlParams = new URLSearchParams();
  urlParams.append("objetivos", inputObjetivos);
  urlParams.append("frecuencia", inputFrecuencia);
  urlParams.append("nombre", inputNombre);
  urlParams.append("edad", inputEdad);
  // Redirect to the result page with URL parameters
  window.location.href = "feedback-control.html?" + urlParams.toString();
}
formTwo.addEventListener("submit", redireccionarAgain);
