const torreMovida = require("../../Funciones/funciones").torreMovida;
describe("TESTS PARA reyMovido", () => {

    it('debería retornar movida torre blanca izquierda verdadero ', () => {
        matrizTablero[7][0].nombre = "vacio"
        torreMovida()
        expect(blancas.torreI.movida).toBeTruthy();
    });

    it('debería retornar movida torre blanca derecha verdadero ', () => {
        matrizTablero[7][7].nombre = "vacio"
        torreMovida()
        expect(blancas.torreD.movida).toBeTruthy();
    });

    it('debería retornar movida torre negra izquierda verdadero ', () => {
        matrizTablero[0][0].nombre = "vacio"
        torreMovida()
        expect(negras.torreI.movida).toBeTruthy();
    });

    it('debería retornar movida torre negra derecha verdadero ', () => {
        matrizTablero[0][7].nombre = "vacio"
        torreMovida()
        expect(negras.torreD.movida).toBeTruthy();
    });
});