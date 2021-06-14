

function obtenerDatos(url, nodoImagen){
    fetch(url)
    .then(response => response.json())
    .then(datos => {nodoImagen.src = datos.message})
}

function obtenerDatosGato(url, nodoImagen){
    fetch(url)
    .then(response => response.json())
    .then(datos => {nodoImagen.src = datos[0].url})
}

function obtenerDatosRick(url, nodoImagen){
    fetch(url)
    .then(response => response.json())
    .then(datos => {nodoImagen.src = results[0].images})
}

//callback
function obtenerDatosGen(url, callback){
    fetch(url)
    .then(response => response.json())
    .then(datos => {callback(datos);})
}