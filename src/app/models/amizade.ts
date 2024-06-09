export class Amizade {

    seguidorNomeUsuario: string;
    seguidoNomeUsuario: string;
    dataHoraInicio: Date | undefined;
    dataHoraFim: Date | undefined;
    amigos: boolean;

    constructor(seguidorNomeUsuario: string, seguidoNomeUsuario: string, dataHoraInicio: Date, dataHoraFim: Date, amigos: boolean) {
        this.seguidorNomeUsuario = seguidoNomeUsuario;
        this.seguidoNomeUsuario = seguidoNomeUsuario;
        this.dataHoraFim = dataHoraFim;
        this.dataHoraInicio = dataHoraInicio;
        this.amigos = amigos;
    }
}