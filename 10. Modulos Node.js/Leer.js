const fs = require('fs'); //Importar el modulo fs.

//Usar fs.readFile para leer el archivo de manera asincrona.
fs.readFile('Archivo.txt', 'utf8', (err, data) => {
    if(err) {
        console.error('Hubo un error al leer el archivo:', err);
        return;
    }
    console.log('Contenido del archivo:', data); // Muestra el contenido del archivo en la consola.
});

