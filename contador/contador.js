let cuenta = 0;

function actualizar() {
    let pantalla = document.getElementById("numero");
    pantalla.innerHTML = cuenta;

    if (cuenta <= -2) {
        pantalla.style.color = "red";
    } else {
        pantalla.style.color = "blue";
    }
}

function aumentar() {
    cuenta++;
    actualizar();
}

function disminuir() {
    cuenta--;
    actualizar();
}

function reiniciar() {
    cuenta = 0;
    actualizar();
}

