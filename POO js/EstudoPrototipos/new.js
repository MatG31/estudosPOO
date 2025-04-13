function User(nomeParam, idadeParam){
    this.nome = nomeParam;
    this.idade = idadeParam;

    this.exibirInfo = function(){
        return `${this.nome}, ${this.idade} anos.`
    }
}

const usuario1 = new User("Matheus", 19);
console.log(usuario1.exibirInfo());
