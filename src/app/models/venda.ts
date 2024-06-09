export class Venda {

    titulo: string;
    descricao: string;
    nomeUsuario: string;
    anuncioId: number;
    preco: number;
    dataHoraVenda: Date;

    constructor(titulo: string, descricao: string, nomeUsuario: string, anuncioId: number, preco: number, dataHoraVenda: Date) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.nomeUsuario = nomeUsuario;
        this.anuncioId = anuncioId;
        this.preco = preco;
        this.dataHoraVenda = dataHoraVenda;
    }

}