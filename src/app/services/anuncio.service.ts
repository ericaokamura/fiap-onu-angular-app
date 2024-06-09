import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Anuncio } from "../models/anuncio";


@Injectable({
    providedIn: 'root'
})
export class AnuncioService {
    

    token: string = '';

    constructor(private httpClient: HttpClient) {
        this.token = localStorage.getItem('token')!;
    }

    configUrl = 'http://localhost:8091/anuncio';

    salvar(anuncio: any) {
        console.log(anuncio);
        let httpHeaders = new HttpHeaders();
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.post<Anuncio>(this.configUrl, anuncio, { headers: httpHeaders });
    }

    atualizarAnuncio(anuncio: Anuncio) {
        console.log(anuncio);
        let httpHeaders = new HttpHeaders();
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.put<Anuncio>(this.configUrl, anuncio, { headers: httpHeaders });
    }

    retornarTodosAnuncios() {
        let url = this.configUrl + `/`;
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', "GET, POST, OPTIONS, DELETE");
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.get<Anuncio[]>(url, { headers: httpHeaders });
    }

    retornarAnunciosPorUsuario(nomeUsuario: string) {
        let url = this.configUrl + `/` + nomeUsuario + `/nomeUsuario`;
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.get<Anuncio[]>(url, { headers: httpHeaders });
    }

    retornarAnuncioPorId(id: number) {
        let url = this.configUrl + `/id/` + id;
        console.log(url);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', "GET, POST, OPTIONS, DELETE");
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.get<Anuncio>(url, { headers: httpHeaders });
    }

    ordenarPorDataHoraPublicacao() {
        let url = this.configUrl + `/dataHoraPublicacao`;
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', 'OPTIONS');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.get<Anuncio[]>(url, { headers: httpHeaders });
    }

    ordenarPorPreco() {
        let url = this.configUrl + `/preco`;
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', 'OPTIONS');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.get<Anuncio[]>(url, { headers: httpHeaders });
    }

    retornarAnunciosPorTitulo(titulo: string) {
        let url = this.configUrl + `/titulo/` + titulo;
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.get<Anuncio[]>(url, { headers: httpHeaders });
    }
}