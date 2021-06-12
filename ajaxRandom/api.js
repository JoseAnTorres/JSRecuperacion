
//Libreria Llamadas API : En este archivo vamos a tener todos los métodos que van hacer llamadas
//a una determinada API


 function llamadaGetAPI (url , callback) 
 {
     const client = new XMLHttpRequest();    

     client.addEventListener("readystatechange", () => {
         if (client.readyState === 4 && client.status === 200){
             callback(client.response);
         }
         else if(client.readyState === 4 && client.status != 200)
             callback(null);
         
     });

     client.overrideMimeType("application/json");  
     client.responseType = "json";
     client.open("GET", url);
     client.send();  //Envia la llamada
 }

 function llamadaPostAPI (url , callback) 
 {
     const client = new XMLHttpRequest();  

     client.addEventListener("readystatechange", () => {
         if (client.readyState === 4 && client.status === 200){
             callback(client.response);
         }
     });

     client.overrideMimeType("application/json");  
     client.responseType = 'json';
     client.open("POST", url);
     client.send();
 }