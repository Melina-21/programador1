//Ejercicio 2



//Utilizando estructura de control determinar el medio de transporte más adecuado para una persona. Dada una distancia en metros, sugiera un medio de transporte basado en las siguientes reglas:

//0 a 1000 metros = pie

//1000 a 10000 metros = bicicleta

//10000 a 30000 metros = colectivo

//30000 a 100000 metros = auto

//+100000 = avion

const metros = 38000
let transporte = '';

if (metros > 0 && metros <=1000) {
    transporte ='pie';
    console.log(`el medio recomendado es pie`)
}
 else if (metros >1000 && metros <=10000) {
    transporte = 'bicicleta';
} 
else if (metros >10000 && metros <=3000){
    transporte = 'colectivo';
}
else if (metros >30000 && metros <=100000){
    transporte = 'auto';
}
else if (metros >100000){
    transporte = 'avion';

}
console.log(`para ${metros} metros te recomiendo utilizar este medio "${transporte}"`)
