export class Usuario {

    nomeUsuario: string;
    senha: string;
    email: string;
    nomeCompleto: string;
    fotoPerfil: string;
    ultimaAtualizacao: Date;
     
    constructor(nomeUsuario: string, senha: string, email: string, nomeCompleto: string, fotoPerfil: string, ultimaAtualizacao: Date){
        this.nomeUsuario = nomeUsuario;
        this.senha = senha;
        this.email = email;
        this.nomeCompleto = nomeCompleto;
        this.fotoPerfil = fotoPerfil;
        this.ultimaAtualizacao = ultimaAtualizacao;
    }

}