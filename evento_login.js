
var botonIniciarSesion = document.getElementById("iniciar-sesion");
botonIniciarSesion.addEventListener("click", function(event) {
event.preventDefault();

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
// Realizar la validación y autenticación con la base de datos
if(validarCredenciales(username, password) == 1){
    window.location.href = "interfaz_atencion.html";
}else if(validarCredenciales(username, password) == 2){
    window.location.href = "interfaz_cajero.html";
}
});
function validarCredenciales(usuario, contraseña) {
// Aquí debes implementar la lógica para comparar los datos ingresados con los registros de la base de datos
// Puedes hacer una petición al servidor, consultar una API o acceder a la base de datos directamente

// USUARIOS DEL SISTEMA

var usuarioAtencion = "Arkan";
var passwordAtencion = "01256388";

var usuarioCajero = "A";
var passwordCajero = "B";

if (usuario == usuarioAtencion && contraseña == passwordAtencion){
    return 1;
}else if (usuario == usuarioCajero && contraseña == passwordCajero) {
    return 2;
}
}