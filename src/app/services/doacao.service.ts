import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Doacao } from "../models/doacao";

@Injectable({
    providedIn: 'root'
})
export class DoacaoService {

    token: string = '';

    constructor(private httpClient: HttpClient) {
        this.token = localStorage.getItem('token')!;
    }

    configUrl = 'http://localhost:8091/doacao';

    doar(doacao: any) {
        console.log(doacao);
        let httpHeaders = new HttpHeaders();
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.post<Doacao>(this.configUrl, doacao, { headers: httpHeaders });
    }

    retornarTodasDoacoesPorUsuario(usuarioLogado: string) {
        console.log(usuarioLogado);
        let url = this.configUrl + `/` + usuarioLogado;
        let httpHeaders = new HttpHeaders();
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.get<Doacao[]>(url, { headers: httpHeaders });
    }
}