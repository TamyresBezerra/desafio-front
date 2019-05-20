import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service'
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;

  constructor(private usuarioService: UsuarioService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  async criarUsuario(){
    
    this.usuarioService.cadastrarUsuario(this.email, this.senha, this.nome).
      then(item=>{
        this.router.navigate(["/login"])
      }).catch(
      erro=>{
        this.openSnackBar("Ocorreu um problema ao tentar se cadastrar", "")
      })

  }
}
