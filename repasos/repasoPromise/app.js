function httpGet(url) {
    return new Promise((resolve, reject) => {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url, false);
        xmlHttp.send(null);
        let respuesta = xmlHttp.responseText;
        if (respuesta != undefined)
            resolve(respuesta, "1", "2", "3");
        else
            reject("Error fatalisimo");    
    });
    // var xmlHttp=new XMLHttpRequest();
    // xmlHttp.open("GET", url, false);
    // xmlHttp.send(null);
    // let respuesta = xmlHttp.responseText;
    //return xmlHttp.responseText;
}

function random() {
    var promesa = httpGet('https://randomuser.me/api/');
    promesa.then((res)=>{
        JSON.parse(res);
        var url=array.message;
        var img=document.getElementById('dogImage');
    });
    promesa.catch((error)=>{console.log("error")});
}