function habilitarCriacaoQuizz(){
    habilitarTela("tela_3");
    desabilitarTela("tela_1");
    renderizarCriacaoQuiz();
    //renderizarCriacaoPerguntas();
}

function desabilitarCriacaoQuizz(){
    habilitarTela("tela_1");
    desabilitarTela("tela_3")

}

function renderizarCriacaoQuiz(){
    const tela = document.querySelector(".container-criacao-quizz");
    tela.innerHTML = `
        <p class="titulo-tela-criacao">Comece pelo começo</p>
        <div class="criacao-quizz">
        
        <input type="text" class="nome" placeholder="Título do seu quizz">
        <input type="text" class="url-image" placeholder="URL da imagem do seu quizz">
        <input type="text" class="quantidade-perguntas" placeholder="Quantidade de perguntas do quizz">
        <input type="text" class="quantidade-niveis" placeholder="Quantidade de níveis do quizz">
        </div>  

        <button class="botao-criacao-quizz" onclick="renderizarCriacaoPerguntas()">Prosseguir pra criar perguntas</button>
    `;
}

function renderizarCriacaoPerguntas(){
    if(capturaDadosPagina1()){
        const tela = document.querySelector(".container-criacao-quizz");
        tela.innerHTML = `
            <p class="titulo-tela-criacao">Crie suas perguntas</p>
            <div class="criacao-quizz">
                <p class="texto-tela-criacao">Pergunta 1</p>
                <input type="text" class="titulo-quiz" placeholder="Título do seu quizz">
                <input type="text" class="cor-fundo" placeholder="Cor de fundo da pergunta">
                <p class="texto-tela-criacao">Resposta correta</p>
                <input type="text" class="resposta-incorreta-1" placeholder="Resposta incorreta 1">
                <input type="text" class="url-imagem-1" placeholder="URL da imagem 1">

                <input type="text" class="resposta-incorreta-2" placeholder="Resposta incorreta 2">
                <input type="text" class="url-imagem-2" placeholder="URL da imagem 2">

                <input type="text" class="resposta-incorreta-3" placeholder="Resposta incorreta 3">
                <input type="text" class="url-imagem-3" placeholder="URL da imagem 3">
            </div>
            <button class="botao-criacao-quizz" onclick="renderizarFinalizacaoQuiz()">Prosseguir pra criar perguntas</button>
        `;
    }
}

function renderizarFinalizacaoQuiz(){
    const tela = document.querySelector(".container-criacao-quizz");
    tela.innerHTML = `
        <p class="titulo-tela-criacao">Agora, decida os níveis!</p>
        <div class="criacao-quizz">
        <p class="texto-tela-criacao">Nivel 1</p>
            <input type="text" class="nome" placeholder="Título do nível">
            <input type="text" class="acertos" placeholder="% de acerto mínima">
            <input type="text" class="url-image-nivel" placeholder="URL da imagem do nível">
            <input type="text" class="descrisao-niveis" placeholder="Descrição do nível">
        </div>  

        <div class="nivel-add"><p>Nivel 2</p> <ion-icon name="open-outline"></ion-icon></div>

        <div class="nivel-add"><p>Nivel 3</p> <ion-icon name="open-outline"></ion-icon></div>

        <button class="botao-criacao-quizz" onclick="renderizarQuizPronto()">Finalizar Quizz</button>
    `
}

function renderizarQuizPronto(){
    const tela = document.querySelector(".container-criacao-quizz");
    tela.innerHTML = `
        <p class="titulo-tela-criacao">Seu quizz está pronto!</p>
        <div class = "capa-imagem-quizz" style="background-image:url('./media/Rectangle 34.png') ;">
            <p class="titulo-imagem" >O quão Potterhead é você?</p>
        </div>
        <button class="botao-criacao-quizz" onclick="renderizarCriacaoPerguntas()">Acessar Quizz</button>
        <button class="botao-voltar" onclick="desabilitarCriacaoQuizz()">Voltar pra home</button>
    `
}
