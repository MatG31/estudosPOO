export let cursos = [];

export default class User{
    #email
    #periodo
    #nota
    constructor(nome, email, dataNasc, ativo = true, cargo, periodo, nota){
        this.nome = nome;
        this.#email = email;
        this.dataNasc = dataNasc;
        this.ativo = ativo;
        this.cargo = cargo || "Estudante";
        this.#periodo = periodo;
        this.#nota = nota;
    }

    get email(){
        return this.#email; 
    }
    
    get periodo(){
        return this.#periodo;
    }

    set periodo(novoPeriodo){
        if(novoPeriodo.includes("Noturno") || novoPeriodo.includes("Vespertino") || novoPeriodo.includes("Diurno")){
            this.#periodo = novoPeriodo;
        }else{
            throw new Error("É preciso escolher entre uma das opções de período já definidas.")
        }
    }

    #exibirNota(){
        return this.#nota;
    }

    // exibirInfo(){
    //     return `Nome: ${this.nome} \nEmail: ${this.email} \nStatus: ${this.ativo == true?"Ativo":"Inativo"} \nCargo: ${this.cargo} \nPeríodo: ${this.periodo}`;
    // }

    // exibirInfo(){
    //     if(this.cargo === "Estudante"){
    //         return `Nome: ${this.nome} \nNota: ${this.#exibirNota()}`;
    //     }
    //     if(this.cargo === "Docente"){
    //         return `Professor ${this.nome}, ${this.ativo == true?"pronto para responder suas dúvidas.":"offline no momento, aguarde para solucionar suas dúvidas."}`;
    //     }
    //     if(this.cargo === "Admin"){
    //         return `Nome: ${this.nome} \n${this.cargo}istrador do sistema`
    //     }
    // }

    exibirInfo(cargo){
        const possiveisInfos = {
            "Estudante": `Nome: ${this.nome} \nNota: ${this.#exibirNota()}`,
            "Docente": `Professor ${this.nome}, ${this.ativo == true?"pronto para responder suas dúvidas.":"offline no momento, aguarde para solucionar suas dúvidas."}`,
            "Admin": `Nome: ${this.nome} \n${this.cargo}istrador do sistema`,
        }
        return possiveisInfos[cargo];
    }

    exibirListaCursos(){
        return cursos;
    }

    static checagemSistema(){
        return "Sistema funcionando!";
    }
}

export const novoUser = new User("Matheus", "matheusgameleira31@gmail.com", "31/01/2006", undefined, undefined, "Vespertino", 0);
