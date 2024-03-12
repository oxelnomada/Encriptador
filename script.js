const campoTexto = document.querySelector("#textoEncriptado");
const campoMensaje = document.querySelector("#campoMensaje");

console.log(campoMensaje,campoTexto);

const matrizCode = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
];

function botonEncriptar(){
    const texto = encriptar(campoTexto.value); 
    campoMensaje.value = texto;
}

function encriptar(fraseEncriptada){
    for(let i = 0; i < matrizCode.length; i++){
        if(fraseEncriptada.includes(matrizCode[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matrizCode[i][0],
                matrizCode[i][1]
            )
        }    
    }
    return fraseEncriptada;
}

function botonDesencriptar(){
    const texto = desencriptar(campoTexto.value); 
    campoMensaje.value = texto;
}

function desencriptar(fraseEncriptada){
    for(let i = 0; i < matrizCode.length; i++){
        if(fraseEncriptada.includes(matrizCode[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matrizCode[i][1],
                matrizCode[i][0]
            )
        }    
    }
    return fraseEncriptada;
}

