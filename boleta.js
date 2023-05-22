
import { medicamentos } from "./medicamentos.js";
var detalleDeVenta = [];
  detalleDeVenta.push(medicamentos[0]);
  detalleDeVenta.push(medicamentos[1]);

var FinalizarVenta = document.getElementById("finalizar-venta");

FinalizarVenta.addEventListener("click", (event) => {
    event.preventDefault();
    const width = 210;
    const height = 297;

    const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [width, height]
    });
    doc.setFontSize(18);
    doc.text("FARMACIA", 60, 10);
    doc.setFontSize(12);
    doc.text("RUC 1012345678", 10, 20);
  
    doc.text("BOLETA DE VENTA ELECTRÓNICA", 10, 30);
  
    //------------------------------------------------------------
    const numeroBoleta = Math.floor(10000000 + Math.random() * 90000000); // Genera un número aleatorio de 8 dígitos
    
    doc.text("Número de boleta: " + numeroBoleta, 10, 50);
    // Obtiene la fecha y hora actual
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toLocaleString();

    doc.text("Fecha y hora de emisión: " + fechaFormateada, 10, 60);
    doc.text("================================================", 10, 70);
    doc.text("Descripción", 10, 80);
    doc.text("Cantidad x P.unitario                   Total", 10, 90);
    
    let yPosition = 100;
    let total = 0;

    for (let i = 0; i < detalleDeVenta.length; i++) {
        const producto = detalleDeVenta[i];
        const { name, precio } = producto;
        const cantidad = 1;
        const subtotal = cantidad * precio;

        doc.text(name, 10, yPosition);
        doc.text(`${cantidad} X ${precio.toFixed(2)}                                      ${subtotal.toFixed(2)}`, 10, yPosition + 10);

        yPosition += 20;
        total += subtotal;
    }

    doc.text("================================================", 10, yPosition);
    doc.text("IMPORTE TOTAL                          " + total.toFixed(2), 10, yPosition + 10);
    doc.text("================================================", 10, yPosition + 20);
    doc.text("MEDICO: JUAN CARLOS GARCIA LOPEZ            ", 10, yPosition + 30);

    doc.save("boleta.pdf");
});