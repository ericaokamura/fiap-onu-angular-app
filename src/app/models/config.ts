export class Config {

    nomeUsuario: string;
    perfilPublico: boolean;
    acessibilidade: boolean;
    ultimaAtualizacao: Date;

    constructor(nomeUsuario: string, perfilPublico: boolean, acessibilidade: boolean, ultimaAtualizacao: Date) {
        this.nomeUsuario = nomeUsuario;
        this.perfilPublico = perfilPublico;
        this.acessibilidade = acessibilidade;
        this.ultimaAtualizacao = ultimaAtualizacao;
    }
}