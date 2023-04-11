const rey = require("../../Piezas/rey")
// const matrizTablero = require("../../Tablero/matrizTablero")
// const recorrer = require("../../Funciones/funciones")
// global.matrizTablero = matrizTablero;
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
global.matrizTablero = [
    [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
    [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
    [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
    [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
    [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
    [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
    [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, blancas.rey, piezas.vacio, piezas.vacio, piezas.vacio],
    [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
];


describe('REY', () => {
    test("Sanity check", () => {
        expect(true).toBe(true);
    });

    test('debería retornar verdadero para un movimiento válido del rey hacia adelante', () => {
        // console.log(matrizTablero[6][4])
        expect(rey.rey(6, 4, 5, 4)).toBe(true);
    });

    test('debería retornar verdadero para un movimiento válido del rey hacia atras con casillas vacias', () => {
        // console.log(matrizTablero[6][4])
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

    test('debería retornar falso para un movimiento inválido del rey hacia abajo', () => {
        global.matrizTablero = [
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, blancas.rey, piezas.vacio, piezas.vacio, piezas.vacio],
        ];
        expect(rey.rey(7, 4, 8, 4)).toBe(false);
    });
    //ENROQUE
    test('debería retornar verdadero para un enroque válido de las blancas hacia la derecha', () => {
        global.matrizTablero = [
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, blancas.rey, piezas.vacio, piezas.vacio, blancas.torreD],
        ];
        global.turno = "blanca"
        expect(rey.rey(7, 4, 7, 6)).toBe(true);
    });

    test('debería retornar verdadero para un enroque válido de las blancas hacia la izquierda', () => {
        global.matrizTablero = [
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [blancas.torreI, piezas.vacio, piezas.vacio, piezas.vacio, blancas.rey, piezas.vacio, piezas.vacio, piezas.vacio],
        ];
        global.turno = "blanca"
        expect(rey.rey(7, 4, 7, 2)).toBe(true);
    });

    test('debería retornar verdadero para un enroque inválido de las blancas hacia la derecha', () => {
        global.matrizTablero = [
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, blancas.rey, blancas.torreD, piezas.vacio, piezas.vacio],
        ];
        global.turno = "blanca"
        expect(rey.rey(7, 4, 7, 6)).toBe(false);
    });

    test('debería retornar falso para un enroque inválido de las blancas hacia la izquierda', () => {
        global.matrizTablero = [
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, blancas.torreI, piezas.vacio, blancas.rey, piezas.vacio, piezas.vacio, piezas.vacio],
        ];
        global.turno = "blanca"
        expect(rey.rey(7, 4, 7, 2)).toBe(false);
    });

    test('debería retornar verdadero para un enroque válido de las negras hacia la derecha', () => {
        global.matrizTablero = [
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, negras.rey, piezas.vacio, piezas.vacio, negras.torreD],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
        ];
        global.turno = "negra"
        expect(rey.rey(0, 4, 0, 2)).toBe(true);
    });

    test('debería retornar verdadero para un enroque válido de las negras hacia la izquierda', () => {
        global.matrizTablero = [
            [negras.torreI, piezas.vacio, piezas.vacio, piezas.vacio, negras.rey, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
        ];
        global.turno = "negra"
        expect(rey.rey(0, 4, 0, 2)).toBe(true);
    });

    test('debería retornar verdadero para un enroque inválido de las negras hacia la derecha', () => {
        global.matrizTablero = [
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, negras.rey, negras.alfil, piezas.vacio, negras.torreD],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
        ];
        global.turno = "negra"
        expect(rey.rey(0, 4, 0, 6)).toBe(false);
    });

    test('debería retornar verdadero para un enroque inválido de las negras hacia la derecha', () => {
        global.matrizTablero = [
            [piezas.vacio, piezas.vacio, negras.torreI, piezas.vacio, negras.rey, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
        ];
        global.turno = "negra"
        expect(rey.rey(0, 4, 0, 2)).toBe(false);
    });

    

    test('debería retornar falso para un movimiento hacia arriba inválido del rey hacia una casilla ocupada por una pieza del mismo color', () => {
        global.matrizTablero = [
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, blancas.peon, blancas.peon, blancas.caballo, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, blancas.peon, blancas.rey, blancas.peon, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, blancas.torreI, blancas.reina, blancas.caballo, blancas.alfil, piezas.vacio, piezas.vacio],
        ];
        global.turno = "blanca"
        expect(rey.rey(6, 4, 5, 4)).toBe(false);
    });

    test('debería retornar falso para un movimiento hacia arriba inválido del rey hacia una casilla ocupada por una pieza del mismo color', () => {
        global.matrizTablero = [
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, negras.alfil, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, negras.rey, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, negras.peon, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
        ];
        global.turno = "negra"
        expect(rey.rey(1, 4, 2, 4)).toBe(false);
    });
});