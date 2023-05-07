function mudaBackground(){
    document.body.bgColor='gray';
}

function  adicionarItem(){
    // pegar o valor do texto
    const texto = document.getElementById('novoItem').value;
    // criar novo item
    const newItem = document.createElement('li');
    newItem.textContent = texto;
    // adicionar novo item
    document.getElementById('lista').appendChild(newItem);
}

function mudaImagem() {
    if(document.getElementById('imagem').alt== 'facebook'){
        document.getElementById('imagem').src= '../img/social-1.png';
        document.getElementById('imagem').alt= 'github';
    }else{
        document.getElementById('imagem').src= '../img/social-2.png';
        document.getElementById('imagem').alt= 'facebook';
    }
}

function mensagem() {
    document.getElementById('exibeMensagem').innerText='Em busca de um estágio, por favor me ajude kkkkk';
}

function tiraMensagem() {
    document.getElementById('excluir').hidden= true;
}