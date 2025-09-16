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
    let palavra = texto.split(/\P{L}+/U);
    return botaoMostraPalavras;
}