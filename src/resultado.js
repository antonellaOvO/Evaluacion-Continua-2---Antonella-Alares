document.addEventListener("DOMContentLoaded", function () {
  // Coger valores seleccionados
  var urlParams = new URLSearchParams(window.location.search);
  var objetivos = urlParams.get("objetivos");
  var frecuencia = urlParams.get("frecuencia");
  alert(objetivos);
  // Determinar rutina basada en la combinación de objetivos y frecuencia
  var rutina = [];
  if (objetivos === "Perder Peso" && frecuencia === "1-2 días a la semana") {
    rutina = ["Push-ups", "Squats"];
  } else if (
    objetivos === "Perder Peso" &&
    frecuencia === "2-3 días a la semana"
  ) {
    rutina = ["Push-ups", "Squats"];
  } else if (
    objetivos === "Mejorar Salud digestiva" &&
    frecuencia === "1-2 días a la semana"
  ) {
    rutina = ["Running", "Cycling"];
  } else if (
    objetivos === "Mejorar Salud digestiva" &&
    frecuencia === "2-3 días a la semana"
  ) {
    rutina = ["Running", "Cycling"];
  } else if (
    objetivos === "Mejorar Resistencia Cardiovascular" &&
    frecuencia === "1-2 días a la semana"
  ) {
    rutina = ["Swimming", "Jumping rope", "HIIT workouts"];
  } else if (
    objetivos === "Mejorar Resistencia Cardiovascular" &&
    frecuencia === "2-3 días a la semana"
  ) {
    rutina = ["Swimming", "Jumping rope", "HIIT workouts"];
  }

  // Display rutinas
  var rutinaList = document.getElementById("rutina-listado");
  rutina.forEach(function (rutina) {
    var rutinaItem = document.createElement("div");
    rutinaItem.textContent = rutina;
    rutinaList.appendChild(rutinaItem);
  });
});
