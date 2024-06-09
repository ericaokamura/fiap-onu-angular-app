import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Amizade } from "../models/amizade";


@Injectable({
    providedIn: 'root'
})
export class AmizadeService {

    token: string = '';

    constructor(private httpClient: HttpClient) {
        this.token = localStorage.getItem('token')!;
    }

    configUrl = 'http://localhost:8091/amizade';
    

    salvarAmizade(amizade: any) {
        console.log(amizade);
        let url = this.configUrl + `/`;
        let httpHeaders = new HttpHeaders();
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        return this.httpClient.post<Amizade>(url, amizade, { headers: httpHeaders });
    }

    removerAmizade(amizade: any) {
        console.log(amizade);
        let url = this.configUrl + `/`;
        let httpHeaders = new HttpHeaders();
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        return this.httpClient.put<Amizade>(url, amizade, { headers: httpHeaders });
    }

    verificarExistenciaAmizade(seguidor: string, seguido: string) {
        let httpHeaders = new HttpHeaders();
        let url = this.configUrl + `/`+ seguidor + `/seguidor/`+ seguido + `/seguido`;
        console.log(this.token);
        httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + this.token);
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', '*');
        return this.httpClient.get<Amizade>(url, { headers: httpHeaders });

    }
}