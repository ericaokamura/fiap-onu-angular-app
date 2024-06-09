import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Compra } from "../models/compra";
import { Venda } from "../models/venda";


@Injectable({
    providedIn: 'root'
})
export class VendaService {

    token: string = '';

    constructor(private httpClient: HttpClient) {
        this.token = localStorage.getItem('token')!;
    }

    configUrl = 'http://localhost:8091/venda';

    salvar(venda: any) {
        console.log(venda);
        let url = this.configUrl + `/`;
        let httpHeaders = new HttpHeaders();
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.post<Venda>(url, venda, { headers: httpHeaders });
    }

    retornarTodasVendasPorUsuario(nomeUsuario: string) {
        let url = this.configUrl + `/` + nomeUsuario;
        let httpHeaders = new HttpHeaders();
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        return this.httpClient.get<Venda[]>(url, { headers: httpHeaders });
    }

}