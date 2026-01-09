let prompt = require("prompt-sync")();
let datos = {nombre: "Ariel",
            edad: 28,
            ciudad: "Buenos Aires"};
console.clear();
let nombre = prompt("ingrese nombre: ");
console.log("Welcome to the Primer.js interactive prompt!");
console.log(`Hello, ${nombre}! Let's get started with some JavaScript coding.`);
let respuesta = prompt("¿Cómo estás hoy? ");
respuesta == "bien" ? console.log("¡Me alegro de escuchar eso!") : console.log("Espero que tu día mejore.");
console.log(datos["nombre"]);
console.log(datos.ciudad);
datos.nombre = prompt("Ingrese un nuevo nombre para actualizar: ");
datos.edad = prompt("Ingrese una nueva edad para actualizar: ");
datos.ciudad = prompt("Ingrese una nueva ciudad para actualizar: ");
console.log(`Datos actualizados: Nombre - ${datos.nombre}, Edad - ${datos.edad}, Ciudad - ${datos.ciudad}`);
