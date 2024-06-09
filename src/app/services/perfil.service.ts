import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Perfil } from "../models/perfil";


@Injectable({
    providedIn: 'root'
})
export class PerfilService {

    token: string = '';

    constructor(private httpClient: HttpClient) {
        this.token = localStorage.getItem('token')!;
    }

    configUrl = 'http://localhost:8091/perfil';

    retornarPerfil(nomeUsuario: string) {
        let url = this.configUrl + `/` + nomeUsuario;
        let httpHeaders = new HttpHeaders();
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', 'OPTIONS');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.get<Perfil>(url, { headers: httpHeaders });
    }

    atualizarPerfil(perfil: Perfil) {
        let url = this.configUrl + `/`;
        let httpHeaders = new HttpHeaders();
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.put<Perfil>(url, perfil, { headers: httpHeaders });
    }
}
