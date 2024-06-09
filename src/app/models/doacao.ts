export class Doacao {

    titulo: string;
    descricao: string;
    nomeUsuario: string;
    anuncioId: number;
    dataHoraDoacao: Date;

    constructor(titulo: string, descricao: string, nomeUsuario: string, anuncioId: number, dataHoraDoacao: Date) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.nomeUsuario = nomeUsuario;
        this.anuncioId = anuncioId;
        this.dataHoraDoacao = dataHoraDoacao;
    }
}