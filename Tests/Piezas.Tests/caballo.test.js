const caballo = require("../../Piezas/caballo")
const matrizTablero = require("../../Tablero/matrizTablero")

test("Primera prueba para validar el movimiento del caballo.", () => {
    let x1 = 0, y1 = 0, x2 = 1, y2 = 0;
    matrizTablero[x1][x1].color = "negro"
    matrizTablero[x2][y2].color = "negro"
    expect(caballo(x1,y1,x2,y2, matrizTablero)).toBe(false);
});

test("Segunda prueba para validar el movimiento del caballo.", () => {
    let x1 = 0, y1 = 0, x2 = 2, y2 = 1;
    matrizTablero[x1][x1].color = "negro"
    matrizTablero[x2][y2].color = "blancas"
    expect(caballo(x1,y1,x2,y2, matrizTablero)).toBe(true);
});

test("Tercera prueba para validar el movimiento del caballo.", () => {
    let x1 = 0, y1 = 0, x2 = 1, y2 = 2;
    matrizTablero[x1][x1].color = "negro";
    matrizTablero[x2][y2].color = "blancas";
    expect(caballo(x1,y1,x2,y2, matrizTablero)).toBe(true);
});

test("Cuarta prueba para validar el movimiento del caballo.", () => {
    let x1 = 1, y1 = 0, x2 = 0, y2 = 2;
    matrizTablero[x1][x1].color = "negro";
    matrizTablero[x2][y2].color = "blancas";
    expect(caballo(x1,y1,x2,y2, matrizTablero)).toBe(true);
});

test("Quinta prueba para validar el movimiento del caballo.", () => {
    let x1 = 2, y1 = 0, x2 = 0, y2 = 1;
    matrizTablero[x1][x1].color = "negro";
    matrizTablero[x2][y2].color = "blancas";
    expect(caballo(x1,y1,x2,y2, matrizTablero)).toBe(true);
});

test("Sexta prueba para validar el movimiento del caballo.", () => {
    let x1 = 3, y1 = 0, x2 = 0, y2 = 1;
    matrizTablero[x1][x1].color = "negro";
    matrizTablero[x2][y2].color = "blancas";
    expect(caballo(x1,y1,x2,y2, matrizTablero)).toBe(false);
});