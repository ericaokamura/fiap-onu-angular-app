import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Carrinho } from "../models/carrinho";

@Injectable({
    providedIn: 'root'
})
export class CarrinhoService {
    

    token: string = '';

    constructor(private httpClient: HttpClient) {
        this.token = localStorage.getItem('token')!;
    }

    configUrl = 'http://localhost:8091/carrinho';

    retornarCarrinhoDeUsuario(nomeUsuario: string) {
        let url = this.configUrl + `/` + nomeUsuario;
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', "GET, POST, OPTIONS, DELETE");
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.get<Carrinho>(url, { headers: httpHeaders });
    }

    retornarPorId(carrinhoId: string) {
        let url = this.configUrl + `/` + carrinhoId + `/id`;
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', "GET, POST, OPTIONS, DELETE");
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.get<Carrinho>(url, { headers: httpHeaders });
    }

}

