import { VisualizarAnuncioComponent } from './pages/visualizar-anuncio/visualizar-anuncio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { DoacaoComponent } from './pages/doacao/doacao/doacao.component';
import { VendaComponent } from './pages/venda/venda/venda.component';
import { CompraComponent } from './pages/compra/compra/compra.component';
import { RecebimentoComponent } from './pages/recebimento/recebimento.component';
import { CarrinhoComprasComponent } from './pages/carrinho-compras/carrinho-compras.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { DadosPerfilComponent } from './pages/dados-perfil/dados-perfil.component';
import { ConfigComponent } from './pages/config/config.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AuthGuard } from './security/auth.guard';


export const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent, canActivate : [ AuthGuard ] },
  { path: 'venda', component: VendaComponent, canActivate : [ AuthGuard ] },
  { path: 'doacao', component: DoacaoComponent, canActivate : [ AuthGuard ] },
  { path: 'compra', component: CompraComponent, canActivate : [ AuthGuard ] },
  { path: 'recebimento', component: RecebimentoComponent, canActivate : [ AuthGuard ] },
  { path: 'visualizar-anuncio/:id', component: VisualizarAnuncioComponent, canActivate : [ AuthGuard ] },
  { path: 'carrinho-compras/:id', component: CarrinhoComprasComponent, canActivate : [ AuthGuard ] },
  { path: 'pagamento', component: PagamentoComponent, canActivate : [ AuthGuard ] },
  { path: 'dados-perfil', component: DadosPerfilComponent, canActivate : [ AuthGuard ] },
  { path: 'config', component: ConfigComponent, canActivate : [ AuthGuard ] },
  { path: 'perfil/:nomeUsuario', component: PerfilComponent, canActivate : [ AuthGuard ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
