function buscar(){
    let texto = document.getElementById("search-item").value;
    console.log(texto);

    let padre = document.getElementById("store-items");
    if(padre.children.length>0){
        for(let i =0; i<padre.children.length;i++){
            //let nombre = padre.children[i].firstElementChild.lastElementChild.firstElementChild.firstElementChild.textContent;
            let nodoPastel = padre.children[i];
            let nombre = nodoPastel.getElementsByTagName("h5")[0].textContent;
            //console.log(nombre);
            if(nombre.includes(texto))
            nodoPastel.style.display="block";
            else
            nodoPastel.style.display="none";
        }
    }
}

window.onload = iniciar;

function iniciar() {
    document.getElementById("search-icon").addEventListener("click",buscar);
}