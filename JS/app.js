console.log("Primera pre-entrega");
function saludar (){
    alert("¡Hola! Benvenido al PERFUMITO LOCO, donde vas a encontrar las reseñas de las mejores fragancias del mercado, y la que te guste, vas a poder comprarla aquí mismo ¡Al mejor precio!");
}
saludar();

let nombreUsuario = prompt("¿Cómo te gustaría que te llamemos?")
while((nombreUsuario === "") || (nombreUsuario === null)){
    alert("Por favor, decinos tu nombre!");
    nombreUsuario = prompt("¿Cómo te gustaría que te llamemos?")
    if(nombreUsuario != ""){
        alert("¡Bienvenido! " + nombreUsuario + ", gracias por venir!");
    }
    
}


let tipoFragancias = prompt("¿Que tipo de fragancia te interesa? \n 1-Masculinas \n 2-Femeninas \n 3-Unisex");
let masculinas = (1);
let femeninas = (1);
let unisex = (1);
const iva = x => x * 0.21
const suma = (a,b) => a + b;
let Gentleman = 15000
let Homme = 80000
let Habit = 130000
let Drakkar = 20000
let Ambar = 100000
let Eau = 150000

while((tipoFragancias < "1" || tipoFragancias > "3") || (tipoFragancias === null) || (tipoFragancias === "")){
    alert("Por favor, ingresá una opción válida")
    tipoFragancias = prompt("¿Que tipo de fragancia te interesa? \n 1-Masculinas \n 2-Femeninas \n 3-Unisex");
}

if(tipoFragancias === "1"){
    masculinas = prompt("Elegí una opcion de las Fragancias Masculinas \n 1-Gentleman de Givenchy \n 2-L Homme Ideal Sport de Guerlain \n 3-Habit Rouge Rouge Privé")
}else if(tipoFragancias === "2"){
    femeninas = prompt("Elegí una opcion de las Fragancias Femeninas \n 1-Drakkar Intense EDP \n 2-Ámbar Negro EDP \n 3-L'Eau d'Issey pour Homme")
}else if(tipoFragancias === "3"){
    unisex = prompt("Lo sentimos, en este momento no contamos con fragancias unisex.  Por favor, elije otra opción: \n 1-Masculinas \n 2-Femeninas")
}


while((unisex < "1" || unisex > "2") || (unisex === null) || (unisex === "")){
    alert("Por favor, ingresá una opción válida")
    unisex = prompt("Lo sentimos, en este momento no contamos con fragancias unisex.  Por favor, elije otra opción: \n 1-Masculinas \n 2-Femeninas")
}
    if(unisex === "1"){
        masculinas = prompt("Elegí una opcion de las Fragancias Masculinas \n 1-Gentleman de Givenchy \n 2-L Homme Ideal Sport de Guerlain \n 3-Habit Rouge Rouge Privé")
    }else if(unisex === "2"){
        femeninas = prompt("Elegí una opcion de las Fragancias Femeninas \n 1-Drakkar Intense EDP \n 2-Ámbar Negro EDP \n 3-L'Eau d'Issey pour Homme")
    }

    while((masculinas < "1" || masculinas > "3") || (masculinas === null) || (masculinas === "")){
        alert("Por favor, ingresá una opción válida")
    masculinas = prompt("Elegí una opcion de las Fragancias Masculinas \n 1-Gentleman de Givenchy \n 2-L Homme Ideal Sport de Guerlain \n 3-Habit Rouge Rouge Privé")
}
    if(masculinas === "1"){
        alert("Notas de Salida: \n Pera, cardamomo y piña \n Notas de Corazón: \n Iris, lavanda y geranio \n Notas de Fondo: \n Cuero, vaina de vainilla negra y pachulí")
    }else if(masculinas === "2"){
        alert("Notas de Salida: \n Acuosas, almendra y especias \n Notas de Corazón: \n Neroli \n Notas de Fondo: \n Cumarina, vetiver y pachulí")
    }else if(masculinas === "3"){
        alert("Notas de Salida: \n Bergamota y jengibre \n Notas de Corazón: \n Flor de azahar del naranjo e iris \n Notas de Fondo: \n Cuero, vainilla y pachulí")
    }
    


    while((femeninas < "1" || femeninas > "3") || (femeninas === null) || (femeninas === "")){
        alert("Por favor, ingresá una opción válida")
    femeninas = prompt("Elegí una opcion de las Fragancias Femeninas \n 1-Drakkar Intense EDP \n 2-Ámbar Negro EDP \n 3-L'Eau d'Issey pour Homme")
}
    if(femeninas === "1"){
        alert("Notas de Salida: \n Pera, cardamomo y piña \n Notas de Corazón: \n Iris, lavanda y geranio \n Notas de Fondo: \n Cuero, vaina de vainilla negra y pachulí")
    }else if(femeninas === "2"){
        alert("Notas de Salida: \n Acuosas, almendra y especias \n Notas de Corazón: \n Neroli \n Notas de Fondo: \n Cumarina, vetiver y pachulí")
    }else if(femeninas === "3"){
        alert("Notas de Salida: \n Bergamota y jengibre \n Notas de Corazón: \n Flor de azahar del naranjo e iris \n Notas de Fondo: \n Cuero, vainilla y pachulí")
    }
    

let fraganciaelegida = prompt("Elegí la fragancia que mas te guste: \n 1-Masculina: Gentleman de Givenchy. \n 2-Masculina: L Homme Ideal Sport de Guerlain. \n 3-Masculina: Habit Rouge Rouge Privé. \n 4-Femenina: Drakkar Intense EDP. \n 5-Femenina: Ámbar Negro EDP. \n 6-Femenina: L'Eau d'Issey pour Homme. \n 7-Cancelar compra.");


while (fraganciaelegida !== "8"){
    if(fraganciaelegida === "1"){
        let precioFinal = suma(Gentleman, iva(Gentleman))
        alert("El precio final es de $" + precioFinal + " ¡Muchas gracias por tu compra! Chequeá tu mail donde te enviamos el link de pago.  ¡¡GRACIAS!!");
    }else if(fraganciaelegida === "2"){
        let precioFinal = suma(Homme, iva(Homme))
        alert("El precio final es de $" + precioFinal + " ¡Muchas gracias por tu compra! Chequeá tu mail donde te enviamos el link de pago.  ¡¡GRACIAS!!");
    }else if(fraganciaelegida === "3"){
        let precioFinal = suma(Habit, iva(Habit))
        alert("El precio final es de $" + precioFinal + " ¡Muchas gracias por tu compra! Chequeá tu mail donde te enviamos el link de pago.  ¡¡GRACIAS!!");
    }else if(fraganciaelegida === "4"){
        let precioFinal = suma(Drakkar, iva(Drakkar))
        alert("El precio final es de $" + precioFinal + " ¡Muchas gracias por tu compra! Chequeá tu mail donde te enviamos el link de pago.  ¡¡GRACIAS!!");
    }else if(fraganciaelegida === "5"){
        let precioFinal = suma(Ambar, iva(Ambar))
        alert("El precio final es de $" + precioFinal + " ¡Muchas gracias por tu compra! Chequeá tu mail donde te enviamos el link de pago.  ¡¡GRACIAS!!");
    }else if(fraganciaelegida === "6"){
        let precioFinal = suma(Eau, iva(Eau))
        alert("El precio final es de $" + precioFinal + " ¡Muchas gracias por tu compra! Chequeá tu mail donde te enviamos el link de pago.  ¡¡GRACIAS!!");
    }else if(fraganciaelegida === "7"){
        alert("¡Muchas gracias por tu compra!");
    }else{
        alert("Opción no válida. Por favor, elige un número del 1 al 7.");
    }
    fraganciaelegida = "8";
}