import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = "https://apidesafio.herokuapp.com"

  constructor(private http: HttpClient) { }
  
  async cadastrarUsuario(email:string, password:string, username:string){
   
    return this.http.post(`${this.url}/rest-auth/registration/`, {
      username: username,
      email: email,
      password1: password,
      password2: password
    } ).toPromise();

  }
  
  async loginUsuario(email:string, password:string, nome:string){
    return this.http.post(`${this.url}/rest-auth/login/`, {
      username: nome,
      email: email,
      password: password
    }).toPromise();
  }

  async getCategorias(){
    return this.http.get(`${this.url}/categorias/`, {
      headers: this.header()
    }).toPromise();
  }

  header(){
    let header = new HttpHeaders();
    let token = localStorage.getItem("token");
    if(token){
      header = new HttpHeaders({"Authorization":`Token ${token}`});
    }

    return header;
  }

  async getProdutos(id_categoria){
    return this.http.get(`${this.url}/produtos/?especificacao=&preco=&categoria=${id_categoria}`, {
      headers: this.header()
    }).toPromise();
  }

  async cadastrarPedido(produtos){
    return this.http.post(`${this.url}/pedidos/`, {
      produtos: produtos
    }, {
      headers: this.header()
    }).toPromise();
  }

  async getPedidos(){
    return this.http.get(`${this.url}/pedidos/`, {
      headers: this.header()
    }).toPromise();
  }

  async getProduto(id_produto){
    return this.http.get(`${this.url}/produto/${id_produto}/`, {
      headers: this.header()
    }).toPromise();
  }

}
