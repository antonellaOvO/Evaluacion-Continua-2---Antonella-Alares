document.addEventListener("DOMContentLoaded", function () {
  // Coger valores seleccionados
  var urlParams = new URLSearchParams(window.location.search);

  var ejercicioOne = urlParams.get("ejercicioOne");
  var ejercicioTwo = urlParams.get("ejercicioTwo");
  var ejercicioThree = urlParams.get("ejercicioThree");
  var repeticionOne = urlParams.get("repeticionOne");
  var repeticionTwo = urlParams.get("repeticionTwo");
  var repeticionThree = urlParams.get("repeticionThree");
  let introTwo = document.getElementById("intro-section-two");
  let introThree = document.getElementById("intro-section-three");

  /*switch (true) {
    case repeticionOne > 1 || repeticionTwo > 1 || repeticionThree > 1:
      introTwo.textContent = `EJERCICIO "${ejercicioOne}" lo has realizado en total ${repeticionThree} repeticiones. A la próxima harás más repeticiones seguro!! 😉`;
      introThree.textContent = `Mira los ejercicios que hemos seleccionado para ti, teniendo en cuenta tu dedicación de ${repeticionTwo}. Ayúdate con videos para saber en detalle como realizar estos ejercicios`;
      break;
    default:
      alert(error);
  }*/

  //Realizamos matriz para extraer el ejercicio y repeticion correcto en cada línea de feedback
  let ejercicios = [
    [ejercicioOne, repeticionOne],
    [ejercicioTwo, repeticionTwo],
    [ejercicioThree, repeticionThree],
  ];

  for (i = 0; i < ejercicios.length; i++) {
    for (j = 0; j < ejercicios.length; j++) {
      let ejercicio = ejercicios[i][j];
      let repeticion = ejercicios[i][j + 1];
      let newLineEjercicio = document.createElement("h3");
      if (ejercicio != undefined && ejercicio != Number(ejercicio)) {
        newLineEjercicio.textContent = `Ejercicio "${ejercicio}" lo has realizado en total ${repeticion} repeticiones. A la próxima harás más repeticiones seguro!! 😉`;
        newLineEjercicio.setAttribute("class", "my-5 p-3 rounded text-white");
        newLineEjercicio.style.backgroundColor = "indianred";
        newLineEjercicio.style.fontFamily = "ABeeZee";
        introTwo.appendChild(newLineEjercicio);

        console.log("ejercicio:" + ejercicio + "repeticion:" + repeticion);
      }
    }
  }
});
