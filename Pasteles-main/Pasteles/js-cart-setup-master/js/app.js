const cartInfo = document.getElementById('cart-info');
const cart = document.getElementById('cart');

cartInfo.addEventListener('click', function () {
    cart.classList.toggle('show-cart');
});
const cartBtn = document.querySelectorAll('.store-item-icon');
cartBtn.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        if (event.target.parentElement.classList.contains('store-item-icon')) {
            let src = event.target.parentElement.previousElementSibling.getAttribute('src');
            src=src.replace("img/","img-cart/");

            let tarjetaCompleta =event.target.parentElement.parentElement.parentElement;
            let h5= tarjetaCompleta.querySelectorAll("H5");

            let nombrePastel = h5[0].textContent;
            let precio = h5[1].textContent;
            precio=precio.slice(2);

            let item={};
            item.img= src;
            item.name=nombrePastel;
            item.price=precio;

            const nuevoItem = document.createElement('div');
            nuevoItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'text-capitalize', 'my-3');
            nuevoItem.innerHTML =
                "<img src='" + item.img + "' class='img-fluid rounded-circle' id='item-img' alt=''>" +
                "<div class='item-text'>" +
                "<p id='cart-item-title' class='font-weight-bold mb-0'>" + item.name + "</p>" +
                "<span>$</span>" +
                "<span id='cart-item-price' class='cart-item-price' class='mb-0'> " + item.price + "</span>" +
                "</div>" +
                "<a href='#' id='cart-item-remove' class='cart-item-remove'>" +
                "<i class='fas fa-trash'></i>" +
                "</a>" +
                "</div>";

            const cart = document.getElementById('cart');
            const total = document.querySelector('.cart-total-container');
            cart.insertBefore(nuevoItem, total);
            actualizarPrecioTotal();
            borrarPastel();
            borrarCartera();
        }
    });
});

function actualizarPrecioTotal() {
    const total = [];
    const pasteles = document.querySelectorAll('.cart-item-price');

    pasteles.forEach(function (item) {
        total.push(parseFloat(item.textContent));
    })

    const precioTotal = total.reduce(function (total, item) {
        total += item;
        return total;
    }, 0);
    const resultado = precioTotal.toFixed(2);

    document.getElementById('cart-total').textContent = resultado;
    document.querySelector('.item-total').textContent = resultado;
    document.getElementById('item-count').textContent = total.length;
}

function borrarPastel() {
    const borrarBtn = document.querySelectorAll('.fa-trash');
    borrarBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const item = e.target.parentElement.parentElement;
            item.remove();
            actualizarPrecioTotal();
        })
    })
};

function borrarCartera() {
    const clearBtn = document.querySelector('.btn-outline-secondary');
    clearBtn.addEventListener('click', (e) => {
        const borrarBtn = document.querySelectorAll('.cart-item');
        borrarBtn.forEach((btn) => {
            btn.remove();
            actualizarPrecioTotal();
        });
    });
};