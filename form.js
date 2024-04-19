function validarNombre(){
    let nombre = document.getElementById("nombre").value;  
    let regex = /^[^\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/u;    
    let miRegex = regex.test(nombre);
    console.log(miRegex);

    if(!nombre){  
    $('#nombre').removeClass("is-valid").addClass("is-invalid")
    $('.errorNombre').text('no puede quedar vacio').removeClass("text-success").addClass("text-danger")
    }else if(miRegex == false){
    $('#nombre').removeClass("is-valid").addClass("is-invalid")
    $('.errorNombre').text('No puede contener numeros ni simbolos').removeClass("text-success").addClass("text-danger")
    }else{
     $('#nombre').removeClass("is-invalid").addClass("is-valid")
    $('.errorNombre').text('nombre válido').removeClass("text-danger").addClass("text-success")
    }
}

function validarApellido(){
    let apellido = document.getElementById("apellido").value;  
    let regex = /^[^\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/u;    
    let miRegex = regex.test(apellido);
    console.log(miRegex);

    if(!apellido){  
    $('#apellido').removeClass("is-valid").addClass("is-invalid")
    $('.errorApellido').text('no puede quedar vacio').removeClass("text-success").addClass("text-danger")
    }else if(miRegex == false){
    $('#apellido').removeClass("is-valid").addClass("is-invalid")
    $('.errorApellido').text('No puede contener numeros ni simbolos').removeClass("text-success").addClass("text-danger")
    }else{
     $('#apellido').removeClass("is-invalid").addClass("is-valid")
    $('.errorApellido').text('apellido válido').removeClass("text-danger").addClass("text-success")
    }
}

function validarEmail(){
    let mail = document.getElementById("validarMail").value;  

    if(!mail){  
    $('#validarMail').removeClass("is-valid").addClass("is-invalid")
    $('#errorMail').text('no puede quedar vacio').removeClass("text-success").addClass("text-danger")
    }else if(!mail.includes("@")){
    $('#validarMail').removeClass("is-valid").addClass("is-invalid")
    $('#errorMail').text('te falta el @').removeClass("text-success").addClass("text-danger")
    }else if(!mail.includes(".com")){
    $('#validarMail').removeClass("is-valid").addClass("is-invalid")
    $('#errorMail').text('ingrese un dominio valido').removeClass("text-success").addClass("text-danger")
    }else{
     $('#validarMail').removeClass("is-invalid").addClass("is-valid")
    $('#errorMail').text('correo válido').removeClass("text-danger").addClass("text-success")
    }
    document.getElementById("validarMail").value = mail.toLowerCase()
}


function validarContraseña() {
    let contraseña = document.getElementById("contraseña").value;  
    let repetirContraseña = document.getElementById("repetirContraseña").value;
    let regexNum = /\d/; // Esta expresión regular verifica si hay al menos un dígito.

    if (!contraseña) {
        $('#contraseña').removeClass("is-valid").addClass("is-invalid");
        $('.errorContraseña').text('No puede quedar vacía').removeClass("text-success").addClass("text-danger");
    } else if (contraseña.length < 8) {
        $('#contraseña').removeClass("is-valid").addClass("is-invalid");
        $('.errorContraseña').text('La contraseña debe tener un mínimo de 8 caracteres').removeClass("text-success").addClass("text-danger");
    } else if (!regexNum.test(contraseña)) {
        $('#contraseña').removeClass("is-valid").addClass("is-invalid");
        $('.errorContraseña').text('Debe contener al menos un número').removeClass("text-success").addClass("text-danger");
    } else {
        $('#contraseña').removeClass("is-invalid").addClass("is-valid");
        $('.errorContraseña').text('contraseña valida').removeClass("text-danger").addClass("text-success");
    }

    if (!repetirContraseña) {
        $('#repetirContraseña').removeClass("is-valid").addClass("is-invalid");
        $('.errorRepetirContraseña').text('No puede quedar vacía').removeClass("text-success").addClass("text-danger");
    } else if (repetirContraseña !== contraseña) {
        $('#repetirContraseña').removeClass("is-valid").addClass("is-invalid");
        $('.errorRepetirContraseña').text('Las contraseñas no coinciden').removeClass("text-success").addClass("text-danger");
    } else {
        $('#repetirContraseña').removeClass("is-invalid").addClass("is-valid");
        $('.errorRepetirContraseña').text('las contraeñas coinciden').removeClass("text-danger").addClass("text-success");
    }
}

function validarCiudad(){
    let ciudad = document.getElementById("ciudad").value;  
    let regex = /^[^\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/u;    
    let miRegex = regex.test(ciudad);
    console.log(miRegex);

    if(!ciudad){  
    $('#ciudad').removeClass("is-valid").addClass("is-invalid")
    $('.errorCiudad').text('no puede quedar vacio').removeClass("text-success").addClass("text-danger")
    }else if(miRegex == false){
    $('#ciudad').removeClass("is-valid").addClass("is-invalid")
    $('.errorCiudad').text('no puede contener números ni simbolos').removeClass("text-success").addClass("text-danger")
    }else if(ciudad.length< 3){
    $('#ciudad').removeClass("is-valid").addClass("is-invalid")
    $('.errorCiudad').text('Introduce una ciudad valida').removeClass("text-success").addClass("text-danger")
    }else{
     $('#ciudad').removeClass("is-invalid").addClass("is-valid")
    $('.errorCiudad').text('Ciudad válida').removeClass("text-danger").addClass("text-success")
    }

}

function validarTelefono(){
    let telefono = document.getElementById("telefono").value;
    let regex = /^[0-9]+$/;
    let miregex = regex.test(telefono);

    if (!telefono) {
        $('#telefono').removeClass("is-valid").addClass("is-invalid");
        $('.errorTelefono').text('No puede quedar vacío').removeClass("text-success").addClass("text-danger");
    } else if (!miregex) {
        $('#telefono').removeClass("is-valid").addClass("is-invalid");
        $('.errorTelefono').text('No puede contener letras').removeClass("text-success").addClass("text-danger");
    }else if(telefono.length !== 10){
        $('#telefono').removeClass("is-valid").addClass("is-invalid");
        $('.errorTelefono').text('El telefono es incorrecto').removeClass("text-success").addClass("text-danger");
    }else{
        $('#telefono').removeClass("is-invalid").addClass("is-valid");
        $('.errorTelefono').text('Telefono válido').removeClass("text-danger").addClass("text-success");
    }
}


function validarDni() {
    let dni = document.getElementById("dni").value;
    let regex = /^[0-9]+$/;
    let miregex = regex.test(dni);

    if (!dni) {
        $('#dni').removeClass("is-valid").addClass("is-invalid");
        $('.errorDni').text('No puede quedar vacío').removeClass("text-success").addClass("text-danger");
    } else if (!miregex) {
        $('#dni').removeClass("is-valid").addClass("is-invalid");
        $('.errorDni').text('El DNI solo debe contener numeros').removeClass("text-success").addClass("text-danger");
    }else if(dni.length < 7 || dni.length > 8){
        $('#dni').removeClass("is-valid").addClass("is-invalid");
        $('.errorDni').text('El DNI es incorrecto').removeClass("text-success").addClass("text-danger");
    } else {
        $('#dni').removeClass("is-invalid").addClass("is-valid");
        $('.errorDni').text('DNI válido').removeClass("text-danger").addClass("text-success");
    }
}

function validarSexo(){
    let sexo = document.getElementById("sexo").value;

    if (!sexo || sexo === 'Seleccionar') {
        $('#sexo').removeClass("is-valid").addClass("is-invalid");
        $('.errorSexo').text('Debe seleccionar una opción válida').removeClass("text-success").addClass("text-danger");
    } else {
        $('#sexo').removeClass("is-invalid").addClass("is-valid");
        $('.errorSexo').text('Sexo válido').removeClass("text-danger").addClass("text-success");
    }
}

function validarCheckbox() {
    let checkbox = document.getElementById("invalidCheck3");
    let checkboxFeedback = document.getElementById("invalidCheck3Feedback");

    if (checkbox.checked) {
        checkbox.classList.remove("is-invalid");
        checkbox.classList.add("is-valid");
        checkboxFeedback.textContent = ''; // Limpiar el mensaje de error
    } else {
        checkbox.classList.remove("is-valid");
        checkbox.classList.add("is-invalid");
        checkboxFeedback.textContent = 'Este campo es obligatorio.';
    }
}

function enviarFormulario(event){
    event.preventDefault(); 

    validarNombre();
    validarApellido();
    validarEmail();
    validarContraseña();
    validarTelefono();
    validarDni();
    validarSexo();
    validarCheckbox();

    if ($('.is-invalid').length === 0) {

        let nombre = document.getElementById("nombre").value;  
        let apellido = document.getElementById("apellido").value;  
        let mail = document.getElementById("validarMail").value;  
        let contraseña = document.getElementById("contraseña").value;  
        let repetirContraseña = document.getElementById("repetirContraseña").value;
        let ciudad = document.getElementById("ciudad").value;  
        let telefono = document.getElementById("telefono").value;
        let dni = document.getElementById("dni").value;
        let sexo = document.getElementById("sexo").value;

        const formData = {
            nombre,
            apellido,
            mail,
            contraseña,
            repetirContraseña,
            ciudad,
            telefono,
            dni,
            sexo
        };

        const formDataJSON = JSON.stringify(formData);

        localStorage.setItem("formData", formDataJSON);
        
        let nuevosDatos = localStorage.getItem("formData");

        console.log(nuevosDatos)
        
        Swal.fire('Formulario enviado correctamente');



        // Reiniciar el formulario
        //document.getElementById("registroForm").reset();
    } else {
        Swal.fire('Por favor, corrige los errores en el formulario');
    }
}