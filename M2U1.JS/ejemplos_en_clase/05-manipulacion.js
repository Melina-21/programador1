const titulo = document.querySelector('h1');

console.log(titulo)
//style
titulo.style.color = 'red'
//se puede usar tambien backgroundColor y fontSize


//classlist
titulo.classList.add('fondo')

const boton = document.getElementById('boton')

const texto = document.getElementById('texto')

boton.addEventListener('click', ()=>(
    texto.classList.toggle('invisible')
))

//METODOS DE ClassList
// Add: Agrega clase 
// Remove: elimina clase
//Toggle: alterna la presencia de una clase
//Replace: Reemplaza una classe por otra
//Length: Devuelve el  umero de clases en el elemento


const aclaracion = document.getElementById('aclaracion')
console.log(aclaracion)

aclaracion.innerHTML = "<h1> Este es un  nuevo texto</h1>"

aclaracion.innerText = "Este es un  nuevo texto"