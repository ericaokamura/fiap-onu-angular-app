import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DadosTokenJWT } from "../models/dados-token-jwt";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class AutenticacaoService {

    configUrl = 'http://localhost:8091/login';

    constructor(private httpClient: HttpClient) {

    }

    login(dados: any) {
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', "GET, POST, OPTIONS, DELETE");
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post<DadosTokenJWT>(this.configUrl, dados, { headers: httpHeaders });
    }
}
