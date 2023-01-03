function datos() {
    var nombre = document.getElementById("nombres").value;
    var apellido = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var fechanacimiento = document.getElementById("fecha-nacimiento").value;
    var f = document.getElementById("f").checked;
    var m = document.getElementById("m").checked;
    var estatura = document.getElementById("estatura").value;
    var peso = document.getElementById("q").value;
    var deporte = document.getElementById("deporte").value;

    // var conjunto = "tu nombre es " + nombre + "\n tu apellido es " + apellido + "\n tu email es " + email + "\n tu fecha de nacimiento es " + fechanacimiento + "\n tu genero es " + f + m + "\n tu estatura es " + estatura + "\n tu peso es " + peso + "\n realizas deporte a menudo" + deporte;
    // console.log(conjunto);

    var resultado = peso / (estatura ** 2);
    var sobrepeso = resultado <= 30;
    var rands = "Resultado= " + resultado + "\nsobrepeso= " + sobrepeso;
    console.log(rands)


}