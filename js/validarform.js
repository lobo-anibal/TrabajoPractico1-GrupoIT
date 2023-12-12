function validarF() {
    let nombre = document.querySelector(`#name`);
    let correo = document.querySelector(`#email`);
    let asunto = document.querySelector(`#subject`);
    let mensaje = document.querySelector(`#message`);
    let nameV = document.querySelector("#name-v");
    let emailV = document.querySelector("#email-v");
    let asuntoV = document.querySelector("#asunto-v");
    let consultaV = document.querySelector("#consulta-v");
    let error = false;

    if (nombre.value.trim() === "") {
        nameV.innerHTML = "Nombre no puede estar vacío";
        error = true;
        nombre.focus();
    } else {
        nameV.innerHTML = "&nbsp";
    }

    if (correo.value.trim() === "") {
        emailV.innerHTML = "Correo no puede estar vacío";
        error = true;
        correo.focus();
    } else {
        emailV.innerHTML = "&nbsp";
    }

    if (asunto.value.trim() === "") {
        asuntoV.innerHTML = "El asunto no puede estar vacío";
        error = true;
        asunto.focus();
    } else {
        asuntoV.innerHTML = "&nbsp";
    }

    if (mensaje.value.trim() === "") {
        consultaV.innerHTML = "El mensaje no puede estar vacío"; 
        mensaje.focus();
    } else {
        consultaV.innerHTML = "&nbsp";
    }

    if (!error) {
        alert("Formulario validado con éxito. Enviando...");
    }

    return !error;
}

// Validar el ingreso a la pagina de admin

const validar = sessionStorage.getItem("validar");

function validaringreso() {
  console.log("Validar", validar);
  if (validar === "false") {
    console.log("Entra a la Pagina Admin");
  } else {
    //alert("No tiene los privilegios para entrar a la pagina");
    //window.location.href = "./productos.html";
    Swal.fire({
      position: "center",
      icon: "error",
      title: "No tiene los privilegios para entrar a la pagina",
      showConfirmButton: true,
    }).then(() => {
      window.location.href = "./productos.html";
    });
  }
}
