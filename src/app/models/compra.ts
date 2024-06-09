export class Compra {

    titulo: string;
    descricao: string;
    nomeUsuario: string;
    anuncioId: number;
    preco: number;
    dataHoraCompra: Date;

    constructor(titulo: string, descricao: string, nomeUsuario: string, anuncioId: number, preco: number, dataHoraCompra: Date) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.nomeUsuario = nomeUsuario;
        this.anuncioId = anuncioId;
        this.preco = preco;
        this.dataHoraCompra = dataHoraCompra;
    }

}