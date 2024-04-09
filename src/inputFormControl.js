let formTwo = document.getElementById("formTwo");

function redireccionar(event) {
  event.preventDefault();

  let inputEjercicioOne = document.getElementById("ejercicioOne").value;
  let inputEjercicioTwo = document.getElementById("ejercicioTwo").value;
  let inputEjercicioThree = document.getElementById("ejercicioThree").value;
  let inputRepeticionOne = document.getElementById("repeticionOne").value;
  let inputRepeticionTwo = document.getElementById("repeticionTwo").value;
  let inputRepeticionThree = document.getElementById("repeticionThree").value;

  // Construir URL parametros
  var urlParams = new URLSearchParams();
  urlParams.append("ejercicioOne", inputEjercicioOne);
  urlParams.append("ejercicioTwo", inputEjercicioTwo);
  urlParams.append("ejercicioThree", inputEjercicioThree);
  urlParams.append("repeticionOne", inputRepeticionOne);
  urlParams.append("repeticionTwo", inputRepeticionTwo);
  urlParams.append("repeticionThree", inputRepeticionThree);

  // Redirect to the result page with URL parameters
  window.location.href = "feedback-control.html?" + urlParams.toString();
}
formTwo.addEventListener("submit", redireccionar);

// Para reproducir o pausar video
let video = document.getElementById("myVideo");
function playVid() {
  video.play();
}

function pauseVid() {
  video.pause();
}
