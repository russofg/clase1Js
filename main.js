function correr(){
    let apellido = prompt("Por Favor Ingrese su Apellido");
    let nombre = prompt ("Ahora Ingrese su Nombre");
    let edad = prompt ("Cual es tu edad?");
    let año_actual = prompt ("Año Actual");
    let jubilacion = prompt ("Cual es la Edad de Jubilacion en tu Pais Ej 65 Años en Argentina");

    let calculo = +jubilacion - +edad;
    let jubilo = +año_actual + calculo;

    alert ("Hola " + nombre + " " + apellido)
    alert (" Te vas a jubilar en el Año " + jubilo)
}