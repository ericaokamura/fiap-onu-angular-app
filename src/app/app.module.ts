import { PerfilModule } from './pages/perfil/perfil.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/login.module';
import { CadastroModule } from './pages/cadastro/cadastro.module';
import { HttpClientModule } from '@angular/common/http';
import { DoacaoModule } from './pages/doacao/doacao/doacao.module';
import { VendaModule } from './pages/venda/venda/venda.module';
import { CompraModule } from './pages/compra/compra/compra.module';
import { RecebimentoModule } from './pages/recebimento/recebimento.module';
import { CarrinhoComprasModule } from './pages/carrinho-compras/carrinho-compras.module';
import { VisualizarAnuncioModule } from './pages/visualizar-anuncio/visualizar-anuncio.module';
import { PagamentoModule } from './pages/pagamento/pagamento.module';
import { DadosPerfilModule } from './pages/dados-perfil/dados-perfil.module';
import { ConfigModule } from './pages/config/config.module';
import { PerfilComponent } from './pages/perfil/perfil.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        LoginModule,
        CadastroModule,
        VendaModule,
        DoacaoModule,
        CompraModule,
        RecebimentoModule,
        CarrinhoComprasModule,
        VisualizarAnuncioModule,
        PagamentoModule,
        DadosPerfilModule,
        ConfigModule,
        DadosPerfilModule,
        BrowserAnimationsModule,
        PerfilModule
    ]
})
export class AppModule { }
