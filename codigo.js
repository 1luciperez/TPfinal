function ingresar(){

var usuario = document.getElementById("usuario").value;
var clave = document.getElementById("clave").value;

if(usuario != "" && clave != ""){
    document.getElementById("login").style.display="none";
    document.getElementById("turno").style.display="block";
}
else{
    alert("Complete usuario y clave");
}

}


function reservar(){

var nombre = document.getElementById("nombre").value;
var servicio = document.getElementById("servicio").value;
var fecha = document.getElementById("fecha").value;
var hora = document.getElementById("hora").value;

if(nombre == "" || fecha == "" || hora == ""){
    alert("Complete todos los datos");
}
else{

document.getElementById("turno").style.display="none";
document.getElementById("confirmacion").style.display="block";

document.getElementById("mensaje").innerHTML =
"Turno para " + nombre +
"<br>Servicio: " + servicio +
"<br>Fecha: " + fecha +
"<br>Hora: " + hora;

}

}


function volver(){

document.getElementById("confirmacion").style.display="none";
document.getElementById("login").style.display="block";

}