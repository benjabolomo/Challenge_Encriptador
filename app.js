let texto_a = "";
let texto_b = "";
let i = 0;
const botonEncriptar = document.querySelector (".boton-encriptar");
const botonDesencriptar = document.querySelector (".boton-desencriptar");
const resultadoTitulo = document.querySelector (".result-title");
const resultText = document.querySelector (".texto-b");
const textArea = document.querySelector (".user-input");
const imagenPibito = document.querySelector(".image-result");
const botonCopiar = document.querySelector(".boton-copiar");

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function asignarTextoClase(clase, texto) {
    let elementoHTML = document.querySelector(`.${clase}`);
    if (elementoHTML) {
        elementoHTML.textContent = texto; 
    }
}

function encriptar() {
        texto_a = document.querySelector('.user-input').value.toLowerCase();
        
        texto_b = "";
    for (i = 0; i < texto_a.length; i++) {
        texto_b += llave(texto_a[i]);
    }
    
    devolver_texto();
}

function desencriptar() {
    condiciones_iniciales();  
        texto_a = document.querySelector('.user-input').value;
        llave_inversa();
    devolver_texto();

}

function llave(letra) {
    switch (letra) { 
        case "e": return "enter";   // La letra "e" es convertida para "enter"
        case "i": return "imes";    // La letra "i" es convertida para "imes"
        case "a": return "ai";      // La letra "a" es convertida para "ai"
        case "o": return "ober";    // La letra "o" es convertida para "ober"
        case "u": return "ufat";    // La letra "u" es convertida para "ufat"
        default: return letra;      // Si no es una vocal, se devuelve la letra tal cual
    }
}
function llave_inversa(){  
    texto_b = texto_a.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");}

function devolver_texto() {
    asignarTextoClase('texto_b', texto_b);  
}

function condiciones_iniciales(){
        texto_a = "";
        texto_b = "";
        i = 0;
        asignarTextoClase('texto_b',"");

}

function OcultarTextoOutput(){
    resultText.textContent = texto_b;
    resultadoTitulo.textContent = "El resultado es:";
    botonCopiar.classList.remove("hidden");
}


textArea.addEventListener("input", (e)=>{
    imagenPibito.style.display = "none";
    resultadoTitulo.textContent = "Capturando mensaje...";
    resultText.textContent = "";
    botonCopiar.classList.add("hidden");
});


botonEncriptar.addEventListener("click", (e) => {
    OcultarTextoOutput();
    });

botonDesencriptar.addEventListener("click", (e) =>{
    OcultarTextoOutput();
});    

botonCopiar.addEventListener("click",()=>{
    let textoCopiado = resultText.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
        resultadoTitulo.textContent = "Texto copiado!";
        botonCopiar.classList.add("hidden");
        resultText.textContent = "";
    })

});
