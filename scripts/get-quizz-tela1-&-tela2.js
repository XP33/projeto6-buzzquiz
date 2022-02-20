const API_BUZZQUIZZ = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";

let quiz = null;

function getAllQuizzes() {
    let promise = axios.get(API_BUZZQUIZZ);
    promise.then(printAllQuizzes);
}

function printAllQuizzes(response) {
    let quizzesList = response.data;

    quizzesList.forEach(quiz => {
        let id = quiz.id;
        let title = quiz.title;
        let image = quiz.image;
        let questions = quiz.questions;
        let levels = quiz.levels;

        let quizTemplate = `<article class="quizz_box quiz" id="${id}" onclick="openQuiz(this)">
        <img src="${image}" alt="Quizz image" class="image_quizz">
        <h1 class="titulo_quizz">${title}</h1>
    </article>`

        const allQuizzesEl = document.querySelector(".all_quizzes")
        allQuizzesEl.innerHTML += quizTemplate
    });
}

function openQuiz(quiz) {
    let quizID = quiz.id;
    getQuiz(quizID);
}

function getQuiz(quizID) {
    let promise = axios.get(API_BUZZQUIZZ + `/${quizID}`);
    promise.then(displayQuiz);
}

function displayQuiz(response) {

    habilitarTela("tela_2");
    desabilitarTela("tela_1");

    const quizPageEl = document.querySelector(".page-quiz")

    quiz = response.data

    let id = quiz.id;
    let title = quiz.title;
    let image = quiz.image;
    let questions = quiz.questions;
    let levels = quiz.levels;

    let templateQuizQuestions = ""
    let templateQuizAnswers = ""

    questions.forEach(question => {

        let answers = question.answers.sort(() => Math.random() - 0.5)

        answers.forEach(answer => {
            templateQuizAnswers += `<div class="option" onclick="clickCardAnswer(this)" data-isCorrectAnswer="${answer.isCorrectAnswer}"><img class="img_option" src=${answer.image} alt=""><p class="name_option">${answer.text}</p></div>`
        })

        templateQuizQuestions += `<nav class="full_question_box" id="${questions.indexOf(question)}"><div class="pergunta_box"><h1>${question.title}</h1></div><div class="options_box">${templateQuizAnswers}</div></nav>`

        templateQuizAnswers = ""
    })

    let templateQuizGeneralInfo = `<div class="banner">
    <img src="${image}"class="banner"></img>
    <h1>${title}</h1>
    </div>
    </section><section class="quiz__questions questions">${templateQuizQuestions}</section></div>
    
    <nav class="result_box">
    <div class="percentage_box">
      <h1>88% de acerto: Você é praticamente um aluno de Hogwarts!</h1>
    </div>
    
    <img src="/media/green.jpg" alt="">
    
    <h2>Parabéns Potterhead! Bem-vindx a Hogwarts, aproveite o loop infinito de comida e clique no botão abaixo para usar o vira-tempo e reiniciar este teste.</h2>
    </nav>
    
    <nav>
    <button class="reiniciar_quizz">
      <h1>Reiniciar Quizz</h1>
    </button>
    
    <div class="voltar_home" onclick="returnHome()">
      <h1>Voltar pra home </h1>
    </div>
    </nav>`

    quizPageEl.innerHTML += templateQuizGeneralInfo

}


// Initiate Functions
getAllQuizzes()