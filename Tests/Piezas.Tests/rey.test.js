const rey = require("../../Piezas/rey")
global.blancas = {
    torreI: { nombre: "torre", codigo: "&#9820;", color: "blanca", movida: false },
    torreD: { nombre: "torre", codigo: "&#9820;", color: "blanca", movida: false },
    caballo: { nombre: "caballo", codigo: "&#9822;", color: "blanca" },
    alfil: { nombre: "alfil", codigo: "&#9821;", color: "blanca" },
    reina: { nombre: "reina", codigo: "&#9819;", color: "blanca" },
    rey: { nombre: "rey", codigo: "&#9818;", color: "blanca", movida: false },
    peon: { nombre: "peon", codigo: "&#9823;", color: "blanca" },
}

//Objeto piezas negras con sus datos
global.negras = {
    torreI: { nombre: "torre", codigo: "&#9820;", color: "negra", movida: false },
    torreD: { nombre: "torre", codigo: "&#9820;", color: "negra", movida: false },
    caballo: { nombre: "caballo", codigo: "&#9822;", color: "negra" },
    alfil: { nombre: "alfil", codigo: "&#9821;", color: "negra" },
    reina: { nombre: "reina", codigo: "&#9819;", color: "negra" },
    rey: { nombre: "rey", codigo: "&#9818;", color: "negra", movida: false },
    peon: { nombre: "peon", codigo: "&#9823;", color: "negra" },
}

//Objeto piezas vacías
const piezas = {
    vacio: { nombre: "vacio", codigo: "", color: "nada" }
}


describe('REY posicion [6][4]', () => {
    beforeEach(() => {
        global.matrizTablero = [
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
        ];
        matrizTablero[6][4] = { color: "blanco", nombre: "rey" };
    });

    test('debería retornar verdadero para un movimiento válido del rey hacia adelante', () => {
        expect(rey.rey(6, 4, 5, 4)).toBe(true);
    });

    test('debería retornar verdadero para un movimiento válido del rey hacia atras con casillas vacias', () => {
        expect(rey.rey(6, 4, 7, 4)).toBe(true);
    });

    test('debería retornar verdadero para un movimiento válido del rey en diagonal superior derecha', () => {
        expect(rey.rey(6, 4, 5, 5)).toBe(true);
    });

    test('debería retornar verdadero para un movimiento válido del rey en diagonal superior izquierda', () => {
        expect(rey.rey(6, 4, 5, 3)).toBe(true);
    });

    test('debería retornar verdadero para un movimiento válido del rey en diagonal inferior derecha', () => {
        expect(rey.rey(6, 4, 7, 5)).toBe(true);
    });

    test('debería retornar verdadero para un movimiento válido del rey en diagonal inferior izquierda', () => {
        expect(rey.rey(6, 4, 7, 3)).toBe(true);
    });

    test('debería retornar falso para un movimiento inválido del rey en L', () => {
        global.recorrer = require("../../Funciones/funciones").recorrer
        expect(rey.rey(6, 4, 4, 5)).toBe(false);
    });
});

describe('REY posiciones variables', () => {
    beforeEach(() => {
        // Limpiamos la matrizTablero antes de cada prueba
        global.matrizTablero = [
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
        ];
    });

    test('debería retornar falso para un movimiento inválido del rey hacia abajo', () => {
        matrizTablero[7][4] = { color: "blanco", nombre: "rey" };
        expect(rey.rey(7, 4, 8, 4)).toBe(false);
    });
    
    //ENROQUE
    test('debería retornar verdadero para un enroque válido de las blancas hacia la derecha', () => {
        matrizTablero[7][4] = { color: "blanco", nombre: "rey" };
        matrizTablero[7][7] = { color: "blanco", nombre: "torreD" };
        global.turno = "blanca"
        expect(rey.rey(7, 4, 7, 6)).toBe(true);
    });
    test('debería retornar verdadero para un enroque válido de las blancas hacia la izquierda', () => {
        matrizTablero[7][4] = { color: "blanco", nombre: "rey" };
        matrizTablero[7][0] = { color: "blanco", nombre: "torreI" };
        global.turno = "blanca"
        expect(rey.rey(7, 4, 7, 2)).toBe(true);
    });
    test('debería retornar verdadero para un enroque válido de las negras hacia la derecha', () => {
        matrizTablero[0][4] = { color: "negro", nombre: "rey" };
        matrizTablero[0][7] = { color: "negro", nombre: "torreD" };
        global.turno = "negra"
        expect(rey.rey(0, 4, 0, 6)).toBe(true);
    });
    test('debería retornar verdadero para un enroque válido de las negras hacia la izquierda', () => {
        matrizTablero[0][4] = { color: "negro", nombre: "rey" };
        matrizTablero[0][0] = { color: "negro", nombre: "torreD" };
        global.turno = "negra"
        expect(rey.rey(0, 4, 0, 2)).toBe(true);
    });
});