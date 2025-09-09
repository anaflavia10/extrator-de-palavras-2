const { useContext } = require("react");

const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavraChave);

function mostraPalavraChave() {
    const texto = document.querySelector("#entrada-de-texto").Value;

    const compoResultado = document. querySelector("#resultado-palavrachave")

    const palavra = texto.split(" ");

    compoResultado.textContent = palavra;
}