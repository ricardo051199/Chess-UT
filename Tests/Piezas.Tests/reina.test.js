const reina = require("../../Piezas/reina");
global.matrizTablero = require("../../Tablero/matrizTablero")
global.recorrer = require("../../Funciones/funciones").recorrer
global.recorrerDiagonal = require("../../Funciones/funciones").recorrerDiagonal

test("Primera prueba para validar el movimiento de la reina negro de la posicion [0-0] al [0-1], destino denegado por que se encuentra una ficha aliada.", () => {
    let x1 = 0, y1 = 0, x2 = 1, y2 = 0;
    matrizTablero[x1][y1].color = "negro";
    matrizTablero[x2][y2].color = "negro";
    expect(reina(x1,y1,x2,y2)).toBeFalsy();
});

test("Segunda prueba para validar el movimiento de la reina negro de la posicion [1-0] al [0-0], destino aceptado con la opcion de comer una ficha rival.", () => {
    let x1 = 0, y1 = 1, x2 = 0, y2 = 0;
    matrizTablero[x1][y1].color = "negro";
    matrizTablero[x2][y2].color = "blanca";
    expect(reina(x1,y1,x2,y2)).toBeTruthy();
});

test("Tercera prueba para validar el movimiento de la reina negro de la posicion [1-1] al [0-0], destino aceptado con la opcion de comer una ficha rival.", () => {
    let x1 = 1, y1 = 1, x2 = 0, y2 = 0;
    matrizTablero[x1][y1].color = "negro";
    matrizTablero[x2][y2].color = "blanca";
    expect(reina(x1,y1,x2,y2)).toBeTruthy();
});

test("Cuarta prueba para validar el movimiento de la reina negro de la posicion [0-0] al [1-3], destino denegado por que el movimiento es invalido.", () => {
    let x1 = 0, y1 = 0, x2 = 3, y2 = 1;
    matrizTablero[x1][y1].color = "negro";
    matrizTablero[x2][y2].color = "blanca";
    expect(reina(x1,y1,x2,y2)).toBeFalsy();
});