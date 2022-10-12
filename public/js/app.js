console.log("Hola desde el Frontend");
var chars_x; //Declaración de variable
chars_x = "abcdefghijklmnñopqrstuvwyxz";


document.addEventListener("click", (e) => {
    if(e.target.dataset.short){
    
    const msg = document.getElementById("msg");

    //Claves:
    let a = prompt("Ingrese la clave 1: ")
    let b = prompt("Ingrese la clave 2: ")
    clave1 = clave(a);
    clave2 = clave(b);

    console.log(e.target);

    console.log("=============================================");

    console.log("Normal:", chars_x);
    console.log("        ⭥⭥⭥⭥⭥⭥⭥⭥⭥⭥⭥⭥⭥⭥⭥⭥⭥⭥⭥⭥⭥⭥⭥⭥⭥⭥⭥");
    console.log("Clave1:", clave1);
    console.log("Clave2:", clave2);

    console.log("=============================================");

    console.log("=============================================");
    const string = secuencia(msg.textContent)
    console.log("Secuencia:", string);

    console.log("=============================================");

    console.log("Normal:", msg.textContent.replace(' ', 'x').toUpperCase());
    console.log("Cifrado:", encripta(msg.textContent, string, clave1, clave2));

    msg.textContent = encripta(msg.textContent, string, clave1, clave2);
    const label = document.getElementById("label");

    label.textContent = "Mensaje Cifrado"

    }

});


const clave = function(a){ //Primera Clave
    var chars_x; //Declaración de variable
    chars_x = "abcdefghijklmnñopqrstuvwyxz"; //Asignación de variable

    let iz = chars_x.slice(0,a)
    let de = chars_x.slice(a)
    let clave = de + iz
    return clave;
}

const encripta = function(msg, secuencia2, clave, clave2){
    //Abecedario
       var msg_cifrado = "";
       var chars_x; //Declaración de variable
       chars_x = "abcdefghijklmnñopqrstuvwyxz";
   
       for(let i=0; i<msg.length ; i++){
           if(secuencia2[i] == 1){ //Si el numero de la secuencia es 1, haga esto
               for(let n=0 ; n<chars_x.length; n++){
                   if(msg[i] == chars_x[n]){
                   msg_cifrado+=clave[n]
                   }
               }
           }
           else{ //Si el numero de la secuencia es diferente, haga esto
               for(let n=0 ; n<chars_x.length; n++){
                   if(msg[i] == chars_x[n]){
                   msg_cifrado+=clave2[n]
                   }
               }
           }
       }
       return msg_cifrado;
};

const secuencia = function(msg){ //Secuencia
    var secuencia2 = "";
    for(let k=0; k<msg.length; k++){
        let secuencia1 = prompt("Ingrese la clave: ");
        if(secuencia1 == 1){
            secuencia2+=secuencia1;
        } else if (secuencia1 == 2){
            secuencia2+=secuencia1;
        } else{
            console.log("Clave invalida!!\n")
            k--
        }
    }
    return secuencia2;
}