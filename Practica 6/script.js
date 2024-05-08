function generatePDF() {
//Crear una instancia de jsPDF
var doc = new jsPDF();
//Obtener los datos del formulario

var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var email = document.getElementById("email").value;
var rfc = document.getElementById("rfc").value;

//Agregar los datos al documento PDF
doc.text("Datos registrados correctamente:", 55,20);
doc.text("Nombre: " + fname, 15, 35);
doc.text("Apellido: " + lname, 15, 45);
doc.text("Direccion de correo electronico: " + email, 15, 55);
doc.text("Numero de RFC: " + rfc, 15, 65);
//Guardar el pdf
doc.save("Formulario.pdf");
}