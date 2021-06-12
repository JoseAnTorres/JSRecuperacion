const dinero1 = document.getElementById('currency-one');
const cantidad1 = document.getElementById('amount-one');
const dinero2 = document.getElementById('currency-two');
const cantidad2 = document.getElementById('amount-two');
const tarifa = document.getElementById('rate');
const cambio = document.getElementById('swap');

function cargarBtns() {
    dinero1.addEventListener('change', intercambiar);
    cantidad1.addEventListener('input', intercambiar);
    dinero2.addEventListener('change', intercambiar);
    cantidad2.addEventListener('input', intercambiar);
}

function accionBtn() {
    cambio.addEventListener('click', () => {
        valor = dinero1.value;
        dinero1.value = dinero2.value;
        dinero2.value = valor;
        intercambiar();
    });
}

function intercambiar() {
    dineroCambiado1 = dinero1.value;
    dineroCambiado2 = dinero2.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${dineroCambiado1}`)
        .then(res => res.json()).then(data => {
            tarifas = data.rates[dineroCambiado2];
            tarifa.innerText = `${dineroCambiado1} = ${rate} ${dineroCambiado2}`;
            cantidad2.value = (cantidad1.value * tarifas).toFixed(2);
        });
}

cargarBtns();
intercambiar();
accionBtn();