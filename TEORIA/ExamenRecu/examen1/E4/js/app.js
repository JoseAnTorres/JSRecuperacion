window.onload = iniciar;
let padre = document.getElementById("store-items");

function iniciar(){
  obtenerDatos();
}

function obtenerDatos(){
  fetch("./datos.json")
  .then(function(response){
    return response.json();
  })
  .then(function(chicha){
    //console.log(chicha);
    pintarPasteles(chicha);
  })
}

function pintarPasteles(contenido){
  for(let i=0; i<contenido.pastelitos.length;i++){
    let nuevoContenido=`<div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item cakes" data-item="cakes">
    <div class="card ">
      <div class="img-container">
        <img src=${contenido.pastelitos[i].src} class="card-img-top store-img" alt="">
        <span class="store-item-icon">
          <i class="fas fa-shopping-cart"></i>
        </span>
      </div>
      <div class="card-body">
        <div class="card-text d-flex justify-content-between text-capitalize">
          <h5 id="store-item-name">${contenido.pastelitos[i].nombre}</h5>
          <h5 class="store-item-value">${contenido.pastelitos[i].precio} $<strong id="store-item-price" class="font-weight-bold">5</strong></h5>

        </div>
      </div>
    </div>
  </div>`;
    //Como añadimos html al final de todo lo que tiene el contenedor padre
    //let temp = padre.innerHTML;
    padre.innerHTML+=nuevoContenido;
  }
}