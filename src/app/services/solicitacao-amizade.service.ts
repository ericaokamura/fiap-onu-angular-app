import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SolicitacaoAmizade } from "../models/solicitacao-amizade";


@Injectable({
    providedIn: 'root'
})
export class SolicitacaoAmizadeService {
    
    token: string = '';

    constructor(private httpClient: HttpClient) {
        this.token = localStorage.getItem('token')!;
    }

    configUrl = 'http://localhost:8091/solicitacaoAmizade';
    

    salvarSolicitacaoAmizade(solicitacaoAmizade: any) {
        console.log(solicitacaoAmizade);
        let httpHeaders = new HttpHeaders();
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        return this.httpClient.post<SolicitacaoAmizade>(this.configUrl, solicitacaoAmizade, { headers: httpHeaders });
    }

    atualizarSolicitacaoAmizade(solicitacaoAmizade: any) {
        console.log(solicitacaoAmizade);
        let url = this.configUrl + '/atualizar';
        let httpHeaders = new HttpHeaders();
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        return this.httpClient.put<SolicitacaoAmizade>(url, solicitacaoAmizade, { headers: httpHeaders });
    }

    aprovarSolicitacaoAmizade(solicitacaoAmizade: SolicitacaoAmizade) {
        let httpHeaders = new HttpHeaders();
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        return this.httpClient.put<SolicitacaoAmizade>(this.configUrl, solicitacaoAmizade, { headers: httpHeaders });
    }

    deletarSolicitacaoAmizade(solicitante: string, recebe: string) {
        let url = this.configUrl + `/solicitante/` + solicitante + `/recebe/` + recebe;
        let httpHeaders = new HttpHeaders();
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        return this.httpClient.delete(url, { headers: httpHeaders });
    }


    retornarSolicitacoesAmizadePorUsuario(nomeUsuario: string) {
        let url = this.configUrl + `/nomeUsuario/` + nomeUsuario;
        let httpHeaders = new HttpHeaders();
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        return this.httpClient.get<SolicitacaoAmizade[]>(url, { headers: httpHeaders });
    }

    retornarSolicitacaoAmizade(usuarioLogado: string, nomeUsuarioPerfil: string) {
        let url = this.configUrl + `/solicitante/` + usuarioLogado + `/recebe/` + nomeUsuarioPerfil;
        let httpHeaders = new HttpHeaders();
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        return this.httpClient.get<SolicitacaoAmizade>(url, { headers: httpHeaders });
    }

}