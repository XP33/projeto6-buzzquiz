let tela3form1 = `
    <p class="titulo-tela-criacao">Comece pelo começo</p>
    <form action="">
    <div class="criacao-quizz">

        <input type="text" class="nome" placeholder="Título do seu quizz" minlength="20" maxlength="65" required>
        <input type="url" class="url-image" placeholder="URL da imagem do seu quizz" required>
        <input type="number" class="quantidade-perguntas" placeholder="Quantidade de perguntas do quizz" minlength="3" required>
        <input type="number" class="quantidade-niveis" placeholder="Quantidade de níveis do quizz" minlength="2" required>
        </div>  

        <button class="botao-criacao-quizz" type="submit">Prosseguir pra criar perguntas</button>
    </form>
`;

let tela3form2 = `
    <p class="titulo-tela-criacao">Crie suas perguntas</p>
    <form action="">
        <div class="criacao-quizz">        
            <div class = "pergunta">
                
            </div>

        </div>
        <button class="botao-criacao-quizz" type="submit">Prosseguir pra criar perguntas</button>
    </form>
`;
function renderizarPerguntasExtras(numero){
    let perguntas = "";
    
    for(let i= 0; i<numero;i++){
        perguntas = perguntas  + `
        <div class="pergunta-add pergunta${2+i}" onclick="sobreescreverPergunta(this,${2+i})"><p>Pergunta ${2+i}</p> <ion-icon name="open-outline"></ion-icon></div>
        `
    }

    return perguntas;
}

function perguntaNumero(numero){
    let pergunta =  `
        <div class="caixa-pergunta tagPergunta${numero}">
            <p class="texto-tela-criacao">Pergunta ${numero}</p>
            <input type="text" class="titulo-quiz" placeholder="Título do seu quizz" minlength="20" required>
            <input type="text" class="cor-fundo" placeholder="Cor de fundo da pergunta"  required>
            <p class="texto-tela-criacao">Resposta correta</p>
            <input type="text" class="resposta-correta" placeholder="Resposta correta" required>
            <input type="url" class="url-imagem" placeholder="URL da imagem 1" required>

            <p class="texto-tela-criacao">Resposta Incorretas</p>
            <input type="text" class="resposta-incorreta-1" placeholder="Resposta incorreta 1" required>
            <input type="url" class="url-imagem-1" placeholder="URL da imagem 1" required>

            <input type="text" class="resposta-incorreta-2" placeholder="Resposta incorreta 2">
            <input type="url" class="url-imagem-2" placeholder="URL da imagem 2">

            <input type="text" class="resposta-incorreta-3" placeholder="Resposta incorreta 3">
            <input type="url" class="url-imagem-3" placeholder="URL da imagem 3">
        </div>
    `

    return pergunta;
}


//pattern="0[xX][0-9a-fA-F]+"
let tela3form3 = `
    <p class="titulo-tela-criacao">Agora, decida os níveis!</p>
    <form action="">
        <div class="criacao-quizz">
            <div class="nivel">
            </div>
        </div>  

        <button class="botao-criacao-quizz" type="submit">Finalizar Quizz</button>
    </form>
`;

function nivelNumero(numero){
    let nivel = `
        <div class="caixa-nivel tagNivel${numero}">
            <p class="texto-tela-criacao">Nivel ${numero}</p>
            <input type="text" class="nome" placeholder="Título do nível" minlength="10" required>
            <input type="number" class="acertos" placeholder="% de acerto mínima" min="0" max="100" required>
            <input type="url" class="url-image-nivel" placeholder="URL da imagem do nível" required>
            <input type="text" class="descrisao-niveis" placeholder="Descrição do nível" minlength="10" required>
        </div>
    `

    return nivel;
}

function renderizarNivelExtras(numero){
    let nivel = "";
    
    for(let i= 0; i<numero;i++){
        nivel = nivel  + `
        <div class="nivel-add" onclick="sobreescreverNivel(this,${2+i})"><p>Nivel ${2+i}</p><ion-icon name="open-outline"></ion-icon></div>
        `
    }

    return nivel;
}

let tela3form4 = `
    <p class="titulo-tela-criacao">Seu quizz está pronto!</p>
    <div class = "capa-imagem-quizz" style="background-image:url('./media/Rectangle 34.png') ;">
        <p class="titulo-imagem" >O quão Potterhead é você?</p>
    </div>
    <button class="botao-criacao-quizz" onclick="enviarQuizz()">Acessar Quizz</button>
    <button class="botao-voltar" onclick="desabilitarCriacaoQuizz()">Voltar pra home</button>
`;