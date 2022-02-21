const APIBUZZQUIZZENVIAR = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";



function enviarQuizz(){
    const requisicao = axios.post(APIBUZZQUIZZENVIAR, quizz);
    requisicao.then(tratarSucessoEnvioQuizz);
    requisicao.catch(tratarErroEnvioQuizz);
}

function tratarSucessoEnvioQuizz(response){
    console.log("Seu Quizz foi enviado com sucesso meu amigo construtor de quizzes :)");
    salvarLocalStorage(response.data.id);
}

function tratarErroEnvioQuizz(erro) {
    console.log("Status code: " + erro.response.status);
    console.log("Mensagem de erro: " + erro.response.data);
    console.log("Calma nosso melhor tomate esta cuidando disso :)")
}

function salvarLocalStorage(idUltimoQuizz){
    if(carregarLocalStrorage){
        carregarLocalStrorage();
        listaIdQuizz.push(idUltimoQuizz);
        let stringLista = JSON.stringify(listaIdQuizz);
        localStorage.setItem("listaQuizz",stringLista);

        console.log("Lista (existe) -> "+ localStorage.getItem("listaQuizz"));
    }else{
        listaIdQuizz.push(idUltimoQuizz);
        let stringLista = JSON.stringify(listaIdQuizz);
        localStorage.setItem("listaQuizz",stringLista);

        console.log("Lista (Não existe)-> "+ localStorage.getItem("listaQuizz"));
    }
}

function carregarLocalStrorage(){
    let getLista = localStorage.getItem("listaQuizz");
    if(getLista != undefined){
        let lista = JSON.parse(getLista);
        listaIdQuizz = lista;
        return true;
    }else{
        return false;
    }
}