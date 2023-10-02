import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadComponent } from './core/head/head.component';
import { MenuComponent } from './core/menu/menu.component';
import { AddContactComponent } from './pages/add-contact/add-contact.component';
import { AddFormContactComponent } from './pages/add-contact/add-form-contact/add-form-contact.component';
import { RoutingModule } from './routing.module';
import { EditContactComponent } from './pages/list-contact/edit-contact/edit-contact.component';
import { ListContactComponent } from './pages/list-contact/list-contact.component';
import { UsersService } from './services/users.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from "./core/layout/layout.component";
import { TypeScriptComponent } from "./type-script/type-script.component";

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    MenuComponent,
    AddContactComponent,
    ListContactComponent,
    AddFormContactComponent,
    EditContactComponent,
    LoginComponent,
    LayoutComponent,
    TypeScriptComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
