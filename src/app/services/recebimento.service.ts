import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recebido } from "../models/recebido";


@Injectable({
    providedIn: 'root'
})
export class RecebimentoService {

    token: string = '';

    constructor(private httpClient: HttpClient) {
        this.token = localStorage.getItem('token')!;
    }

    configUrl = 'http://localhost:8091/recebimento';

    receber(recebido: any) {
        console.log(recebido);
        let httpHeaders = new HttpHeaders();
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.post<Recebido>(this.configUrl, recebido, { headers: httpHeaders });
    }

    retornarTodosRecebidosPorUsuario(usuarioLogado: string) {
        console.log(usuarioLogado);
        let url = this.configUrl + `/` + usuarioLogado;
        let httpHeaders = new HttpHeaders();
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.get<Recebido[]>(url, { headers: httpHeaders });
    }
}