import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser2 = new User("Clodoaldo", "sonhodecreme@gmail.com", "10-03-2002", undefined, undefined, "Diurno", 5);

// console.log(novoUser2.exibirInfo());
// console.log(novoUser2);
// novoUser2.nota = 10;
// if(novoUser2.nota != undefined){
//     console.log("Tentando mudar a nota né espertinho, VOCÊ VAI REPROVAAAAR");
//     delete novoUser2.nota;
// }
// console.log(novoUser2);

// console.log(novoUser2.exibirInfo());

const novoAdmin  = new Admin("Antonio", "biscoitoamanteigado@gmail.com", "25-11-1980", undefined, "Admin", "Diurno", 6);
const novoDocente = new Docente("Aoki", "panqueca@gmail.com", "07-02-1961", undefined, "Docente", "Diurno");
// console.log(novoAdmin.exibirInfo());

// console.log(novoAdmin.email);
 
// console.log(novoDocente.periodo);
// novoDocente.periodo = "Batata";
// novoDocente.periodo = "Noturno";
// console.log(novoDocente.periodo);

// console.log(novoAdmin.exibirInfo(), "\n");
// console.log(novoDocente.exibirInfo(), "\n");
// console.log(novoUser2.exibirInfo(), "\n");

//console.log(User.checagemSistema());

console.log(novoDocente.exibirInfo("Docente"));