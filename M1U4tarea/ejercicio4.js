//Ejercicio 4 (un poquito más difícil) 

//Recorrer un array de numeros y devuelva el mayor.

const numeros =[10, 56, 39, 27, 63, 33,6,42];
let mayor = 0;
for(let i = 0; i <numeros.length; i++){

    if (numeros[i] > mayor){
        mayor = numeros[i]
    } 
}
console.log(`El mayor de estos numeros ${numeros} es ${mayor}`)