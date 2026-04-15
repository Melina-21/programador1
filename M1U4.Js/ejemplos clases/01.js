console.log('Hola soy Melina');
//const: se usa para declarar variables cuyo valor no cambiara una vez asignado
const nombre='Melina';
const edad= 28;

console.log(nombre)
console.log (`hola yo soy ${nombre}y tengo ${edad} años`)

//let: se usa para declarar variables que pueden cambiar durarte la ejecucion del preograma
let contador =0;
contador=contador +1
console.log(contador)

let frutas = ['bananas','manzana','paltas']
console.log(frutas)
console.log(frutas[1])

let auto ={
    marca: 'palio',
    modelo: 'fiat'
}
console.log(auto)
console.log(auto.modelo)

const texto= 'no por mucho madrugar amanece mas temprano'

console.log(texto.length); //cant. de caracteres
console.log(texto.toLocaleUpperCase()); //mayuscula
