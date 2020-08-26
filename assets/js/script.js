var divDatoNombre = document.getElementById("nombre")
console.log(divDatoNombre)
var divDatoEdad = document.getElementById("edad")
console.log(divDatoEdad)
var divDatoCiudad = document.getElementById("ciudad")
console.log(divDatoCiudad)
var divDatoGenero = document.getElementById("genero")
console.log(divDatoGenero)

function Cargardatos() {
    var nombre = prompt('Escriba el nombre del artista')
    divDatoNombre.innerText = nombre
    var edad = prompt('Escriba la edad del artista')
    divDatoEdad.innerText = edad
    var ciudad = prompt('Escriba la ciudad de origen del artista')
    divDatoCiudad.innerText = ciudad
    var genero = prompt('Escriba el genero musical del artista')
    divDatoGenero.innerText = genero


}