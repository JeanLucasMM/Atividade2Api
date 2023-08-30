document.addEventListener("DOMContentLoaded", function() {
    const obterPiadaButton = document.getElementById("obter-piada");
    const perguntaElement = document.getElementById("pergunta");
    const respostaElement = document.getElementById("resposta");
    const imagemGatoElement = document.getElementById("imagem-gato");

    obterPiadaButton.addEventListener("click", async function() {
        const piadaResponse = await fetch("https://v2.jokeapi.dev/joke/Any?lang=pt");
        const piadaData = await piadaResponse.json();

        perguntaElement.innerText = piadaData.setup;
        respostaElement.innerText = piadaData.delivery;

        const gatoResponse = await fetch("https://api.thecatapi.com/v1/images/search");
        const gatoData = await gatoResponse.json();

        if (gatoData && gatoData[0] && gatoData[0].url) {
            imagemGatoElement.src = gatoData[0].url;
        }
    });
});
