const express = require('express');
const app = express();
const PORT = 3000;

//Middleware para registrar cada solicitud.
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(), // Llamamos next() para continuar con la siguiente accion.
});

//Ruta raiz
app.get('/', (req, res) => {
    res.send('Hola, mundo');
});

app.listen (PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
