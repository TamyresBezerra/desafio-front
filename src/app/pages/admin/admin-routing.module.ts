
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemComponent } from './listagem-pedido/listagem-pedido.component';
import { AdminComponent } from './admin.component';
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listagem-pedidos',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminComponent,
    children:[
      {
        path: 'listagem-pedidos',
        component: ListagemComponent
      },
      {
        path: 'cadastro-pedido',
        component: CadastroPedidoComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
