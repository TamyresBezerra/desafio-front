import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service'
import { MatSnackBar } from '@angular/material'

@Component({
  selector: 'app-listagem-pedido',
  templateUrl: './listagem-pedido.component.html',
  styleUrls: ['./listagem-pedido.component.scss']
})
export class ListagemComponent implements OnInit {

  pedidos = []

  constructor(private usuarioService: UsuarioService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.listarPedidos()
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  listarPedidos(){
    this.usuarioService.getPedidos()
    .then((pedidos:any)=>{
      console.log(pedidos)
      pedidos.forEach(element => {
        element.produtos_processados = []
        this.buscarProdutos(element)
      });
      this.pedidos = pedidos
    }).catch(err=>{
      this.openSnackBar("Ocorreu um erro ao listar pedidos, atualize a página para tentar novamente", "");
    });
  }

  buscarProdutos(pedido){
    pedido.produtos.forEach(id_produto=>{
      this.usuarioService.getProduto(id_produto)
      .then(produto=>{
        pedido.produtos_processados.push(produto);
      })
    })
  }
}