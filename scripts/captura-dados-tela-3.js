
/*
//Pagina 1 - 
let infoBasico = {
    titulo: null,
    url: null,
    qtdPerguntas: null,
    qtdNiveis: null
};

//Pagina 2
let infoPerguntas = {
    titulo: null,
    cor: null,
    
    Perguntas = {
        correta = {
            pergunta = null,
            urlImage = null
        },
        incorretas = {
            incorreta = {
                pergunta = null,
                urlImage = null
            },
            incorreta = {
                pergunta = null,
                urlImage = null
            }
        }
    }
};


//Pagina 3 
let infoNiveis = {
    Nivel1 : {
        titulo: null,
        acertosMinimos: null,
        url: null,
        descrisao: null
    },
    Nivel2 : {
        titulo: null,
        acertosMinimos: null,
        url: null,
        descrisao: null
    },
    Nivel3 : {
        titulo: null,
        acertosMinimos: null,
        url: null,
        descrisao: null
    }
};
*/
//variavel controle
qtdPerguntas = 0;
qtdNiveis = 0;

//POST
quizz = {
	title: "Título do quizz",
	image: "https://http.cat/411.jpg",
	questions: [
		{
			title: "Título da pergunta 1",
			color: "#123456",
			answers: []
        }],
	levels: []
};

function creationQuestons(title,color,answers){
    return {
        title,
        color,
        answers
    };
}

function creationAnswers(text,image,isCorrectAnswer){
    return {
        text,
        image,
        isCorrectAnswer
    };
}

pergunta = {
        text: "Texto da resposta 1",
        image: "https://http.cat/411.jpg",
        isCorrectAnswer: true
};


nivel = {
    title: "Título do nível 1",
    image: "https://http.cat/411.jpg",
    text: "Descrição do nível 1",
    minValue: 0
}