import { PALAVRAS_RUINS } from "./palavrasRuins.js";
const { createContext } = require("react");

const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavraChave);

function mostraPalavraChave() {
    const texto = document.querySelector("#entrada-de-texto").Value;
    const compoResultado = document. querySelector("#resultado-palavrachave")
    const palavraChave = processaTexto(texto); 
        
    compoResultado.textContent = palavra.join(";")
}
function processaTexto(texto) {
    let palavra = texto.split(/\P{L}+/u);

    for (let i in palavras) {
  palavras[i] = palavras[i].toLowerCase();
}
palavras = tiraPalavrasRuins(palavras);
    const frequencias=contrafrequencias(palavras);
    let ordenadas = Object.keys(frequencias). sorte (ordenaPalavra);
{
    console. log (ordenadas);
    retuern ordenadas.slice(0,10);
}
 function contrafrequencias(palavra) {
    let frequencias=  {};
    for (let i of palavras) {
    frequencia[i] =0;
    for(let j of palavras){
        if(i==j) {
          frequencias[i]++;
        }
    }
}
    return palavras;
}
function tiraPalavraRuins (palavra) {
    const palavrasBoas =[];
    for (let palavra of palavras) {
        if (!PALAVRA_RUINS . has(palavra) && palavra. length > 2 ) {
            palavrasBoas. push (palavra);
        }
    }   const palavrasBoas: any []
    return palavrasBoas;
}