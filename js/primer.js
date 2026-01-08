let prompt = require("prompt-sync")();
let nombre = prompt("ingrese nombre: ");
console.log("Welcome to the Primer.js interactive prompt!");
console.log(`Hello, ${nombre}! Let's get started with some JavaScript coding.`);
let respuesta = prompt("¿Cómo estás hoy? ");
respuesta == "bien" ? console.log("¡Me alegro de escuchar eso!") : console.log("Espero que tu día mejore.");
