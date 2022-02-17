function habilitarTela(texto){
    const pagina = document.querySelector("."+texto);
    if(pagina !== null && pagina !== ""){
        pagina.classList.remove("hidden");
    }
}

function desabilitarTela(texto){
    const pagina = document.querySelector("."+texto);
    if(pagina !== null && pagina !== ""){
        pagina.classList.add("hidden");
    }
}