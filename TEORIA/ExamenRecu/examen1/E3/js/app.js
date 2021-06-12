/*window.onload = function(){
    document.getElementById('closeconsentimientoCookies').onclick = function(){
        this.parentNode.parentNode
        .removeChild(this.parentNode);
        return false;
    };
    try {
        if(localStorage.getItem("cookie-enable")!="1"){
            document.getElementById("consentimientoCookies").style.display="block";
        }
        document.getElementsByClassName("consentimientoCookiesOK")[0].addEventListener( "click", function() {
            localStorage.setItem("cookie-enable", "1");
            document.getElementById("consentimientoCookies").style.display="none";
        } );
    } catch( e ) {
        return false;
    }
};*/

function ocultarCookie() {
    var x = document.getElementById("consentimientoCookies");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function aceptarCond() {
    ocultarCookie();
    localStorage.setItem("aceptado", true);
}

window.onload = iniciar;

function iniciar() {
    document.getElementsByClassName("consentimientoCookiesOK")[0].addEventListener("click", aceptarCond);
    document.getElementById("closeconsentimientoCookies").addEventListener("click", ocultarCookie);
    let cookies = localStorage.getItem("aceptado");
    if (cookies == "true") {
        ocultarCookie();
    }
}