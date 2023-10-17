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

    return !error; // Return true if there are no validation errors, allowing the form to submit
}