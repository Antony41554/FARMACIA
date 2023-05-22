var texto_pedido = "";
var texto_precio = "";

var textareaDescripcion1 = document.querySelector('textarea[name="description-cajero1"]');
var textareaDescripcion2 = document.querySelector('textarea[name="description-cajero2"]');

var botonObtenerPedido = document.getElementById("obtener-pedido");

botonObtenerPedido.addEventListener("click", function(event) {
    event.preventDefault();
    texto_pedido = localStorage.getItem("pedido");
    texto_precio = localStorage.getItem("precio");
    textareaDescripcion1.value = texto_pedido;
    textareaDescripcion2.value = texto_precio; 
});



/*document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores ingresados por el cajero
    var paymentMethod = document.getElementById('paymentMethod').value;
    var customerName = document.getElementById('customerName').value;
    
    // Almacenar la información del pedido, datos del cliente y modalidad de pago en la base de datos
    // Código para realizar una consulta SQL y guardar la información en la base de datos
});
*/