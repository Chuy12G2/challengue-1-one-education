function encriptar(frase){
    frase = frase.toLowerCase();
    let i = 0;
    let caracter = "";
    let fraseEncriptada = "";
    while (i < frase.length){

        if (frase[i] == "a"){
            caracter = "ai";

        }
        else if (frase[i] == "e"){
            caracter = "enter";

        }
        else if (frase[i] == "i"){
            caracter = "imes";

        }
        else if (frase[i] == "o"){
            caracter = "ober";

        }
        else if (frase[i] == "u"){
            caracter = "ufat";

        }

        else{
            caracter = frase[i];
        }

        fraseEncriptada = fraseEncriptada + caracter;
        i++;

    }
        console.log(fraseEncriptada);
        return fraseEncriptada;

}


function desencriptar(frase){
    frase = frase.toLowerCase();
    let i = 0;
    let caracter2 = "";
    let fraseDesencriptada = "";
    while (i < frase.length){

        if (frase[i] == "a"){
            caracter2 = "a";
            i += 2;

        }

        else if (frase[i] == "e"){
            caracter2 = "e";
            i += 5;
        }

        else if (frase[i] == "i"){
            caracter2 = "i";
            i += 4;
        }


        else if (frase[i] == "o"){
            caracter2 = "o";
            i += 4;
        }


        else if (frase[i] == "u"){
            caracter2 = "u";
            i += 4;
        }

        else{
            caracter2 = frase[i];
            i++;
        }

        fraseDesencriptada = fraseDesencriptada + caracter2;
}

    console.log(fraseDesencriptada);
    return fraseDesencriptada;

}

function ocultarImagen(){
    let contenedorResultado = document.querySelector(".div-buscar");
    contenedorResultado.classList.add("oculto");
    let resultadoTexto = document.querySelector(".div-resultado");
    resultadoTexto.classList.remove("oculto");
}

let botonCopiar = document.querySelector(".btn-copiar")
let botonDesencriptar = document.querySelector("#boton-desencriptar")
let botonEncriptar = document.querySelector("#boton-encriptar");
let textoResultado = document.querySelector(".resultado-texto");
let textoInput = document.querySelector(".texto-input");

function botonEncriptarfunction(){
    if (textoInput.value == ""){
        alert("No se encontró ningún mensaje");
        return;
    };
    let textoEncriptado = encriptar(textoInput.value);
    textoResultado.value = textoEncriptado;
    ocultarImagen();

}

function botonDesencriptarfunction(){
    if (textoInput.value == ""){
        alert("No se encontró ningún mensaje");
        return;
    };
    let textoDesencriptado = desencriptar(textoInput.value);
    textoResultado.value = textoDesencriptado;
    ocultarImagen();
}

function copiarAlPortapapeles(){

    textoResultado.select();
    document.execCommand('copy');

    alert("Texto Copiado!");
}

botonCopiar.onclick = copiarAlPortapapeles;

botonEncriptar.onclick = botonEncriptarfunction;
botonDesencriptar.onclick = botonDesencriptarfunction;
