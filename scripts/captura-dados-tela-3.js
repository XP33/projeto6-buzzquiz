//Pagina 1 - 
let infoBasico = {
    titulo: null,
    url: null,
    qtdPerguntas: null,
    qtdNiveis: null
}

function capturaDadosPagina1(){
    const titulo = document.querySelector(".nome").value;
    const url = document.querySelector(".url-image").value;
    const qtdPerguntas = parseInt(document.querySelector(".quantidade-perguntas").value);
    const qtdNiveis = parseInt(document.querySelector(".quantidade-niveis").value);
    //CORRIGIR O TOTAL DE CARACTERES 
    if(
        titulo !== null && titulo.length>5 &&
        url !== null &&
        qtdPerguntas !== null && qtdPerguntas >= 3 &&
        qtdNiveis !== null && qtdNiveis >= 2
    ){
        infoBasico.titulo = titulo;
        infoBasico.url = url;
        infoBasico.qtdPerguntas = qtdPerguntas;
        infoBasico.qtdNiveis = qtdNiveis;

        return true;
    }
    else{
        alert("Você digitou os campos de forma errada");
        console.log("Não validou");
        return false;
    }   
}
