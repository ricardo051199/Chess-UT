
const alfil = require("../../Piezas/alfil")
global.matrizTablero = require("../../Tablero/matrizTablero")
global.recorrerDiagonal = require("../../Funciones/funciones").recorrerDiagonal

test("Primera prueba para validar el movimiento del alfil.", () => {
    let x1 = 0, y1 = 0, x2 = 1, y2 = 1;
    matrizTablero[x1][y1].color = "negro"
    matrizTablero[x2][y2].color = "negro"
    expect(alfil (x1,y1,x2,y2)).toBe(false);
});
test("Segunda prueba para validar el movimiento del alfil.", () => {
    let x1 = 0, y1 = 0, x2 = 1, y2 = 1;
    matrizTablero[x1][y1].color = "negro"
    matrizTablero[x2][y2].color = "blancas"
    expect(alfil (x1,y1,x2,y2)).toBe(true);
});
test("Tercera prueba para validar el movimiento del alfil.", () => {
    let x1 = 0, y1 = 0, x2 = 0, y2 = 1;
    matrizTablero[x1][y1].color = "negro"
    matrizTablero[x2][y2].color = "blancas"
    expect(alfil (x1,y1,x2,y2)).toBe(false);
});