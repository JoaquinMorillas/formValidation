const submitFunction = (event) => {
  console;
  if (validarFormulario()) {
    event.preventDefault();
    alert(
      "Nombre: " +
        document.getElementById("nombre").value +
        "\n" +
        "Apellido: " +
        document.getElementById("apellido").value +
        "\n" +
        "Email: " +
        document.getElementById("email").value +
        "\n" +
        "Edad: " +
        document.getElementById("edad").value +
        "\n" +
        "ocupacion: " +
        document.getElementById("ocupacion").value +
        "\n" +
        "Educacion: " +
        document.getElementById("educacion").value +
        "\n"
    );
  } else {
    event.preventDefault();
  }
};

document
  .getElementById("formulario")
  .addEventListener("submit", submitFunction);

function validarFormulario() {
  let validacion = true;

  //validar inputs de texto
  const camposText = document.querySelectorAll('input[type="text"]');

  camposText.forEach((campo) => {
    console.log(campo.value);
    console.log(campo.value.length);
    let errorCampo = document.getElementById(
      "error" + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)
    );
    if (campo.value.length == 0) {
      mostrarError(errorCampo, "El campo " + campo.id + " esta vacio!");
      validacion = false;
    } else if (campo.value.length < 3) {
      mostrarError(
        errorCampo,
        "El campo " + campo.id + " debe tener minimo 3 caracteres"
      );
      validacion = false;
    } else {
      ocultarError(errorCampo);
    }
  });

  //validar email
  const email = document.getElementById("email");
  const errorEmail = document.getElementById("errorEmail");

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    // este regex valida que el formato del email se válido
    ocultarError(errorEmail);
  } else {
    mostrarError(errorEmail, "¡Ingrese un correo electrónico válido!");
    validacion = false;
  }

  //validar edad

  const edad = document.getElementById("edad");
  const errorEdad = document.getElementById("errorEdad");

  if (edad.value < 18) {
    mostrarError(errorEdad, "Debes ser mayor de 18 años");
    validacion = false;
  } else {
    ocultarError(errorEdad);
  }

  // validar ocupacion

  const ocupacion = document.getElementById("ocupacion");
  const errorOcupacion = document.getElementById("errorOcupacion");

  if (!ocupacion.value) {
    mostrarError(errorOcupacion, "Por favor elige una ocupacion");
    validacion = false;
  } else {
    ocultarError(errorOcupacion);
  }
  // validar educacion
  const educacion = document.getElementById("educacion");
  const errorEducacion = document.getElementById("errorEducacion");

  if (!educacion.value) {
    mostrarError(errorEducacion, "Por favor elige un estudio");
    validacion = false;
  } else {
    ocultarError(errorEducacion);
  }

  //validar terminos

  const terminos = document.getElementById("terminos");
  const errorTerminos = document.getElementById("errorTerminos");

  if (!terminos.checked) {
    mostrarError(
      errorTerminos,
      "Tienes que aceptar los terminos y condiciones"
    );
    validacion = false;
  } else {
    ocultarError(errorTerminos);
  }
  return validacion;
}
function mostrarError(campo, mensaje) {
  campo.textContent = mensaje;
  campo.style.display = "block";
}

function ocultarError(campo) {
  campo.style.display = "none";
}
