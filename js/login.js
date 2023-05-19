//CRIAR OBJETOS
// let usuario1 = {
//     nomeCompleto : "Enio Casper",
//     nomeUsuario : "enio",
//     senhaUsuario : "123456",
//     ccuUsuario : "sc"
// }

// let usuario2 = {
//     nomeCompleto : "Danid Silva",
//     nomeUsuario : "danid",
//     senhaUsuario : "123456",
//     ccuUsuario : "rj"
// }

// usuario1 = usuario2;

// console.log("NOME DO USUÁRIO : " + usuario1.nomeCompleto);

// usuario1.nomeCompleto = "Lukas";
// console.log("NOME DO USUÁRIO : " + usuario1.nomeCompleto);

// usuario1["cpf"] = "12345678900";
// console.log("CPF DO USUÁRIO : " + usuario1.cpf);


// //LISTA DE USUÁRIOS
// let listaDeUsuarios = [];
// listaDeUsuarios.push(usuario1);
// listaDeUsuarios.push(usuario2);
//LISTA DE USUÁRIOS
let listaDeUsuarios = [
    {
        nomeCompleto : "Enio Casper",
        nomeUsuario : "enio",
        senhaUsuario : "123456",
        ccuUsuario : "sc"
    },
    {
        nomeCompleto : "Danid Silva",
        nomeUsuario : "danid",
        senhaUsuario : "123456",
        ccuUsuario : "rj"
    },
    {
        nomeCompleto : "Gerson Lima",
        nomeUsuario : "gege",
        senhaUsuario : "123456",
        ccuUsuario : "sp"
    },
    {
        nomeCompleto : "Jorginho Lima",
        nomeUsuario : "jojo",
        senhaUsuario : "123456",
        ccuUsuario : "rj"
    },
    {
        nomeCompleto : "Edulado Biolante",
        nomeUsuario : "dudu",
        senhaUsuario : "123456",
        ccuUsuario : "sp"
    }
];

const msgStatus = document.querySelector("#msg")

const formLogin = document.querySelector("#form[name='frm01']")

const botaoSubmit = document.querySelector("#btnSubmit")
botaoSubmit.addEventListener("click", ()=>{
    validaFormularioCompleto();
})

function validaFormularioCompleto() {

    formLogin.OnpreventDefault();

    const inputUser = document.querySelector("#idNm")
    const inputPass = document.querySelector("#idPass")
    const selCentroCusto = document.querySelector("#idCusto")


    console.log(inputUser);
    console.log(inputPass);
    console.log(selCentroCusto);

        //objeto usuario-logado
        const usuarioLogado = {
            nomeUsuarioLogado : inputUser.value,
            senhaUsuarioLogado : inputPass.value,
            ccuUsuarioLogado : selCentroCusto.value
        }

        //OBJETO USUARIO-VALIDADO
        let usuarioValidado = {};


    if(usuarioLogado.nomeUsuarioLogado != "" && senhaUsuario.senhaUsuarioLogado != "" && ccuusuarioLogado.ccuUsuarioLogado != "0"){

        for (let x = 0; x < listaDeUsuarios; x++) {  
       
            if(usuarioLogado.nomeUsuarioLogado == listaDeUsuarios[x] && senhaUsuario.senhaUsuarioLogado ==  listaDeUsuarios[x] && ccuusuarioLogado.ccuUsuarioLogad ==  listaDeUsuarios[x]){
                usuarioValidado = listaDeUsuarios[x];
                
                msgStatus.setAttribute("style", "color:#00ff00")
                msgStatus.innerHTML = `<span><strong>O usuário ${usuarioValidado.nomeCompleto} fez login com SUCESSO!!</strong></span>`;

            }
            // }else{
            //     msgStatus.setAttribute("style", "color:#ff0000")
            //     msgStatus.innerHTML = `<span><strong>Nome do usuario ou senha invalidos...</strong></span>`;
            // }

        }

    }else{
       console.log("existe algum campo sem preenchimento")
    }

    if(usuarioValidado != null){
        msgStatus.setAttribute("style", "color:#00ff00")
        msgStatus.innerHTML = `<span><strong>O usuário ${usuarioValidado.nomeCompleto} fez login com SUCESSO!!</strong></span>`;
    }else{
        msgStatus.setAttribute("style", "color:#ff0000")
        msgStatus.innerHTML = `<span><strong>Nome do usuario ou senha invalidos...</strong></span>`;
        }
}

// const form1 = document.querySelector("form[name='frm01']");
// // console.log(form1);

// form1.addEventListener("submit", ()=>{
    const inputUser = document.querySelector("#idNm");
    const inputPass = document.querySelector("#idPass");
    const selectCusto = document.querySelector("#idCusto");

    const labelUser = document.querySelector("label[for='idNm']");
    const labelPass = document.querySelector("label[for='idPass']");

    inputUser.addEventListener("keyup" ,()=>{

        if(inputUser.value.length < 4){
            labelUser.setAttribute("style","color:#ff0000;");
        }else{
            labelUser.setAttribute("style","color:#00ff00;");
        }
    });

    inputPass.addEventListener("keyup" ,()=>{

        if(inputPass.value.length < 5){
            labelPass.setAttribute("style","color:#ff0000;");
        }else{
            labelPass.setAttribute("style","color:#00ff00;");
        }
    });