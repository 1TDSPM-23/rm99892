function insereNumeroNoVisor(botao, visor) {
    if(botao.value == "+" || botao.value == "-" || botao.value == "*" || botao.value == "/") {
    
        //verificando o penultimo caractere do visor utilizando o atributo length
        if(visor.value[visor.value.length-1] == "+" || visor.value[visor.value.length-1] == "-" || visor.value[visor.value.length-1] == "*" || visor.value[visor.value.length-1] == "/"){
            visor.value.slice(1);
        }else{
            visor.value += botao.value;
        }
        }else{
        visor.value += botao.value;
    }
}

const resultadoDasOperacoes = (visor) =>{

    try {
    //Utilizando a função eva(expressão)
    visor.value = eval(visor.value);
    } catch (error) {
        //verificando o penultimo caractere do visor utilizando o atributo length
        if(visor.value[visor.value.length] == "+" || visor.value[visor.value.length-1] == "-" || visor.value[visor.value.length-1] == "*" || visor.value[visor.value.length] == "/"){
            visor.value = visor.value.slice(visor.value.length-1);
        }else{
            visor.value.shift(1);
        }
    }
}