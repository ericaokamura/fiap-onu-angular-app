import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ThisReceiver } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Produto } from "../models/produto";

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {

    token: string = '';
  

    constructor(private httpClient: HttpClient) {
        this.token = localStorage.getItem('token')!;
    }

    configUrl = 'http://localhost:8091/produto';


    adicionarProdutoEmCarrinhoDeUsuario(produto: any){
        let url = this.configUrl + `/`;
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', "GET, POST, OPTIONS, DELETE");
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.post<Produto>(url, produto, { headers: httpHeaders });
    }

    retornarProdutosEmCarrinhoDeUsuario(carrinhoId: number) {
        let url = this.configUrl + `/`+ carrinhoId + `/carrinho`;
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', url);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', "GET, POST, OPTIONS, DELETE");
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.get<Produto[]>(url, { headers: httpHeaders });
    }

    esvaziarCarrinhoDeUsuario(carrinhoId: string) {
        let url = this.configUrl + `/`+ carrinhoId + `/carrinho`;
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', url);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', "GET, POST, OPTIONS, DELETE");
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.delete(url, { headers: httpHeaders });
    }

}