window.onload = iniciar;

function iniciar() {
    let categorias = document.getElementsByClassName("container")[1].firstElementChild.nextElementSibling;
    categorias.addEventListener("click", filtrar);
}

function filtrar() {
    let tienda = document.getElementById("store-items");
    if (event.target.classList.contains("filter-btn")) {
        let seleccion = event.target.dataset.filter;
        for (let i = 0; i < tienda.children.length; i++) {
            let pastel = tienda.children[i];
            let nombre = pastel.dataset.item;
            if (seleccion == nombre) {
                pastel.style.display = "block";
            }else if(seleccion=="all"){
                pastel.style.display = "block";
            }else {
                pastel.style.display = "none";
            }
        }
    }
}