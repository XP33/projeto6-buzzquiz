function habilitarCriacaoQuizz(){
    habilitarTela("tela_3");
    desabilitarTela("tela_1");
    renderizarTela2();
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
        capturaPagina1();
       renderizarTela2();
    });
}


function renderizarTela2(){
    const tela = document.querySelector(".container-criacao-quizz");
    tela.innerHTML = tela3form2;
    renderizarPergunta(1);
    renderizarExtra(3);

    document.querySelector("form").addEventListener("submit", event =>{
        console.log("Preechimento da informações basicas do Quizz correta!");  
        event.preventDefault();
        //capturaDeDadosTela3(infoPerguntas);
        renderizarTela3();
    });
}

function renderizarPergunta(numero){
    const tela = document.querySelector(".container-criacao-quizz");
    const pergunta = tela.querySelector(".pergunta");
    pergunta.innerHTML = pergunta.innerHTML +  perguntaNumero(numero);
}

function sobreescreverPergunta(elemento,numero){
    const tela = document.querySelector(".container-criacao-quizz");
    const pergunta = tela.querySelector(".pergunta");
    pergunta.innerHTML = pergunta.innerHTML + perguntaNumero(numero);

    elemento.classList.add("hidden");
}

function renderizarExtra(numero){
    const tela = document.querySelector(".container-criacao-quizz");
    const pergunta = tela.querySelector(".criacao-quizz");
    pergunta.innerHTML = pergunta.innerHTML +  renderizarPerguntasExtras(numero);
}


function renderizarTela3(){
    const tela = document.querySelector(".container-criacao-quizz");
    tela.innerHTML = tela3form3;

    document.querySelector("form").addEventListener("submit", event =>{
        console.log("Preechimento da informações basicas do Quizz correta!");  
        event.preventDefault();
        //capturaDeDadosTela3(infoNiveis);
        renderizarTela4();
    });
}


function renderizarTela4(){
    const tela = document.querySelector(".container-criacao-quizz");
    tela.innerHTML = tela3form4;
}

function capturaPagina1(){
    const tela3 = document.querySelector(".container-criacao-quizz");
    let nodeList = tela3.querySelectorAll("input");
    let elements = Array.from(nodeList);

    quizz.title = elements[0].value;
    quizz.image = elements[1].value;
    qtdPerguntas = elements[2].value;
    qtdNiveis = elements[3].value;
}

function capturaPagina2(){
    const tela3 = document.querySelector(".container-criacao-quizz");
    let nodeList = tela3.querySelectorAll("input");
    let elements = Array.from(nodeList);

    //SELO DE QUALIDADE LUAN!
    for(let j =0; j<qtdPerguntas;j++){
        let nome = elements[1].value;
        let cor = elements[2].value;

        let resposta =  [creationAnswers( elements[3].value, elements[4].value,true)];
        
        let i = 5;
        while(elements[i].value != null && elements[i].value != ""){
            resposta.push(creationAnswers( elements[i].value, elements[i+1].value,false));
            i=i+2;
        }   

        let questoes = [creationQuestons(nome,cor,resposta)];
        quizz.questions.push(questoes);
    }

}

//LINDA porem Objeto do post complexo demais...
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


