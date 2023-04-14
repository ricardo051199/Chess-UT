const cambiarTurno = require("../../Funciones/funciones").cambiarTurno;

describe("TESTS PARA reyMovido", () => {
    test('cambia el valor de turno blanca a negra y actualiza el texto en el elemento HTML', () => {
        // Creamos un elemento HTML y lo agregamos al documento
        document.body.innerHTML = '<div id="textoTurno"></div>';
        global.turno = "blanca"
        // Ejecutamos la función para cambiar el turno
        cambiarTurno();
    
        // Verificamos que el valor de "turno" haya cambiado adecuadamente
        expect(turno).toBe('negra');
    
        // Verificamos que el texto en el elemento "textoTurno" haya cambiado adecuadamente
        expect(document.getElementById('textoTurno').innerHTML).toBe('<span id=\"peonN\">♟</span>');
    });

    test('cambia el valor de turno negra a blanca y actualiza el texto en el elemento HTML', () => {
        // Creamos un elemento HTML y lo agregamos al documento
        document.body.innerHTML = '<div id="textoTurno"></div>';
        global.turno = "negra"
        // Ejecutamos la función para cambiar el turno
        cambiarTurno();
    
        // Verificamos que el valor de "turno" haya cambiado adecuadamente
        expect(turno).toBe('blanca');
    
        // Verificamos que el texto en el elemento "textoTurno" haya cambiado adecuadamente
        expect(document.getElementById('textoTurno').innerHTML).toBe('<span id=\"peonB\">♟</span>');
    });
});