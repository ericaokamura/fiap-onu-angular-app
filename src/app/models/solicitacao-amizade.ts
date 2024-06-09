export class SolicitacaoAmizade {

    solicitacaoId: number;
    solicitanteNomeUsuario: string;
    recebeNomeUsuario: string;
    amizadeAprovada: boolean;
    dataHoraSolicitacao: Date;
    dataHoraAprovacao: Date | undefined;
    dataHoraDelecao: Date | undefined;


    constructor(solicitacaoId: number, solicitanteNomeUsuario: string, recebeNomeUsuario: string, amizadeAprovada: boolean,
        dataHoraSolicitacao: Date, dataHoraAprovacao: Date, dataHoraDelecao: Date) {
            this.solicitacaoId = solicitacaoId;
            this.solicitanteNomeUsuario = solicitanteNomeUsuario;
            this.recebeNomeUsuario =recebeNomeUsuario;
            this.amizadeAprovada = amizadeAprovada;
            this.dataHoraSolicitacao = dataHoraSolicitacao;
            this.dataHoraAprovacao = dataHoraAprovacao;
            this.dataHoraDelecao = dataHoraDelecao;
    }
}