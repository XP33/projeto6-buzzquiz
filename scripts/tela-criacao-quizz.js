function habilitarCriacaoQuizz(){
    habilitarTela("tela_3");
    desabilitarTela("tela_1");
    renderizarTela1();
    //renderizarCriacaoPerguntas();
}

function desabilitarCriacaoQuizz(){
    habilitarTela("tela_1");
    desabilitarTela("tela_3");

}

function renderizarTela1(){
    const tela = document.querySelector(".container-criacao-quizz");
    tela.innerHTML = tela3form1;

    document.querySelector("form").addEventListener("submit", event =>{
        console.log("Preechimento da informações basicas do Quizz correta!");  
        event.preventDefault();
        capturaDeDadosTela3(infoBasico);
       renderizarTela2();
    });
}


function renderizarTela2(){
    const tela = document.querySelector(".container-criacao-quizz");
    tela.innerHTML = tela3form2;

    document.querySelector("form").addEventListener("submit", event =>{
        console.log("Preechimento da informações basicas do Quizz correta!");  
        event.preventDefault();
        capturaDeDadosTela3(infoPerguntas);
        renderizarTela3();
    });
}


function renderizarTela3(){
    const tela = document.querySelector(".container-criacao-quizz");
    tela.innerHTML = tela3form3;

    document.querySelector("form").addEventListener("submit", event =>{
        console.log("Preechimento da informações basicas do Quizz correta!");  
        event.preventDefault();
        capturaDeDadosTela3(infoNiveis);
        renderizarTela4();
    });
}


function renderizarTela4(){
    const tela = document.querySelector(".container-criacao-quizz");
    tela.innerHTML = tela3form4;
}

function capturaDeDadosTela3(arrayInfo){
    const tela3 = document.querySelector(".container-criacao-quizz");
    let nodeList = tela3.querySelectorAll("input");
    let elements = Array.from(nodeList);
    let i = 0;
    for(var item in arrayInfo){
        arrayInfo[item]=elements[i].value;
        console.log(item + "-"+arrayInfo[item]);
        i++;
    }
    console.log("Objeto ->"+arrayInfo);
}


