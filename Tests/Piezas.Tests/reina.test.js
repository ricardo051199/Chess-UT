const reina = require("../../Piezas/reina");
global.matrizTablero = require("../../Tablero/matrizTablero");
global.recorrer = require("../../Funciones/funciones").recorrer
global.recorrerDiagonal = require("../../Funciones/funciones").recorrerDiagonal

test("Primera prueba para validar el movimiento de la reina.", () => {
    let x1 = 0, y1 = 0, x2 = 1, y2 = 0;
    matrizTablero[x1][y1].color = "negro";
    matrizTablero[x2][y2].color = "negro";
    expect(reina(x1,y1,x2,y2)).toBe(false);
});

test("Segunda prueba para validar el movimiento de la reina.", () => {
    let x1 = 0, y1 = 1, x2 = 0, y2 = 0;
    matrizTablero[x1][y1].color = "negro";
    matrizTablero[x2][y2].color = "blanca";
    expect(reina(x1,y1,x2,y2)).toBe(true);
});

test("Tercera prueba para validar el movimiento de la reina.", () => {
    let x1 = 1, y1 = 1, x2 = 0, y2 = 0;
    matrizTablero[x1][y1].color = "negro";
    matrizTablero[x2][y2].color = "blanca";
    expect(reina(x1,y1,x2,y2)).toBe(true);
});

test("Cuarta prueba para validar el movimiento de la reina.", () => {
    let x1 = 0, y1 = 0, x2 = 3, y2 = 1;
    matrizTablero[x1][y1].color = "negro";
    matrizTablero[x2][y2].color = "blanca";
    expect(reina(x1,y1,x2,y2)).toBe(false);
});