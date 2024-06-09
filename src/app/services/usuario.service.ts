import { HttpClient, HttpHeaders, HttpXsrfTokenExtractor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable } from "rxjs";
import { Usuario } from "../models/usuario";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {


    token: string = '';

    constructor(private httpClient: HttpClient) {
        this.token = localStorage.getItem('token')!;
    }

    configUrl = 'http://localhost:8091/usuario';

    cadastrar(usuario: any) {
        console.log(usuario);
        let url = this.configUrl + `/`;
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', "*");
        return this.httpClient.post<Usuario>(url, usuario, { headers: httpHeaders });

    }

    atualizarCadastro(usuario: any) {
        console.log(usuario);
        let url = this.configUrl + `/`;
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', "*");
        httpHeaders = httpHeaders.set('Access-Control-Allow-Credentials', "true");
        return this.httpClient.put<Usuario>(url, usuario, { headers: httpHeaders });
    }

    retornarPorId(id: number) {
        let url = this.configUrl + `/` + id;
        return this.httpClient.get<Usuario>(url);
    }

    retornarPorNomeUsuario(nomeUsuario: string) {
        let url = this.configUrl + `/` + nomeUsuario + `/nomeUsuario`;
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', "OPTIONS");
        return this.httpClient.get<Usuario>(url, { headers: httpHeaders })
        
    }
}