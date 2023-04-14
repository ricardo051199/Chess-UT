const peon = require("../../Piezas/peon")
global.matrizTablero = require("../../Tablero/matrizTablero")
global.recorrer= require("../../Funciones/funciones").recorrer

test("Prueba para validar el movimiento normal del peon blanco hacia adelante", () => {
    let x1 = 6, y1 = 0, x2 = 5, y2 = 0;
    matrizTablero[x1][y1].color = "blanca";
    matrizTablero[x2][y2].color = "nada";
    expect(peon(x1,y1,x2,y2)).toEqual(true);
});

test("Prueba para validar el movimiento normal del peon negro hacia adelante", () => {
    let x1 = 1, y1 = 0, x2 = 2, y2 = 0;
    matrizTablero[x1][y1].color = "negra";
    matrizTablero[x2][y2].color = "nada";
    expect(peon(x1,y1,x2,y2)).toEqual(true);
});


test("Prueba para validar el movimiento diagonal del peon blanco para matar", () => {
    let x1 = 6, y1 = 0, x2 = 5, y2 = 1;
    matrizTablero[x1][y1].color = "blanca";
    matrizTablero[x2][y2].color = "negra";
    expect(peon(x1,y1,x2,y2)).toEqual(true);
});

test("Prueba para validar el movimiento diagonal del peon negro para matar", () => {
    let x1 = 1, y1 = 1, x2 = 2, y2 = 0;
    matrizTablero[x1][y1].color = "negra";
    matrizTablero[x2][y2].color = "blanca";
    expect(peon(x1,y1,x2,y2)).toEqual(true);
});

test("Prueba para validar el movimiento diagonal del peon blanco hacia adelante, debe ser invalido", () => {
    let x1 = 6, y1 = 0, x2 = 5, y2 = 1;
    matrizTablero[x1][y1].color = "blanca";
    matrizTablero[x2][y2].color = "nada";
    expect(peon(x1,y1,x2,y2)).toEqual(false);
});

test("Prueba para validar el movimiento diagonal del peon negro hacia adelante, debe ser invalido", () => {
    let x1 = 1, y1 = 0, x2 = 2, y2 = 1;
    matrizTablero[x1][y1].color = "negra";
    matrizTablero[x2][y2].color = "nada";
    expect(peon(x1,y1,x2,y2)).toEqual(false);
});

test("Prueba para validar el movimiento inicio del peon blanco", () => {
    let x1 = 6, y1 = 0, x2 = 4, y2 = 0;
    matrizTablero[x1][y1].color = "blanca";
    matrizTablero[x2][y2].color = "nada";
    expect(peon(x1,y1,x2,y2)).toEqual(true);
});
