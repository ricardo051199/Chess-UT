const torre = require("../../Piezas/torre");

global.blancas = {
  torreI: {
    nombre: "torre",
    codigo: "&#9820;",
    color: "blanca",
    movida: false,
  },
  torreD: {
    nombre: "torre",
    codigo: "&#9820;",
    color: "blanca",
    movida: false,
  },
  caballo: { nombre: "caballo", codigo: "&#9822;", color: "blanca" },
  alfil: { nombre: "alfil", codigo: "&#9821;", color: "blanca" },
  reina: { nombre: "reina", codigo: "&#9819;", color: "blanca" },
  rey: { nombre: "rey", codigo: "&#9818;", color: "blanca", movida: false },
  peon: { nombre: "peon", codigo: "&#9823;", color: "blanca" },
};

//Objeto piezas negras con sus datos
global.negras = {
  torreI: { nombre: "torre", codigo: "&#9820;", color: "negra", movida: false },
  torreD: { nombre: "torre", codigo: "&#9820;", color: "negra", movida: false },
  caballo: { nombre: "caballo", codigo: "&#9822;", color: "negra" },
  alfil: { nombre: "alfil", codigo: "&#9821;", color: "negra" },
  reina: { nombre: "reina", codigo: "&#9819;", color: "negra" },
  rey: { nombre: "rey", codigo: "&#9818;", color: "negra", movida: false },
  peon: { nombre: "peon", codigo: "&#9823;", color: "negra" },
};

//Objeto piezas vacías
const piezas = {
  vacio: { nombre: "vacio", codigo: "", color: "nada" },
};
global.recorrer = require("../../Funciones/funciones").recorrer;
describe("torre", () => {
  beforeEach(() => {
    // Limpiamos la matrizTablero antes de cada prueba
    global.matrizTablero = [
        [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
        [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
        [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
        [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
        [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
        [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
        [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
        [piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio, piezas.vacio],
    ];
  });

  it("debería retornar false si la pieza de destino está en una posición diagonalmente opuesta a la pieza de origen", () => {
    matrizTablero[0][0] = { color: "blanco", nombre: "torreD" };
    matrizTablero[1][1] = { color: "negro", nombre: "peon" };
    const resultado = torre(0, 0, 1, 1);
    expect(resultado).toBeFalsy();
  });

  //POSICIONES UP DOWN LEFT RIGHT
  it("Mover torre blanca en posición (0,0) a posición (0,4)", () => {
    matrizTablero[0][0] = { nombre: "torreD", color: "blanco" };
    expect(torre(0, 0, 0, 4)).toBeTruthy();
  });

  it("Mover torre blanca en posición (0,0) a posición (4,0)", () => {
    matrizTablero[0][0] = { nombre: "torreD", color: "blanco" };
    expect(torre(0, 0, 4, 0)).toEqual(true);
  });

  it("Mover torre blanca en posición (2,2) a posición (2,0)", () => {
    matrizTablero[2][2] = { nombre: "torreD", color: "blanco" };
    expect(torre(2, 2, 2, 0)).toEqual(true);
  });

  it('La torre no puede moverse si hay una pieza de su mismo color en la casilla destino', () => {
    matrizTablero[3][3] = { color: 'blanco', nombre: 'torreD' };
    matrizTablero[2][3] = { color: 'blanco', nombre: 'alfil' };
    expect(torre(3, 3, 2, 3)).toBe(false);
  });

  it('La torre no puede moverse si quiere ir a la posicion del rey', () => {
    matrizTablero[7][4] = { color: 'blanco', nombre: 'rey' };
    matrizTablero[7][7] = { color: 'blanco', nombre: 'torreD' };
    global.turno = "blanca"
    expect(torre(7, 7, 7, 4)).toBe(false);
  });
});