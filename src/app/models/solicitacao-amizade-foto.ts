export class SolicitacaoAmizadeFoto {

    solicitacaoId: number;
    solicitanteNomeUsuario: string;
    recebeNomeUsuario: string;
    amizadeAprovada: boolean;
    dataHoraSolicitacao: Date;
    dataHoraAprovacao: Date | undefined;
    dataHoraDelecao: Date | undefined;
    fotoPerfil: string;


    constructor(solicitacaoId: number, solicitanteNomeUsuario: string, recebeNomeUsuario: string, amizadeAprovada: boolean,
        dataHoraSolicitacao: Date, dataHoraAprovacao: Date, dataHoraDelecao: Date, fotoPerfil: string) {
            this.solicitacaoId = solicitacaoId;
            this.solicitanteNomeUsuario = solicitanteNomeUsuario;
            this.recebeNomeUsuario =recebeNomeUsuario;
            this.amizadeAprovada = amizadeAprovada;
            this.dataHoraSolicitacao = dataHoraSolicitacao;
            this.dataHoraAprovacao = dataHoraAprovacao;
            this.dataHoraDelecao = dataHoraDelecao;
            this.fotoPerfil = fotoPerfil;
    }
}