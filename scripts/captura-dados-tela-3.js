//variavel controle
qtdPerguntas = 2;
qtdNiveis = 2;

//POST
quizz = {
	title: null,
	image: null,
	questions: [],
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

function creationLevel(title,image,text,minValue){
    return {
        title,
        image,
        text,
        minValue 
    }
}


let listaIdQuizz = [];

quizzTeste = {
	title: "Quizz do tomate Dev",
	image: "https://assets.yara.com/48f316f2dec24d948cf50af42d4bebd7.jpg",
	questions: [
		{
			title: "Qual o melhor de tipo de Tomate no mundo dos Devs???",
			color: "#123456",
			answers: [
				{
					text: "Tomate do tipo fogo com bone bem estiloso?",
					image: "https://img2.gratispng.com/20180610/wex/kisspng-tomato-self-reference-character-fan-art-tomate-5b1d45aa7bb1c4.8575038715286450345067.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Tomate do tipo timido com um otimo gosto musical?",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Se vc fosse uma batata que quer entrar no mercado de trabalho, o que mais te da medo?",
			color: "#123456",
			answers: [
				{
					text: "Trabalhar do lado de um alface?",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Ser questionada sobre o uso de agrotoxicos?",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Digamos que vc não veio de uma horta convencional",
			color: "#123456",
			answers: [
				{
					text: "Isso te enche de determinação?",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Ou uma flor cretina pode acabar com vc?",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		}
	],
	levels: [
		{
			title: "Nivel da batata",
			image: "https://img.freepik.com/vetores-gratis/bonito-engracado-feliz-tomate-e-batata-ilustracao-de-personagem-de-desenho-animado_92289-1534.jpg",
			text: "Descrição do nível 1",
			minValue: 0
		},
		{
			title: "Nivel do tomate nerd",
			image: "https://img.freepik.com/vetores-gratis/bonito-engracado-feliz-tomate-e-batata-ilustracao-de-personagem-de-desenho-animado_92289-1534.jpg",
			text: "Descrição do nível 2",
			minValue: 50
		}
	]
}