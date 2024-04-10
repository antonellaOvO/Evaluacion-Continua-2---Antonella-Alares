/*Este código es para el primer formulario para diseñar tu rutina*/
let formOne = document.getElementById("formOne");

function redireccionar(event) {
  event.preventDefault();

  /*Validar input de edad en el formulario para que sea un número*/

  function validateForm() {
    let edad = document.getElementById("edad").value;
    if (edad != Number(edad)) {
      let errorMessage = document.getElementById("errorOne");
      errorMessage.textContent = "El valor de edad debe contener sólo números";
    } else if (edad < 13 || edad > 90) {
      let errorMessage = document.getElementById("errorOne");
      errorMessage.textContent =
        "El valor de edad debe contener sólo números de 13 a 90 años";
    } else {
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
      window.location.href = "ejercicios.html?" + urlParams.toString();
    }
  }
  validateForm();
}
formOne.addEventListener("submit", redireccionar);
