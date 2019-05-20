import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {MatTabsModule} from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    CadastroComponent,
  ],
  imports: [
    HomeRoutingModule,
    MatIconModule,
    TabsModule.forRoot(),
    MatTabsModule,
    CommonModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: []
})
export class HomeModule { }
