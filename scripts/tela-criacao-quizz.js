function habilitarCriacaoQuizz(){
    habilitarTela("tela_3");
    desabilitarTela("tela_1");
    renderizarTela3();
}

function returnHome(){
    document.location.reload(false);
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
    renderizarExtra(qtdPerguntas);

    document.querySelector("form").addEventListener("submit", event =>{
        console.log("Preechimento da informações basicas do Quizz correta!");  
        event.preventDefault();
        capturaPagina2();
        
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

    var quest = document.createElement("div");
    quest.innerHTML = perguntaNumero(numero);
    pergunta.appendChild(quest);

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
    renderizarNivel(1);
    renderizarExtraNivel(qtdNiveis);

    document.querySelector("form").addEventListener("submit", event =>{
        console.log("Preechimento da informações basicas do Quizz correta!");  
        event.preventDefault();
        capturaPagina3();
        renderizarTela4();
    });
}

function renderizarNivel(numero){
    const tela = document.querySelector(".container-criacao-quizz");
    const nivel = tela.querySelector(".nivel");
    nivel.innerHTML = nivel.innerHTML +  nivelNumero(numero);
}


function renderizarExtraNivel(numero){
    const tela = document.querySelector(".container-criacao-quizz");
    const nivel = tela.querySelector(".criacao-quizz");
    nivel.innerHTML = nivel.innerHTML + renderizarNivelExtras(numero);
}

function sobreescreverNivel(elemento,numero){
    const tela = document.querySelector(".container-criacao-quizz");
    const nivel = tela.querySelector(".nivel");

    var quest = document.createElement("div");
    quest.innerHTML = nivelNumero(numero);
    nivel.appendChild(quest);

    elemento.classList.add("hidden");
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
    qtdPerguntas = elements[2].value+1;
    qtdNiveis = elements[3].value+1;

    console.log(elements);
}
 
function capturaPagina2(){
    const tela3 = document.querySelector(".container-criacao-quizz");
    const objeto = tela3.querySelector(".pergunta");
    
    for(let i = 1;i<=qtdPerguntas;i++){
        let tagPergunta = objeto.querySelector(".tagPergunta"+i);
        let nodeList = tagPergunta.querySelectorAll("input");
        let elements = Array.from(nodeList);
        let titulo = elements[0].value;
        let cor = elements[1].value;

        //Resposta Correta 
        let questoes = [creationAnswers(elements[2].value,elements[3].value,true)];
        
        //Respostas Incorretas
        let index = 4;
        
        while(elements[index]?.value != "" && elements[index]?.value != null){
            questoes.push(creationAnswers(elements[index].value,elements[index+1].value,true));
            index = index+2;
        }
        
        //Criando o obejto questao e enviado ao obejto Quizz
        quizz.questions.push(creationQuestons(titulo,cor,questoes));
    }

    console.log(quizz.questions);
}

function capturaPagina3(){
    const tela3 = document.querySelector(".container-criacao-quizz");
    const objeto = tela3.querySelector(".nivel");
    
    for(let i = 1;i<=qtdPerguntas;i++){
        let tagPergunta = objeto.querySelector(".tagNivel"+i);
        let nodeList = tagPergunta.querySelectorAll("input");
        let elements = Array.from(nodeList);
        quizz.levels.push(
            creationLevel(
                elements[0].value,//title
                elements[2].value,//image
                elements[3].value,//text
                elements[1].value//minValue
            )
        );
    }

    console.log(quizz.levels);
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


