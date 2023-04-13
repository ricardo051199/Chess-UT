const reyMovido = require("../../Funciones/funciones").reyMovido;
const trasladarFicha = require("../../Funciones/funciones").trasladarFicha;
const enroque = require("../../Funciones/funciones").enroque;
global.rey = require("../../Piezas/rey").rey;
global.recorrer = require("../../Funciones/funciones").recorrer
global.blancas = {
    torreI: {
        nombre: "torre",
        codigo: "&#9820;",
        color: "blanca",
        movida: false,
    },
    torreD: {
        nombre: "torre",
        codigo: "&#9820;",
        color: "blanca",
        movida: false,
    },
    caballo: { nombre: "caballo", codigo: "&#9822;", color: "blanca" },
    alfil: { nombre: "alfil", codigo: "&#9821;", color: "blanca" },
    reina: { nombre: "reina", codigo: "&#9819;", color: "blanca" },
    rey: { nombre: "rey", codigo: "&#9818;", color: "blanca", movida: false },
    peon: { nombre: "peon", codigo: "&#9823;", color: "blanca" },
};

//Objeto piezas negras con sus datos
global.negras = {
    torreI: { nombre: "torre", codigo: "&#9820;", color: "negra", movida: false },
    torreD: { nombre: "torre", codigo: "&#9820;", color: "negra", movida: false },
    caballo: { nombre: "caballo", codigo: "&#9822;", color: "negra" },
    alfil: { nombre: "alfil", codigo: "&#9821;", color: "negra" },
    reina: { nombre: "reina", codigo: "&#9819;", color: "negra" },
    rey: { nombre: "rey", codigo: "&#9818;", color: "negra", movida: false },
    peon: { nombre: "peon", codigo: "&#9823;", color: "negra" },
};
global.piezas = {
    vacio: { nombre: "vacio", codigo: "", color: "nada" }
}
describe("TESTS PARA reyMovido", () => {
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

    it('debería retornar verdadero para un enroque válido para comprobar movida del rey negro', () => {
        matrizTablero[0][4] = { color: "negro", nombre: "rey" };
        matrizTablero[7][4] = { color: "blanco", nombre: "rey" };
        matrizTablero[0][7] = { color: "negro", nombre: "torreD" };
        global.turno = "negra"
        rey(0, 4, 0, 6)
        recorrer(0, 4, 0, 6)
        enroque(0, 4, 0, 6);
        trasladarFicha(0, 4, 0, 6);
        reyMovido();
        expect(negras.rey.movida).toBeTruthy();
    });

    it('debería retornar verdadero para un enroque válido para comprobar movida del rey blanco', () => {
        matrizTablero[0][4] = { color: "negro", nombre: "rey" };
        matrizTablero[7][4] = { color: "blanco", nombre: "rey" };
        matrizTablero[7][7] = { color: "blanco", nombre: "torreD" };
        global.turno = "blanca"
        rey(7, 4, 7, 6)
        recorrer(7, 4, 7, 6)
        enroque(7, 4, 7, 6)
        trasladarFicha(7, 4, 7, 6)
        reyMovido();
        expect(blancas.rey.movida).toBeTruthy();
    });
});