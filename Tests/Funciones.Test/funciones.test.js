const recorrer = require("../../Funciones/funciones").recorrer;
const recorrerDiagonal = require("../../Funciones/funciones").recorrerDiagonal;

global.matrizTablero = require("../../Tablero/matrizTablero")

describe("Pruebas unitarias para la fincion recorrer.", () => {
    it("1. Deberia devovler false.", () => {
        let x1 = 3, y1 = 3, x2 = 3, y2 = 1;
        matrizTablero[x2][y2+1].color = "negra";
        expect(recorrer(x1,y1,x2,y2)).toBe(false);
    });
    it("2. Deberia devovler true.", () => {
        let x1 = 3, y1 = 3, x2 = 3, y2 = 1;
        matrizTablero[x2][y2+1].color = "nada";
        expect(recorrer(x1,y1,x2,y2)).toBe(true);
    });

    it("3. Deberia devovler false.", () => {
        let x1 = 3, y1 = 3, x2 = 3, y2 = 5;
        matrizTablero[x2][y2-1].color = "negra";
        expect(recorrer(x1,y1,x2,y2)).toBe(false);
    });
    it("4. Deberia devovler true.", () => {
        let x1 = 3, y1 = 3, x2 = 3, y2 = 5;
        matrizTablero[x2][y2-1].color = "nada";
        expect(recorrer(x1,y1,x2,y2)).toBe(true);
    });

    it("5. Deberia devovler false.", () => {
        let x1 = 3, y1 = 3, x2 = 1, y2 = 3;
        matrizTablero[x2+1][y2].color = "negra";
        expect(recorrer(x1,y1,x2,y2)).toBe(false);
    });
    it("6. Deberia devovler true.", () => {
        let x1 = 3, y1 = 3, x2 = 1, y2 = 3;
        matrizTablero[x2+1][y2].color = "nada";
        expect(recorrer(x1,y1,x2,y2)).toBe(true);
    });

    it("7. Deberia devovler false.", () => {
        let x1 = 3, y1 = 3, x2 = 5, y2 = 3;
        matrizTablero[x2-1][y2].color = "negra";
        expect(recorrer(x1,y1,x2,y2)).toBe(false);
    });
    it("8. Deberia devovler true.", () => {
        let x1 = 3, y1 = 3, x2 = 5, y2 = 3;
        matrizTablero[x2-1][y2].color = "nada";
        expect(recorrer(x1,y1,x2,y2)).toBe(true);
    });

    it("9. Deberia devovler false.", () => {
        let x1 = 3, y1 = 3, x2 = 5, y2 = 5;
        expect(recorrer(x1,y1,x2,y2)).toBe(false);
    });
    it("10. Deberia devovler true.", () => {
        let x1 = 3, y1 = 3, x2 = 3, y2 = 3;
        expect(recorrer(x1,y1,x2,y2)).toBe(false);
    });
});



describe("Pruebas unitarias para la fincion recorrerDiagonal.", () => {
    it("1. Deberia devovler false.", () => {
        let x1 = 3, y1 = 3, x2 = 1, y2 = 1;
        matrizTablero[x1-1][y1-1].color = "negra";
        expect(recorrerDiagonal(x1,y1,x2,y2)).toBe(false);
    });
    it("2. Deberia devovler true.", () => {
        let x1 = 3, y1 = 3, x2 = 1, y2 = 1;
        matrizTablero[x1-1][y1-1].color = "nada";
        expect(recorrerDiagonal(x1,y1,x2,y2)).toBe(true);
    });

    it("3. Deberia devovler false.", () => {
        let x1 = 3, y1 = 3, x2 = 5, y2 = 1;
        matrizTablero[x1-1][y1+1].color = "negra";
        expect(recorrerDiagonal(x1,y1,x2,y2)).toBe(false);
    });
    it("4. Deberia devovler true.", () => {
        let x1 = 3, y1 = 3, x2 = 5, y2 = 1;
        matrizTablero[x1-1][y1+1].color = "nada";
        expect(recorrerDiagonal(x1,y1,x2,y2)).toBe(true);
    });

    it("5. Deberia devovler false.", () => {
        let x1 = 3, y1 = 3, x2 = 1, y2 = 5;
        matrizTablero[x1+1][y1-1].color = "negra";
        expect(recorrerDiagonal(x1,y1,x2,y2)).toBe(false);
    });
    it("6. Deberia devovler true.", () => {
        let x1 = 3, y1 = 3, x2 = 1, y2 = 5;
        matrizTablero[x1+1][y1-1].color = "nada";
        expect(recorrerDiagonal(x1,y1,x2,y2)).toBe(true);
    });

    it("7. Deberia devovler false.", () => {
        let x1 = 3, y1 = 3, x2 = 5, y2 = 5;
        matrizTablero[x1+1][y1+1].color = "negra";
        expect(recorrerDiagonal(x1,y1,x2,y2)).toBe(false);
    });
    it("8. Deberia devovler true.", () => {
        let x1 = 3, y1 = 3, x2 = 5, y2 = 5;
        matrizTablero[x1+1][y1+1].color = "nada";
        expect(recorrerDiagonal(x1,y1,x2,y2)).toBe(true);
    });

    it("9. Deberia devovler false.", () => {
        let x1 = 3, y1 = 3, x2 = 1, y2 = 3;
        expect(recorrerDiagonal(x1,y1,x2,y2)).toBe(false);
    });
    it("10. Deberia devovler false.", () => {
        let x1 = 3, y1 = 3, x2 = 5, y2 = 3;
        expect(recorrerDiagonal(x1,y1,x2,y2)).toBe(false);
    });
    it("11. Deberia devovler false.", () => {
        let x1 = 3, y1 = 3, x2 = 3, y2 = 1;
        expect(recorrerDiagonal(x1,y1,x2,y2)).toBe(false);
    });
});
