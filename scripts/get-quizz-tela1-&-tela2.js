const API_BUZZQUIZZ = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";

let correctAnswerPercentage = 0;
let eachAnswerPercentage = 0;

let quiz = null
let userQuizzes = []

let counterAnswer = 0

let idsString = localStorage.getItem("listaQuizz")
let idsArray= JSON.parse(idsString)
idsString = JSON.stringify(idsArray)

function getAllQuizzes() {
    let promise = axios.get(API_BUZZQUIZZ);
    promise.then(printAllQuizzes);
}

function printAllQuizzes(response) {
    let quizzesList = response.data;

    console.log(quizzesList)

    // quizzesList = quizzesList.filter(filterUserQuizzes);

    const allQuizzesEl = document.querySelector(".all_quizzes")
        allQuizzesEl.innerHTML =""

    quizzesList.forEach(quiz => {
        let id = quiz.id;
        let title = quiz.title;
        let image = quiz.image;

        let quizTemplate = `<article class="quizz_box quiz" id="${id}" onclick="openQuiz(this)">
        <img src="${image}" alt="Quizz image" class="image_quizz"><h1 class="titulo_quizz">${title}</h1></article>`

        allQuizzesEl.innerHTML += quizTemplate
    });

    printUserQuizzes()
}

function filterUserQuizzes(quiz) {
//   array.forEach(element => {
//       for (let i = 0; i < quizzesList.length; i++) {
//           if(quiz.id == )
//   });
//   }
}

console.log(userQuizzes)
   console.log(idsArray)
   console.log("Lista (existe) -> "+ localStorage.getItem("listaQuizz")); 
   console.log(localStorage.getItem("listaQuizz").length)


function printUserQuizzes() {
    const userQuizzesEl = document.querySelector(".your_quizzes_group")

    userQuizzesEl.innerHTML += `<article class="first_quizz hidden">
    <h1>Você não criou nenhum quizz ainda :(</h1>
    <button onclick="habilitarCriacaoQuizz()">
      <h2>Criar Quizz</h2>
    </button>
  </article>
  
  <section class="you_quizzes hidden">
        <h1 class="titulo_grupo">Seus Quizzes</h1>
        <img onclick="addNewQuizz()" src="/media/add_button.png" alt="Criar um novo Quizz">
      </section>`
 

    if (localStorage.getItem("listaQuizz").length == 0) {
        const emptyQuizEl = document.querySelector(".first_quizz")
        emptyQuizEl.classList.remove("hidden")
        const userQuizTitleEl = document.querySelector(".you_quizzes")
        userQuizTitleEl.classList.add("hidden")
    }else{
        const emptyQuizEl = document.querySelector(".first_quizz")
        emptyQuizEl.classList.add("hidden")
        const userQuizTitleEl = document.querySelector(".you_quizzes")
        userQuizTitleEl.classList.remove("hidden")
    }
 

    listaIdQuizz.forEach(quiz => {
        let title = quiz.title;
        let image = quiz.image;
        let id = quiz.id;

        let userQuizTemplate = `<article class="quizz_box quiz" id="${id}" onclick="openQuiz(this)">
        <img src="${image}" alt="Quizz image" class="image_quizz"><h1 class="titulo_quizz">${title}</h1></article>`

        userQuizzesEl.innerHTML += userQuizTemplate
    })

    userQuizzes = []
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

    let title = quiz.title;
    let image = quiz.image;
    let questions = quiz.questions;

    let templateQuizQuestions = ""
    let templateQuizAnswers = ""

    questions.forEach(question => {

        let answers = question.answers.sort(() => Math.random() - 0.5)

        answers.forEach(answer => {
            templateQuizAnswers += `<div class="option" onclick="clickCardAnswer(this)" data-isCorrectAnswer="${answer.isCorrectAnswer}">
            <img class="img_option" src=${answer.image} alt=""><p class="name_option">${answer.text}</p></div>`
        })

        templateQuizQuestions += `<nav class="full_question_box" id="${questions.indexOf(question)}">
        <div class="pergunta_box"><h1>${question.title}</h1></div><div class="options_box">${templateQuizAnswers}</div></nav>`

        templateQuizAnswers = ""
    })

    let templateQuizGeneralInfo = `<div class="banner"><img src="${image}"class="banner"></img><h1>${title}</h1></div></section>
    <section class="quiz__questions questions">${templateQuizQuestions}</section></div><nav class="result_box"></nav>`

    quizPageEl.innerHTML += templateQuizGeneralInfo

    document.querySelector(".banner").scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })

}

function clickCardAnswer(answer) {
    let totalQuestions = document.querySelectorAll(".full_question_box").length
    counterAnswer += 1
    eachAnswerPercentage = 100 / totalQuestions

    let siblingAnswerEl = answer.parentNode.firstChild
    while (siblingAnswerEl !== null) {
        if (siblingAnswerEl === answer) {
            if (answer.getAttribute("data-iscorrectanswer") === "true") {
                correctAnswerPercentage += eachAnswerPercentage
                answer.classList.add("correct")
            } else {
                answer.classList.add("wrong")
            }
        } else {
            siblingAnswerEl.classList.add("not-selected");

            if (siblingAnswerEl.getAttribute("data-iscorrectanswer") === "true") {
                siblingAnswerEl.classList.add("correct");
            } else { siblingAnswerEl.classList.add("wrong"); }
        }
        siblingAnswerEl = siblingAnswerEl.nextElementSibling;
    };

    let questionEl = answer.parentNode.parentNode.nextElementSibling
    if (questionEl !== null) {
        setTimeout(() => questionEl.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }), 50)
    }

    if (counterAnswer === totalQuestions) {
        let fixedPercentage = Math.ceil(correctAnswerPercentage)
        setTimeout(showResult, 500, fixedPercentage)
    }
}

function showResult(correctAnswerPercentage) {
    let levels = quiz.levels;

    let templateResult = ""

    levels.forEach(level => {
        if (correctAnswerPercentage >= level.minValue) {
            templateResult = `
            <div class="percentage_box"><h1>${correctAnswerPercentage}% de acerto: ${level.title}</h1></div>
            <img src=${level.image} alt=""><h2>${level.text}</h2>
            </nav><nav><button class="reiniciar_quizz"><h1>Reiniciar Quizz</h1></button>
            <div class="voltar_home" onclick="returnHome()"><h1>Voltar pra home </h1></div>`
        }
    })

    const quizResultEl = document.querySelector(".result_box");

    quizResultEl.innerHTML += templateResult;
    quizResultEl.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
}



// Initiate Functions
getAllQuizzes()