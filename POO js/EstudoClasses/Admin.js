import User, { novoUser } from "./User.js";
import { cursos } from "./User.js";

export default class Admin extends User{
    constructor (nome, email, dataNasc, ativo, cargo = "Admin", horario){
        super(nome, email, dataNasc, ativo, cargo, horario);
    }

    criarCurso(nomeCurso, cargaHoraria){
        cursos.unshift(nomeCurso);
        return `Curso ${nomeCurso} criado com duração estimada de ${cargaHoraria} horas.`
    }

    excluirCurso(nomeCurso){
        cursos.shift(nomeCurso);
        return `Curso ${nomeCurso} excluído.`
    }

    desativarPerfil(){
        novoUser.ativo = false;
        return `Perfil do usuário ${novoUser.nome} desativado.`;
    }
}

const novoAdmin  = new Admin("Juvenal", "brownie@gmail.com", "21/10/1960", undefined, undefined, "Noturno");
// console.log(novoAdmin.exibirInfo());
//  console.log(novoAdmin.criarCurso("Consultas em SQL", 15));
//  console.log(novoAdmin.criarCurso("Git e Github: dominando o controle e versionamento de código", 10));
//  console.log(novoUser.exibirListaCursos());
//  console.log(novoAdmin.excluirCurso("Git e Github: dominando o controle e versionamento de código"));
//  console.log(novoUser.exibirListaCursos());
//  console.log(novoAdmin.criarCurso("Iniciando em Typescript", 5));
//  console.log(novoAdmin.criarCurso("Front-End com React.JS", 20));
//  console.log(novoUser.exibirListaCursos());
// console.log(novoUser)
// console.log(novoAdmin.desativarPerfil())
// console.log(novoUser)