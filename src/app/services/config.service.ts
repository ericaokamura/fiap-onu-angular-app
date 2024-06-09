import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Config } from "../models/config";

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    token: string = '';

    constructor(private httpClient: HttpClient) {
        this.token = localStorage.getItem('token')!;
    }

    configUrl = 'http://localhost:8091/configuracao';

    atualizar(config: any) {
        console.log(config);
        let url = this.configUrl + `/`;
        let httpHeaders = new HttpHeaders();
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        return this.httpClient.put<Config>(url, config, { headers: httpHeaders });
    }

    retornar(usuarioLogado: string) {
        console.log(usuarioLogado);
        let url = this.configUrl + `/nomeUsuario/` + usuarioLogado;
        let httpHeaders = new HttpHeaders();
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        return this.httpClient.get<Config>(url, { headers: httpHeaders });
    }

}