//Ejercicio 1:
//Generar una función que calcule el promedio de 2 notas de parciales por ejemplo la materia Historia

function calcularpromedio(nota1, nota2){
const promedio = (nota1 + nota2) /2;
return promedio
}

const notaprimerparcial = 8;
const notasegundoparcial = 5.5

 console.log(notaprimerparcial, notasegundoparcial)
 

  const  promediofinal= calcularpromedio(notaprimerparcial, notasegundoparcial)
  console.log(promediofinal)

  console.log(`La nota del primer parcial es: ${notaprimerparcial} 
    La nota del segundo parcial es: ${notasegundoparcial}
    El promedi final es ${promediofinal}`)