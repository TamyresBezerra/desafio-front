import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListagemComponent } from './listagem-pedido/listagem-pedido.component'
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    ListagemComponent,
    CadastroPedidoComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    MatIconModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: []
})
export class AdminModule { }
