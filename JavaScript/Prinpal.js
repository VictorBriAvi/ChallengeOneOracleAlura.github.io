var MensajeTexto = document.querySelector("#textoMensaje");
var ResultadoMensaje = document.querySelector("#textoResultado");
var BotonDesencriptado = document.querySelector("#buttonDesencriptado");
var BotonEncriptado = document.querySelector("#buttonEncriptado");
var BotonCopiar = document.querySelector("#buttonCopiar");
var BotonLimpiarTexto = document.querySelector("#buttonLimpiar");





BotonLimpiarTexto.addEventListener("click",function(event){

    event.preventDefault();

    limpiar();
})

BotonEncriptado.addEventListener("click",function(event){
    
    
    event.preventDefault();

    ResultadoMensaje.value = encriptar();

});

BotonDesencriptado.addEventListener("click",function(event){
    event.preventDefault();

    ResultadoMensaje.value = desencriptar();
})

BotonCopiar.addEventListener("click",function(event){

    event.preventDefault();

    MensajeTexto.value = copiar();
})

/*
function encriptar() {

    var mensajeEncriptado = MensajeTexto.value;
    var mensaje = mensajeEncriptado
    .replaceAll("e", "enter")
    .replaceAll("i","imes")
    .replaceAll("a", "ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat")

    return ResultadoMensaje.value = mensaje;

}*/

function limpiar() {
    MensajeTexto.value = "";
    ResultadoMensaje.value = "";
}

function encriptar() {

    var validacion = validarTexto();

    if (!validacion) {

        var mensajeEncriptado = MensajeTexto.value;
        var mensajeMinuscula = mensajeEncriptado.toLowerCase();
        var mensaje = mensajeMinuscula
        .replaceAll("e", "enter")
        .replaceAll("i","imes")
        .replaceAll("a", "ai")
        .replaceAll("o","ober")
        .replaceAll("u","ufat")
        return ResultadoMensaje.value = mensaje;

    } else {
        
        return ResultadoMensaje.value = "No se debe ingresar caracteres ni palabras con acentos";
    }

}


function desencriptar(){
    
    var validacion = validarTexto();

    if (!validacion) {

        var mensajeDesencriptado = MensajeTexto.value;
        var mensajeMinuscula = mensajeDesencriptado.toLowerCase();
        var mensaje = mensajeMinuscula
        .replaceAll("enter", "e")
        .replaceAll("imes","i")
        .replaceAll("ai", "a")
        .replaceAll("ober","o")
        .replaceAll("ufat","u")

        return ResultadoMensaje.value = mensaje;
    }else {
        
        
        return ResultadoMensaje.value = "No se debe ingresar caracteres ni palabras con acentos";
    }


}

function copiar() {
    
    mensajeCopiado = ResultadoMensaje.value;
    return MensajeTexto.value = mensajeCopiado;
}


function validarTexto(){

    //var arrayProhibido = ["*","-","`","~","!","@","#","$","%","^","&","*","(",")","_","-",""];

    var regex = /[!@#$%^&*()_+-=`~;:"'.,<.>?áéíóú´c/]/

    //var regex = /[0-9a-z]/g;

    var texto = MensajeTexto.value;

    var validar = texto.match(regex);

    if (validar != null) {
        
        return true;
    }


  /*  for (let i = 0; i < arrayProhibido.length; i++) {

        for (let j = 0; j < texto.length; j++) {
            

            if (texto[j] == arrayProhibido[i]) {
            
                console.log("tengo un *")

                return true;
            } 

        }

    }*/





}
