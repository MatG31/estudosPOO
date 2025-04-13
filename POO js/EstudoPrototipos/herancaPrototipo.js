//console.log(teste());

const usuario = {
    nome: "Matheus",
    email: "matheusgameleira31@gmail.com",
    nascimento: "2006",
    ocupacao: "aluno(a)",
    ativo: true,
    exibirInfo: function(){
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Roberval",
    email: "bolinhodechuva@gmail.com",
    nascimento: "1930",
    ocupacao: "administrador(a)",
    ativo: true,
    criarCurso: function(){
        console.log("Curso criado.");
    }
}

Object.setPrototypeOf(admin, usuario);
admin.exibirInfo();
admin.criarCurso();

/* function Musica(){
}
Musica.prototype.genero = "indie";
let oculto = new Musica();

console.log(oculto.prototype);
console.log(oculto.__proto__);
console.log(Musica.prototype);

const usuario2 = {
    nome: "Frederico",
    nascimento: "1950",
    ativo: false
}

usuario.exibirInfo();

const atividade = function(){
    if(this.ativo){
        console.log("Usuário ativo.")
    }else{
        console.log("Usuário inativo.")
    }
}

const exibirAtividade = atividade.bind(usuario);

exibirAtividade();

console.log(usuario2.nome);
atividade.call(usuario2);

function enviarMensagem(ano){
    if (ano > 2000){
        console.log("Você é bem jovem.");
    }else{
        console.log("Você deve ser bem maturo.")
    }
}

enviarMensagem.call(usuario2, this.nascimento);

function teste () {
    return 1;
};*/