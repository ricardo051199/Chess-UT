const alfil = require("../../Piezas/alfil")
global.matrizTablero = require("../../Tablero/matrizTablero")
global.recorrerDiagonal = require("../../Funciones/funciones").recorrerDiagonal

test("Primera prueba para validar el movimiento del alfil.", () => {
    let x1 = 0, y1 = 0, x2 = 1, y2 = 0;
    matrizTablero[x1][x1].color = "negro"
    matrizTablero[x2][y2].color = "negro"
    expect(alfil (x1,y1,x2,y2)).toBe(false);//Falso pq deberia avanzar diagonal no vertical
});
test("Segunda prueba para validar el movimiento del alfil.", () => {
    let x1 = 1, y1 = 1, x2 = 0, y2 = 0;
    matrizTablero[x1][x1].color = "blancas"
    matrizTablero[x2][y2].color = "blancas"
    expect(alfil (x1,y1,x2,y2)).toBe(true);
});
test("Tercera prueba para validar el movimiento del alfil.", () => {
    let x1 = 1, y1 = 1, x2 = 0, y2 = 0;
    matrizTablero[x1][x1].color = "blancas"
    matrizTablero[x2][y2].color = "blancas"
    expect(alfil (x1,y1,x2,y2)).toBe(false);
});
