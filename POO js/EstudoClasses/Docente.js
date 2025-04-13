import User from "./User.js";
import { novoUser } from "./User.js";

export default class Docente extends User{
    constructor (nome, email, dataNasc, ativo, cargo = "Admin", periodo){
        super(nome, email, dataNasc, ativo, cargo, periodo);
    }

    avaliarAluno(nomeAluno){
        if(novoUser.nota >= 6){
            return `${nomeAluno} aprovado(a) pelo(a) professor(a) ${this.nome}!`
        }
        return `${nomeAluno} reprovado(a) pelo(a) professor(a) ${this.nome}.`
    }

    // exibirInfo(){
    //     const info = super.exibirInfo();
    //     let infoProf = info.replace(/Nome: /g, "").replace(/\nNota: undefined/g, "");
    //     return `${this.cargo} ${infoProf}`;
    // }
}

const novoDocente = new Docente("Grace", "bolocenoura@gmail.com", "07/05/1990", undefined, "Docente", "Vespertino");
// console.log(novoDocente.avaliarAluno("Claudineia"));