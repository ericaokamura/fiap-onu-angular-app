import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root' 
})
export class AuthGuard implements CanActivate {

  constructor(private router : Router){}

  canActivate(): boolean {
    let token = localStorage.getItem('token');
    let usuarioLogado = localStorage.getItem('usuarioLogado');
    if(token === '' || usuarioLogado === ''){
      this.router.navigate(['/login'])
      return false;
    } else{
      console.log("logado!");
      return true;
    }
  }  
}
