import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service'
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-cadastro-pedido',
  templateUrl: './cadastro-pedido.component.html',
  styleUrls: ['./cadastro-pedido.component.scss']
})
export class CadastroPedidoComponent implements OnInit {

  categorias = [];
  produtos_selecionados = [];

  constructor(private usuarioService: UsuarioService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.listCategoria();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  async listCategoria(){
    this.usuarioService.getCategorias().then((categorias:any)=>{
      categorias.forEach(element => {
        element.produtos = [];
        this.listProdutos(element);
      });
      this.categorias = categorias
    }).catch(err=>{
      this.openSnackBar("Ocorreu um problema ao listar Categorias", "")
    });
  }

  listProdutos(categoria){
     this.usuarioService.getProdutos(categoria.id)
     .then(produtos=>{
      categoria.produtos = produtos
     }).catch(err=>{
      this.openSnackBar("Ocorreu um problema ao listar Produtos", "")
     });
  }

  produtoSelecionado(id_categoria, id_produto){
    
    for(let i=0; i<this.produtos_selecionados.length; i++){
      if(this.produtos_selecionados[i].id_categoria == id_categoria){
        this.produtos_selecionados[i].id_produto = id_produto;
        return;
      }
    }

    this.produtos_selecionados.push({
      id_categoria: id_categoria,
      id_produto: id_produto
    });

  }

  finalizarPedido(){
    if(this.produtos_selecionados.length == this.categorias.length){
      let produtos = []
      this.produtos_selecionados.forEach(item=>{
        produtos.push(item.id_produto)
      })
      this.usuarioService.cadastrarPedido(produtos).then(pedido=>{
        this.openSnackBar("Seu pedido foi realizado com sucesso", "")
      }).catch(err=>{
        this.openSnackBar("Ocorreu um problema ao tentar realizar seu pedido. Tente novamente", "")
      });
    }else{
      this.openSnackBar("Ocorreu um problema ao finalizar pedido", "")
    }
  }
}