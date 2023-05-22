import { medicamentos } from "./medicamentos.js";

var PrecioFinal =  0.0;
var PrecioFinal_aux;
var PrecioNeto =  0.0;
var PrecioNeto_aux;
var texto_pedido = "";
var texto_precio = "";
//CREAR ESTOS DOS POR CADA PRODUCTO
var texto_amoxicilina = "";
var amoxicilina_cant = 1;
var texto_doloflam = "";
var doloflam_cant = 1;
var texto_panadol = "";
var panadol_cant = 1;


var textareaDescripcion = document.querySelector('textarea[name="description-atencion"]');

var botonAmoxicilina = document.getElementById("Amoxicilina");
var botonDoloflam = document.getElementById("Doloflam");
var botonPanadol = document.getElementById("Panadol");

var botonGenerarPedido = document.getElementById("generar-pedido");

botonAmoxicilina.addEventListener("click", function() {
    var medicamentoAmoxicilina = medicamentos.find(medicamento => medicamento.name === 'Amoxicilina');

    texto_amoxicilina = "\t" + medicamentoAmoxicilina.name + "\t\t\t\t" + "X" + amoxicilina_cant + "\n";
    
    amoxicilina_cant = amoxicilina_cant + 1;
    // Construir el texto a mostrar en el textarea
    PrecioFinal = PrecioFinal + medicamentoAmoxicilina.precio;
    PrecioFinal_aux = PrecioFinal.toFixed(2);

    texto_precio =  "Precio Final: " + "\t" + PrecioFinal_aux + "\n";

    texto_pedido = "\tNOMBRE DEL MEDICAMENTO\t\t\tCANTIDAD" + "\n" + "\n" +  texto_amoxicilina + texto_doloflam + texto_panadol;
    // Asignar el texto al valor del textarea
    textareaDescripcion.value = texto_pedido;
});
botonDoloflam.addEventListener("click", function() {
    var medicamentoDoloflam = medicamentos.find(medicamento => medicamento.name === 'Doloflam');

    texto_doloflam = "\t" + medicamentoDoloflam.name + "\t\t\t\t" + "X" + doloflam_cant + "\n";
    
    doloflam_cant = doloflam_cant + 1;
    // Construir el texto a mostrar en el textarea
    PrecioFinal = PrecioFinal + medicamentoDoloflam.precio;
    PrecioFinal_aux = PrecioFinal.toFixed(2);

    texto_precio =  "Precio Final: " + "\t" + PrecioFinal_aux + "\n";

    texto_pedido = "\tNOMBRE DEL MEDICAMENTO\t\t\tCANTIDAD" + "\n" + "\n" +  texto_amoxicilina + texto_doloflam + texto_panadol;
    // Asignar el texto al valor del textarea
    textareaDescripcion.value = texto_pedido;
});
botonPanadol.addEventListener("click", function() {
    var medicamentoPanadol = medicamentos.find(medicamento => medicamento.name === 'Panadol');

    texto_panadol = "\t" + medicamentoPanadol.name + "\t\t\t\t\t" + "X" + panadol_cant + "\n";
    
    panadol_cant = panadol_cant + 1;
    // Construir el texto a mostrar en el textarea
    PrecioFinal = PrecioFinal + medicamentoPanadol.precio;
    PrecioFinal_aux = PrecioFinal.toFixed(2);

    texto_precio =  "\t" + "Precio Final: " + "\t" + PrecioFinal_aux + "\n";

    texto_pedido = "\tNOMBRE DEL MEDICAMENTO\t\t\tCANTIDAD" + "\n" + "\n" +  texto_amoxicilina + texto_doloflam + texto_panadol;
    // Asignar el texto al valor del textarea
    textareaDescripcion.value = texto_pedido;
});
botonGenerarPedido.addEventListener("click", function() {
    localStorage.setItem("pedido", texto_pedido);
    localStorage.setItem("precio", texto_precio);
});




/*
// Obtener los productos desde la base de datos
// Código para realizar una consulta a la base de datos y obtener los productos

// Mostrar los productos en la interfaz
var productList = document.getElementById('productList');

productos.forEach(function(producto) {
  var item = document.createElement('div');
  item.textContent = producto.nombre;
  productList.appendChild(item);
});

// Agregar evento de clic para seleccionar un producto
productList.addEventListener('click', function(event) {
  var selectedProduct = event.target.textContent;
  
  // Generar un pedido con el producto seleccionado
  // Código para crear un pedido con detalles del producto seleccionado
  // Mostrar una imagen emergente o una ventana modal con los detalles del pedido
});
*/