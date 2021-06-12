window.onload = iniciar;
let anadirFondos = document.getElementById("anadir");
let borrarFondos = document.getElementsByClassName("eliminar-btn");

let lista = document.getElementById("lista");
let ul = document.querySelector("ul");

let texto = document.getElementById("texto");
let cantidad = document.getElementById("cantidad");

let dineroNeg = document.getElementById("dinero-negativo");
let dineroPos = document.getElementById("dinero-positivo");

let balance = document.getElementById("balance");

function iniciar() {
    anadirFondos.addEventListener("click", anadirPresupuesto);
    ul.addEventListener("click", function (event) {
        let targetElemento = event.target;
        let fondoObtenido = parseFloat(targetElemento.parentNode.firstChild.nextElementSibling.textContent);
        let dineroNegObtenido = parseFloat(dineroNeg.textContent);
        let dineroPosObtenido = parseFloat(dineroPos.textContent);
        let balanceObtenido = parseFloat(balance.textContent);

        if (targetElemento.nodeName === 'BUTTON') {
            targetElemento.parentNode.remove(targetElemento);
            if (fondoObtenido > 0) {
                let resultado = dineroPosObtenido - fondoObtenido;
                dineroPos.textContent = agregarCeros(resultado) + "€";

                let resultadoBalance = balanceObtenido - dineroPosObtenido;
                balance.textContent = agregarCeros(resultadoBalance) + "€";
            } else {
                let resultado = dineroNegObtenido - fondoObtenido;
                dineroNeg.textContent = agregarCeros(resultado) + "€";

                let resultadoBalance = balanceObtenido - dineroNegObtenido;
                balance.textContent = agregarCeros(resultadoBalance) + "€";
            }
            //cargar()
        }
    });
    if (balance.textContent == null) {
        balance.textContent == "360.00€";
    } else if (localStorage.getItem("balance")) {
        balance.textContent = localStorage.getItem("balance");
    }

    if (dineroPos.textContent == null) {
        dineroPos.textContent == "+400.00€";
    } else if (localStorage.getItem("dineroPos")) {
        dineroPos.textContent = localStorage.getItem("dineroPos");
    }

    if (dineroPos.textContent == null) {
        dineroPos.textContent == "-40.00€";
    } else if (localStorage.getItem("dineroNeg")) {
        dineroNeg.textContent = localStorage.getItem("dineroNeg");
    }
    //cargar();
}

function anadirPresupuesto() {
    let dineroNegObtenido = parseFloat(dineroNeg.textContent);
    let dineroPosObtenido = parseFloat(dineroPos.textContent.substring(1));
    let textoObtenido = texto.value;
    let cantidadObtenida = parseFloat(cantidad.value);
    let balanceObtenido = parseFloat(balance.textContent);

    if (textoObtenido && cantidadObtenida) {
        if (cantidadObtenida > 0) {
            let resultado = cantidadObtenida + dineroPosObtenido;
            dineroPos.textContent = "+" + agregarCeros(resultado) + "€";
            localStorage.setItem("dineroPos", dineroPos.textContent);

            let anadido = `<li class="positivo">${textoObtenido} <span>+${cantidadObtenida}€</span><button class="eliminar-btn">X</button> </li>`;
            lista.innerHTML += anadido;
            //guardar();
            //cargar()

            let resultadoBalance = balanceObtenido + cantidadObtenida;
            balance.textContent = agregarCeros(resultadoBalance) + "€";
            localStorage.setItem("balance", balance.textContent);

        } else if (cantidadObtenida < 0) {
            resultado = cantidadObtenida + dineroNegObtenido;
            dineroNeg.textContent = agregarCeros(resultado) + "€";
            localStorage.setItem("dineroNeg", dineroNeg.textContent);

            let anadido = `<li class="negativo">${textoObtenido} <span>${cantidadObtenida}€</span><button class="eliminar-btn">X</button> </li>`;
            lista.innerHTML += anadido;
            //guardar();
            //cargar()

            let resultadoBalance = balanceObtenido + cantidadObtenida;
            balance.textContent = agregarCeros(resultadoBalance) + "€";
            localStorage.setItem("balance", balance.textContent);
        }
    }
}

function agregarCeros(valor) {
    var valorFormat = valor * 1;
    valorFormat = valorFormat + '';

    pos = valorFormat.indexOf('.');
    if (pos == -1)
        valorFormat = valorFormat + '.00';
    else {
        var entero = valorFormat.substring(0, pos);
        var decimales = valorFormat.substring(pos + 1);
        while (decimales.length < 2) decimales = decimales + '0';
        valorFormat = entero + '.' + decimales;
    }
    return valorFormat;
}

/*
function guardar() {
    var toStorage = [];
    var values = document.querySelectorAll('li');
    for (var i = 0; i < values.length; i++) {
      toStorage.push(values[i].textContent);
    }

    console.log(toStorage);
    localStorage.setItem('items', JSON.stringify(toStorage));
    console.log(localStorage);

  }

  function cargar() {
    const storedvalue = JSON.parse(localStorage.getItem('items'));
    storedvalue.forEach(element => {
        let anadido = `<li class="positivo">${element} <span>${element}€</span><button class="eliminar-btn">X</button> </li>`;
        lista.innerHTML += anadido;
    });
  }
  */


  //No me funciona el guardado y cargado de li al dar f5