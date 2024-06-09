export class Produto {

    anuncioId: number;
    carrinhoId: number;
    titulo: string;
    descricao: string;
    fotoAnuncio: string;
    preco: number;
    dataHoraProdutoAdicionado: Date;

    constructor(anuncioId: number, carrinhoId: number, titulo: string, descricao: string, fotoAnuncio: string, preco: number, dataHoraProdutoAdicionado: Date) {
        this.anuncioId = anuncioId;
        this.carrinhoId = carrinhoId;
        this.titulo = titulo;
        this.descricao = descricao;
        this.fotoAnuncio = fotoAnuncio;
        this.preco = preco;
        this.dataHoraProdutoAdicionado = dataHoraProdutoAdicionado;
    }

}