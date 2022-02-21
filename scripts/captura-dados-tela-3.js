//variavel controle
qtdPerguntas = 2;
qtdNiveis = 2;

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

function creationLevel(title,image,text,minValue){
    return {
        title,
        image,
        text,
        minValue 
    }
}