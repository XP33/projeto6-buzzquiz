function habilitarCriacaoQuizz(){
    habilitarTela("tela_3");
    desabilitarTela("tela_1");
    renderizarTela1();
    //renderizarCriacaoPerguntas();
}

function returnHome(){
    habilitarTela("tela_1");
    desabilitarTela("tela_3");
    desabilitarTela("tela_2");
}

function renderizarTela1(){
    const tela = document.querySelector(".container-criacao-quizz");
    tela.innerHTML = tela3form1;

    document.querySelector("form").addEventListener("submit", event =>{
        console.log("Preechimento da informações basicas do Quizz correta!");  
        event.preventDefault();
       renderizarTela2();
    });
}


function renderizarTela2(){
    const tela = document.querySelector(".container-criacao-quizz");
    tela.innerHTML = tela3form2;

    document.querySelector("form").addEventListener("submit", event =>{
        console.log("Preechimento da informações basicas do Quizz correta!");  
        event.preventDefault();
        renderizarTela3();
    });
}


function renderizarTela3(){
    const tela = document.querySelector(".container-criacao-quizz");
    tela.innerHTML = tela3form3;

    document.querySelector("form").addEventListener("submit", event =>{
        console.log("Preechimento da informações basicas do Quizz correta!");  
        event.preventDefault();
        renderizarTela4();
    });
}


function renderizarTela4(){
    const tela = document.querySelector(".container-criacao-quizz");
    tela.innerHTML = tela3form4;
}
