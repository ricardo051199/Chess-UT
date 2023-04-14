const torreMovida = require("../../Funciones/funciones").torreMovida;
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
describe("TESTS PARA torre", () => {
    beforeEach(() => {
        // Limpiamos la matrizTablero antes de cada prueba
        global.matrizTablero = [
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, negras.torreD, piezas.vacio],
            [piezas.vacio, negras.torreI, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, blancas.torreI, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
            [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, blancas.torreD, piezas.vacio],
        ];
    });
    it('debería retornar movida torre blanca izquierda verdadero ', () => {
        torreMovida()
        expect(matrizTablero[7][0].nombre).toBe("vacio");
    });

    it('debería retornar movida torre blanca derecha verdadero ', () => {
        torreMovida()
        expect(matrizTablero[7][7].nombre).toBe("vacio");
    });

    it('debería retornar movida torre negra izquierda verdadero ', () => {
        torreMovida()
        expect(matrizTablero[0][0].nombre).toBe("vacio");
    });

    it('debería retornar movida torre negra derecha verdadero ', () => {
        torreMovida()
        expect(matrizTablero[0][7].nombre).toBe("vacio");
    });
});