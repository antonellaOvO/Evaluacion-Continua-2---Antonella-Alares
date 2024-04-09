document.addEventListener("DOMContentLoaded", function () {
  // Coger valores seleccionados
  var urlParams = new URLSearchParams(window.location.search);
  var objetivos = urlParams.get("objetivos");
  var frecuencia = urlParams.get("frecuencia");
  var nombre = urlParams.get("nombre");
  var edad = urlParams.get("edad");
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
  } else if (
    objetivos === "Mejorar Glúteos" &&
    frecuencia === "1-2 días a la semana"
  ) {
    rutina = ["Push-ups", "Squats"];
  } else if (
    objetivos === "Mejorar Glúteos" &&
    frecuencia === "2-3 días a la semana"
  ) {
    rutina = ["Push-ups", "Squats"];
  } else if (
    objetivos === "Aumentar Fuerza Muscular" &&
    frecuencia === "1-2 días a la semana"
  ) {
    rutina = ["Swimming", "Jumping rope", "HIIT workouts"];
  } else if (
    objetivos === "Aumentar Fuerza Muscular" &&
    frecuencia === "2-3 días a la semana"
  ) {
    rutina = ["Swimming", "Jumping rope", "HIIT workouts"];
  } else if (
    objetivos === "Marcar y Definir" &&
    frecuencia === "1-2 días a la semana"
  ) {
    rutina = ["Push-ups", "Squats"];
  } else if (
    objetivos === "Marcar y Definir" &&
    frecuencia === "2-3 días a la semana"
  ) {
    rutina = ["Push-ups", "Squats"];
  }

  if (nombre === nombre && edad === edad) {
    let nombreUsuario = nombre;
    /*Para que la primeta letra del nombre del usario se siempre en mayúscula*/
    nombreUsuario =
      nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    /*Crear una sección para dar bienvenida al usario a su rutina diseñada*/
    let introOne = document.getElementById("intro-section-one");
    let introTwo = document.getElementById("intro-section-two");
    introOne.textContent =
      "Bienvenid@ " + `${nombreUsuario} 🎉` + " a tu Rutina personalizada!!";
    introTwo.textContent = `${edad} años es una buena edad para empezar 😉`;
  }

  if (frecuencia === frecuencia) {
    /*Crear una sección para dar bienvenida al usario a su rutina diseñada*/

    let introThree = document.getElementById("intro-section-three");
    introThree.textContent = `Mira los ejercicios que hemos seleccionado para ti, teniendo en cuenta tu dedicación de ${frecuencia}. Ayúdate con videos para saber en detalle como realizar estos ejercicios`;
  }

  // Display rutinas
  let rutinaList = document.getElementById("rutina-listado");
  let rutinaTitle = document.getElementById("rutina-title");

  /*Crear el titulo de la rutina en función del objetivo seleccionado */
  rutinaTitle.textContent = "Rutina " + `${objetivos}`;

  rutinaTitle.classList.add("text-center");
  rutina.forEach(function (rutina) {
    let rutinaItem = document.createElement("div");
    let subtitle = document.createElement("h3");
    let image = document.createElement("img");
    let video = document.createElement("iframe");

    /*Añadir atributos al elemeno h3 (subtitle)*/
    subtitle.setAttribute("class", "my-5");

    /*Añadir atributos al elemeno imagen*/
    image.setAttribute("src", "images/rutina-img.png");
    image.setAttribute("class", "img-fluid");

    /*Añadir atributos al elemeno video*/
    video.setAttribute("class", "my-5");
    video.setAttribute(
      "src",
      "https://www.youtube.com/embed/9v3uFEAL7Ys?si=P6oBp-ubOx3friw2"
    );
    video.setAttribute("width", "560");
    video.setAttribute("height", "315");
    video.setAttribute("title", "YouTube video player");
    video.setAttribute("frameborder", "0");
    video.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    );
    video.setAttribute("frameborder", "0");
    video.setAttribute("referrerpolicy", "object-fit-contain");
    video.setAttribute("autoplay", "strict-origin-when-cross-origin");
    video.setAttribute("allowfullscreen", "");

    /*Customizaar contenido y style cada elemento de rutina*/
    subtitle.textContent = rutina;
    rutinaItem.classList.add("p-3");
    rutinaItem.classList.add("mx-3");
    rutinaItem.classList.add("bg-warning-subtle");
    rutinaItem.classList.add("text-warning-emphasis");
    rutinaItem.classList.add("fw-bold");
    rutinaItem.classList.add("text-center");
    rutinaList.appendChild(rutinaItem);
    /*Añadir a cada elmento de rutina un título y una imagen*/
    rutinaItem.appendChild(subtitle);
    rutinaItem.appendChild(image);
    rutinaItem.appendChild(video);
  });
});
