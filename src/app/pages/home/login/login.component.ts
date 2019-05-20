import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service'
import { async } from '@angular/core/testing';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  nome: string;

  constructor(private usuarioService: UsuarioService, private snackBar: MatSnackBar, private router:Router) { }

  ngOnInit() {

  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  async loginUsuario(){
    
    this.usuarioService.loginUsuario(this.email, this.password, this.nome).
      then((item:any)=>{
        localStorage.setItem("token", item.key);
        this.router.navigate(["/admin/listagem-pedidos"])
      }).catch(
      erro=>{
        this.openSnackBar("Credencias incorretas. Tente novamente", "")
      })
  
   }

}
