console.log("Primera pre-entrega");
/*function saludar (){
    alert("¡Hola! Benvenido al PERFUMITO LOCO, donde vas a encontrar las reseñas de las mejores fragancias del mercado, y la que te guste, vas a poder comprarla aquí mismo ¡Al mejor precio!");
}
saludar();

let nombreUsuario = prompt("¿Cómo te gustaría que te llamemos?")
while((nombreUsuario === "") || (nombreUsuario === null)){
    alert("Por favor, decinos tu nombre!");
    nombreUsuario = prompt("¿Cómo te gustaría que te llamemos?")
}
if(nombreUsuario != ""){
    alert("¡Bienvenido! " + nombreUsuario + ", gracias por venir!");
}*/   
    

let tipoFragancias = prompt("¿Que tipo de fragancia te interesa? \n 1-Masculinas \n 2-Femeninas \n 3-Unisex");

while((tipoFragancias >"4") || (tipoFragancias === null) || (tipoFragancias === "") || (tipoFragancias === "0")){
    alert("Por favor, ingresá una opción válida")
    tipoFragancias = prompt("¿Que tipo de fragancia te interesa? \n 1-Masculinas \n 2-Femeninas \n 3-Unisex");
}
let masculinas = (1);
let femeninas = (1);
let unisex =(1);

if(tipoFragancias === "1"){
    masculinas = prompt("Elegí una opcion de las Fragancias Masculinas \n 1-Gentleman de Givenchy \n 2-L Homme Ideal Sport de Guerlain \n 3-Habit Rouge Rouge Privé")
}else if(tipoFragancias === "2"){
    femeninas = prompt("Elegí una opcion de las Fragancias Femeninas \n 1-Drakkar Intense EDP \n 2-Ámbar Negro EDP \n 3-L'Eau d'Issey pour Homme")
}else if(tipoFragancias === "3"){
    unisex = prompt("Lo sentimos, en este momento no contamos con fragancias unisex.  Por favor, elije otra opción: \n 1-Masculinas \n 2-Femeninas")
}

if(unisex === "1"){
    masculinas = prompt("Elegí una opcion de las Fragancias Masculinas \n 1-Gentleman de Givenchy \n 2-L Homme Ideal Sport de Guerlain \n 3-Habit Rouge Rouge Privé")
}else if(unisex === "2"){
    femeninas = prompt("Elegí una opcion de las Fragancias Femeninas \n 1-Drakkar Intense EDP \n 2-Ámbar Negro EDP \n 3-L'Eau d'Issey pour Homme")
}

if(masculinas === "1"){
    alert("Notas de Salida: \n Pera, cardamomo y piña \n Notas de Corazón: \n Iris, lavanda y geranio \n Notas de Fondo: \n Cuero, vaina de vainilla negra y pachulí")
}else if(masculinas === "2"){
    alert("Notas de Salida: \n Acuosas, almendra y especias \n Notas de Corazón: \n Neroli \n Notas de Fondo: \n Cumarina, vetiver y pachulí")
}else if(masculinas === "3"){
    alert("Notas de Salida: \n Bergamota y jengibre \n Notas de Corazón: \n Flor de azahar del naranjo e iris \n Notas de Fondo: \n Cuero, vainilla y pachulí")
}

if(femeninas === "1"){
    alert("Notas de Salida: \n Pera, cardamomo y piña \n Notas de Corazón: \n Iris, lavanda y geranio \n Notas de Fondo: \n Cuero, vaina de vainilla negra y pachulí")
}else if(femeninas === "2"){
    alert("Notas de Salida: \n Acuosas, almendra y especias \n Notas de Corazón: \n Neroli \n Notas de Fondo: \n Cumarina, vetiver y pachulí")
}else if(femeninas === "3"){
    alert("Notas de Salida: \n Bergamota y jengibre \n Notas de Corazón: \n Flor de azahar del naranjo e iris \n Notas de Fondo: \n Cuero, vainilla y pachulí")
}




