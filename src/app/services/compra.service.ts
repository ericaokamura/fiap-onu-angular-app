import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Compra } from "../models/compra";


@Injectable({
    providedIn: 'root'
})
export class CompraService {

    token: string = '';

    constructor(private httpClient: HttpClient) {
        this.token = localStorage.getItem('token')!;
    }

    configUrl = 'http://localhost:8091/compra';

    comprar(compra: any) {
        console.log(compra);
        let url = this.configUrl + `/`;
        let httpHeaders = new HttpHeaders();
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.post<Compra>(url, compra, { headers: httpHeaders });
    }

    retornarTodasComprasPorUsuario(usuarioLogado: string) {
        console.log(usuarioLogado);
        let url = this.configUrl + `/` + usuarioLogado;
        let httpHeaders = new HttpHeaders();
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.get<Compra[]>(url, { headers: httpHeaders });
    }
}