const recorrer = require("../../Funciones/funciones").recorrer;

global.matrizTablero = require("../../Tablero/matrizTablero")

describe("Pruebas unitarias para la fincion recorrer.", () => {
    it("1. Se interpone  una ficha aliada hacia la izquierda.", () => {
        let x1 = 3, y1 = 3, x2 = 3, y2 = 1;
        matrizTablero[x1][y1].color = "negra";
        matrizTablero[x2][y2+1].color = "negra";
        expect(recorrer(x1,y1,x2,y2)).toBeFalsy();
    });
    it("2. No se interpone  una ficha aliada hacia la izquierda.", () => {
        let x1 = 3, y1 = 3, x2 = 3, y2 = 1;
        matrizTablero[x1][y1].color = "negra";
        matrizTablero[x2][y2+1].color = "nada";
        expect(recorrer(x1,y1,x2,y2)).toBeTruthy();
    });

    it("3. Se interpone  una ficha aliada hacia la derecha.", () => {
        let x1 = 3, y1 = 3, x2 = 3, y2 = 5;
        matrizTablero[x1][y1].color = "negra";
        matrizTablero[x2][y2-1].color = "negra";
        expect(recorrer(x1,y1,x2,y2)).toBeFalsy();
    });
    it("4. No se interpone  una ficha aliada hacia la derecha.", () => {
        let x1 = 3, y1 = 3, x2 = 3, y2 = 5;
        matrizTablero[x1][y1].color = "negra";
        matrizTablero[x2][y2-1].color = "nada";
        expect(recorrer(x1,y1,x2,y2)).toBeTruthy();
    });

    it("5. Se interpone  una ficha aliada hacia abajo.", () => {
        let x1 = 3, y1 = 3, x2 = 1, y2 = 3;
        matrizTablero[x1][y1].color = "negra";
        matrizTablero[x2+1][y2].color = "negra";
        expect(recorrer(x1,y1,x2,y2)).toBeFalsy();
    });
    it("6. No se interpone  una ficha aliada hacia abajo.", () => {
        let x1 = 3, y1 = 3, x2 = 1, y2 = 3;
        matrizTablero[x1][y1].color = "negra";
        matrizTablero[x2+1][y2].color = "nada";
        expect(recorrer(x1,y1,x2,y2)).toBeTruthy();
    });

    it("7. Se interpone  una ficha aliada hacia abajo.", () => {
        let x1 = 3, y1 = 3, x2 = 5, y2 = 3;
        matrizTablero[x1][y1].color = "negra";
        matrizTablero[x2-1][y2].color = "negra";
        expect(recorrer(x1,y1,x2,y2)).toBeFalsy();
    });
    it("8. No se interpone  una ficha aliada hacia abajo.", () => {
        let x1 = 3, y1 = 3, x2 = 5, y2 = 3;
        matrizTablero[x1][y1].color = "negra";
        matrizTablero[x2-1][y2].color = "nada";
        expect(recorrer(x1,y1,x2,y2)).toBeTruthy();
    });

    it("9. Origen y destino similares.", () => {
        let x1 = 3, y1 = 3, x2 = 5, y2 = 5;
        expect(recorrer(x1,y1,x2,y2)).toBeFalsy();
    });
    it("10. Origen y destino similares.", () => {
        let x1 = 3, y1 = 3, x2 = 3, y2 = 3;
        expect(recorrer(x1,y1,x2,y2)).toBeFalsy();
    });
});