const alfil = require("../../Piezas/alfil")
global.matrizTablero = require("../../Tablero/matrizTablero")
global.recorrerDiagonal = require("../../Funciones/funciones").recorrerDiagonal


test("Deberia dar verdadero porque esta comiendo a otra ficha y avanzando en diagonal.", () => {
    let x1 = 1, y1 = 1, x2 = 0, y2 = 0;
    matrizTablero[x1][y1].color = "negro"
    matrizTablero[x2][y2].color = "blancas"
    expect(alfil (x1,y1,x2,y2)).toBe(true);
});
test("Deberia dar falso para un movimiento recto del alfil.", () => {
    let x1 = 0, y1 = 0, x2 = 1, y2 = 1;
    matrizTablero[x1][y1].color = "negro"//Alfil en posicion inicial
    matrizTablero[x2][y2].color = "negro"//Destino q habita una pieza del mismo color
    expect(alfil (x1,y1,x2,y2)).toBe(false);//Falso pq deberia avanzar diagonal no vertical
});
test("Deberia dar falso porque el alfil no puede comer recto.", () => {
    let x1 = 0, y1 = 0, x2 = 0, y2 = 1;
    matrizTablero[x1][y1].color = "negro"
    matrizTablero[x2][y2].color = "blancas"
    expect(alfil (x1,y1,x2,y2)).toBe(false);
});

