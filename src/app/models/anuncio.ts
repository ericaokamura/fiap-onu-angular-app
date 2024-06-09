export class Anuncio {

    id: string;
    nomeUsuario: string;
    titulo: string;
    descricao: string;
    tipoAnuncio: string;
    disponibilidade: boolean;
    dataHoraPublicacao: Date;
    preco: string;
    fotoAnuncio: string;

    constructor(id: string, nomeUsuario: string, titulo: string, descricao: string, 
        preco: string, fotoAnuncio: string, tipoAnuncio: string, 
        disponibilidade: boolean, dataHoraPublicacao: Date) {
        this.id = id;
        this.nomeUsuario = nomeUsuario;
        this.titulo = titulo;
        this.descricao = descricao;
        this.preco = preco;
        this.fotoAnuncio = fotoAnuncio;
        this.tipoAnuncio = tipoAnuncio;
        this.disponibilidade = disponibilidade;
        this.dataHoraPublicacao = dataHoraPublicacao;
    }
}