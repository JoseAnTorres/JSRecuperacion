window.onload = iniciar;

const asientos = document.querySelectorAll('.fila .asiento:not(.ocupado)');
const numero = document.getElementById('numero');
const total = document.getElementById('total');
const pelicula = document.getElementById('pelicula');

function iniciar() {
    document.getElementsByClassName("contenedor")[0].addEventListener("click", clickAsientos);
    recordar();
    actualizar()
}

let precioCine = +pelicula.value;

function clickAsientos(event) {
    let asientoDisponible = event.target.classList.contains("asiento");
    let asientoOcupado = event.target.classList.contains("ocupado");
    let asientoCambiado = event.target.classList.toggle('seleccionado');

    if (asientoDisponible && !asientoOcupado) {
        asientoCambiado;
        actualizar()
    }
}

function actualizar() {
    const asientosSeleccionado = document.querySelectorAll('.fila .asiento.seleccionado');
    const asientosCont = [...asientosSeleccionado].map((asiento) => {
        return [...asientos].indexOf(asiento)
    })

    localStorage.setItem('asientosColoreados', JSON.stringify(asientosCont));

    const contadorAsientos = asientosSeleccionado.length;

    numero.innerText = contadorAsientos;
    total.innerText = contadorAsientos * precioCine;
}

function recordar() {
    const asientosSeleccionado = JSON.parse(localStorage.getItem('asientosColoreados'));

    if (asientosSeleccionado !== null && asientosSeleccionado.length > 0) {
        asientos.forEach((asiento, posicion) => {
            if (asientosSeleccionado.indexOf(posicion) > -1) {
                asiento.classList.add('seleccionado');
            }
        });
    }

    const peliculaSeleccionada = localStorage.getItem('pelicula');

    if (peliculaSeleccionada !== null) {
        pelicula.selectedIndex = peliculaSeleccionada;
    }
}

function actualizarPelicula(pelicula, precio) {
    localStorage.setItem('pelicula', (pelicula));
    localStorage.setItem('precio', (precio));
}

pelicula.addEventListener('change', (e) => {
    precioCine = +e.target.value;
    actualizarPelicula(e.target.selectedIndex, e.target.value);
    actualizar();
})