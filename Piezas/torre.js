function esMismoColor(x1, y1, x2, y2) {
    return matrizTablero[x2][y2].color === matrizTablero[x1][y1].color;
}

function esRey(x2, y2) {
    return matrizTablero[x2][y2].nombre === "rey";
}

function esMovimientoValido(x1, y1, x2, y2) {
    return recorrer(x1, y1, x2, y2);
}

function torre(x1, y1, x2, y2) {
    if (esMismoColor(x1, y1, x2, y2)) {
        return esRey(x2, y2) ? false : false;
    } else {
        return esMovimientoValido(x1, y1, x2, y2);
    }
}