function esMismoColor(x1, y1, x2, y2) {
    return matrizTablero[x2][y2].color == matrizTablero[x1][y1].color;
}

function esMovimientoEnCruz(x1, y1, x2, y2) {
    return ((x1 == x2 - 1 || x1 - 1 == x2) && (y1 == y2)) || ((y1 == y2 - 1 || y1 - 1 == y2) && (x1 == x2));
}

function esMovimientoEnDiagonal(x1, y1, x2, y2) {
    return ((x1 - 1 == x2) && (y1 - 1 == y2)) || ((x1 - 1 == x2) && (y1 == y2 - 1)) ||
        ((x1 == x2 - 1) && (y1 == y2 - 1)) || ((x1 == x2 - 1) && (y1 - 1 == y2));
}

function esEnroque(x1, y1, x2, y2) {
    return recorrer(x1, y1, x2, y2) &&
        (
            (turno == "blanca" && (
                (x2 == 7 && y2 == 6 && !blancas.rey.movida && !blancas.torreD.movida) ||
                (x2 == 7 && y2 == 2 && !blancas.rey.movida && !blancas.torreI.movida && matrizTablero[7][1].color == "nada")
            )) ||
            (turno == "negra" && (
                (x2 == 0 && y2 == 6 && !negras.rey.movida && !negras.torreD.movida) ||
                (x2 == 0 && y2 == 2 && !negras.rey.movida && !negras.torreI.movida && matrizTablero[0][1].color == "nada")
            ))
        );
}

function esMovimientoValido(x1, y1, x2, y2) {
    return !esMismoColor(x1, y1, x2, y2) &&
        (esMovimientoEnCruz(x1, y1, x2, y2) || esMovimientoEnDiagonal(x1, y1, x2, y2) || esEnroque(x1, y1, x2, y2));
}

function rey(x1, y1, x2, y2) {
    return esMovimientoValido(x1, y1, x2, y2);
}

export {esMismoColor}
