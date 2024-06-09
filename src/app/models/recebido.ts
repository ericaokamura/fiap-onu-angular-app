export class Recebido {

    titulo: string;
    descricao: string;
    nomeUsuario: string;
    anuncioId: number;
    dataHoraRecebimento: Date;

    constructor(titulo: string, descricao: string, nomeUsuario: string, anuncioId: number, dataHoraRecebimento: Date) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.nomeUsuario = nomeUsuario;
        this.anuncioId = anuncioId;
        this.dataHoraRecebimento = dataHoraRecebimento;
    }
}