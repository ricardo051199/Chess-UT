const enroque = require("../../Funciones/funciones").enroque;
global.recorrer = require("../../Funciones/funciones").recorrer;
global.rey = require("../../Piezas/rey").rey;

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

describe("TESTS PARA enroque", () => {
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

    it("debería realizar el enroque largo de las blancas correctamente", () => {
        matrizTablero[7][4] = { color: "blanco", nombre: "rey" };
        matrizTablero[7][0] = { color: "blanco", nombre: "torreI" };
        global.turno = "blanca";
        rey(7, 4, 7, 2);
        recorrer(7, 4, 7, 2);
        enroque(7, 4, 7, 2);
        expect(matrizTablero[7][3].color).toBe("blanco");
        expect(matrizTablero[7][3].nombre).toBe("torreI");
        expect(matrizTablero[7][0]).toBe(piezas.vacio);
    });

    it("debería realizar el enroque largo de las negras correctamente", () => {
        matrizTablero[0][4] = { color: "negro", nombre: "rey" };
        matrizTablero[0][0] = { color: "negro", nombre: "torreI" };
        global.turno = "negra";
        rey(0, 4, 0, 2);
        recorrer(0, 4, 0, 2);
        enroque(0, 4, 0, 2);
        expect(matrizTablero[0][3].color).toBe("negro");
        expect(matrizTablero[0][3].nombre).toBe("torreI");
        expect(matrizTablero[0][0]).toBe(piezas.vacio);
    });
});