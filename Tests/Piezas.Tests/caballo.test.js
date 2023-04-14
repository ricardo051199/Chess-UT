const caballo = require("../../Piezas/caballo")
global.matrizTablero = require("../../Tablero/matrizTablero")

test("Primera prueba para validar el movimiento del caballo negro de la posicion [0-0] al [2-1], destino denegado por un peon negro.", () => {
    let x1 = 0, y1 = 0, x2 = 1, y2 = 2;
    matrizTablero[x1][y1].color = "negro"
    matrizTablero[x2][y2].color = "negro"
    expect(caballo(x1,y1,x2,y2)).toBeFalsy();
});

test("Segunda prueba para validar el movimiento del caballo negro de la posicion [0-0] al [1-2], destino aceptado con la opcion de comer un peon blanco.", () => {
    let x1 = 0, y1 = 0, x2 = 2, y2 = 1;
    matrizTablero[x1][y1].color = "negro"
    matrizTablero[x2][y2].color = "blancas"
    expect(caballo(x1,y1,x2,y2)).toBeTruthy();
});

test("Tercera prueba para validar el movimiento del caballo negro de la posicion [0-0] al [2-1], destino aceptado con la opcion de comer un peon blanco..", () => {
    let x1 = 0, y1 = 0, x2 = 1, y2 = 2;
    matrizTablero[x1][y1].color = "negro";
    matrizTablero[x2][y2].color = "blancas";
    expect(caballo(x1,y1,x2,y2)).toBeTruthy();
});

test("Cuarta prueba para validar el movimiento del caballo negro de la posicion [0-0] al [2-0], destino aceptado con la opcion de comer un peon blanco..", () => {
    let x1 = 1, y1 = 0, x2 = 0, y2 = 2;
    matrizTablero[x1][y1].color = "negro";
    matrizTablero[x2][y2].color = "blancas";
    expect(caballo(x1,y1,x2,y2)).toBeTruthy();
});

test("Quinta prueba para validar el movimiento del caballo negro de la posicion [0-2] al [1-0], destino aceptado con la opcion de comer un peon blanco..", () => {
    let x1 = 2, y1 = 0, x2 = 0, y2 = 1;
    matrizTablero[x1][y1].color = "negro";
    matrizTablero[x2][y2].color = "blancas";
    expect(caballo(x1,y1,x2,y2)).toBeTruthy();
});

test("Sexta prueba para validar el movimiento del caballo negro de la posicion [0-3] al [1-0], destino denegado porque es un movimiento que un caballo no puede realizar.", () => {
    let x1 = 3, y1 = 0, x2 = 0, y2 = 1;
    matrizTablero[x1][y1].color = "negro";
    matrizTablero[x2][y2].color = "blancas";
    expect(caballo(x1,y1,x2,y2)).toBeFalsy();
});

test("Cuarta prueba para validar el movimiento del caballo negro de la posicion [1-0] al [0-2], destino aceptado con la opcion de comer un peon blanco..", () => {
    let x1 = 0, y1 = 1, x2 = 2, y2 = 0;
    matrizTablero[x1][y1].color = "negro";
    matrizTablero[x2][y2].color = "blancas";
    expect(caballo(x1,y1,x2,y2)).toBeTruthy();
});

test("Cuarta prueba para validar el movimiento del caballo negro de la posicion [2-0] al [0-1], destino aceptado con la opcion de comer un peon blanco..", () => {
    let x1 = 0, y1 = 2, x2 = 1, y2 = 0;
    matrizTablero[x1][y1].color = "negro";
    matrizTablero[x2][y2].color = "blancas";
    expect(caballo(x1,y1,x2,y2)).toBeTruthy();
});