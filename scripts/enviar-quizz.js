const APIBUZZQUIZZENVIAR = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";



function enviarQuizz(){
    const requisicao = axios.post(APIBUZZQUIZZENVIAR, quizz);
    requisicao.then(tratarSucessoEnvioQuizz);
    requisicao.catch(tratarErroEnvioQuizz);
}

function tratarSucessoEnvioQuizz(response){
    console.log("Seu Quizz foi enviado com sucesso meu amigo construtor de quizzes :)");
}

function tratarErroEnvioQuizz(erro) {
    console.log("Status code: " + erro.response.status);
    console.log("Mensagem de erro: " + erro.response.data);
    console.log("Calma nosso melhor tomate esta cuidando disso :)")
  }