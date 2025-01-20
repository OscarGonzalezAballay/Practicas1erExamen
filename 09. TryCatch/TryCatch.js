function parsearJSON(jsonString) {
    try {
        const parsedData = JSON.parse(jsonString);
        console.log("JSON parseado con exito:", parsedData);
        return parsedData;
    } catch (error) {
        console.error("Error al parsear JSON:", error.message);
        return null;
    }
}

//EJ
const jsonCorrecto = '{"nombre": "Juan", "edad": 30}';
const jsonIncorrecto = '{"nombre": "Juan", "edad: 25';//Falta una comilla de cierre
parsearJSON(jsonCorrecto); //Funciona Correctamente
parsearJSON(jsonIncorrecto); //Genera Error

function validarNumeroEnRango(numero, min, max) {
    try {
        if (typeof numero !== 'number') {
            throw new Error("El valor no es un numero");
        }
        if (numero < min || numero > max) {
            throw new Error(`El numero $(numero) está fuera del rango permitido (${min}-${max})`);
        }
        console.log(`El numero ${numero} esta dentro del rango permitido`);
        return true;
    } catch (error) {
        console.error("Error:", error.message);
        return false;
    }
}

//EJ
validarNumeroEnRango(15, 10, 20); // DENTRO DE RANGO
validarNumeroEnRango(25, 10, 20); //FUERA DE RANGO
validarNumeroEnRango("quince", 10, 20); //Error